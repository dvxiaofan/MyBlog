# Vue 基础练习 demo: 一个 input-number 组件

> 最近在学习 Vue,看完官方文档基础部分做了一个小 demo, 提供一个输入框和可供加减操作的按钮, 旨在联系 Vue 的相关基础知识. 本文主要以代码为主


### 创建相关文件
 一个 index.html 文件, 一个 index.js 文件, 还有一个输入框组件文件: input-number.js 文件

### 编辑 input-number.js 组件

直接上代码:

```

// 判断是否为数字
function isValueNumber(value) {
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '');
}

// 数字输入框组件
Vue.component('input-number', {
    template: `
        <div class="input-number">
            <input
                type="text"
                @keyup.down="handleDown"
                @keyup.up="handleUp"
                :value="currentValue"
                @change="handleChange">
            <button
                @click="handleDown"
                :disabled="currentValue <= min">-</button>
            <button
                @click.down="handleUp"
                :disabled="currentValue >= max">+</button>
        </div>`,
        // 组件 props
        props: {
            max: {	// 最大值
                type: Number,
                default: Infinity
            },
            min: {	// 最小值
                type: Number,
                default: -Infinity
            },
            value: {	// 当前值
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                currentValue: this.value
            }
        },
        // 观察探测当前值是否变化
        watch: {
            currentValue(val) {
                this.$emit('input', val);
                this.$emit('on-change', val);
            },
            value(val) {
                this.updateValue(val);
            }
        },
        methods: {
            // 更新当前值
            updateValue(val) {
                if (val > this.max) val = this.max;
                if (val < this.min) val = this.min;
                this.currentValue = val;
            },
            // 按下减号或者方向键下的事件
            handleDown() {
                if (this.currentValue <= this.min) return;
                this.currentValue -= 1;
            },
            // 按下加号或者方向键上的事件
            handleUp() {
                if (this.currentValue >= this.max) return;
                this.currentValue += 1;
            },
            // 监听input变化事件
            handleChange(event) {
                let val = event.target.value.trim();
                let max = this.max;
                let min = this.min;

                if (isValueNumber(val)) {
                    val = Number(val);
                    this.currentValue = val;

                    if (val > max) {
                        this.currentValue = max;
                    } else if (val < min) {
                        this.currentValue = min;
                    }
                } else {
                    event.target.value = this.currentValue;
                }
            }
        },
        mounted () {
            // 更新当前值
            this.updateValue(this.value);
        }
});
```

### 使用组件
在页面引用组件, 并设置最大值和最小值

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <!-- 引用组件 -->
        <input-number v-model="value" :max="10" :min="0"></input-numbe>
    </div>

    <script src="https://cdn.staticfile.org/vue/2.6.2/vue.js"></script>
    <script src="./input-number.js"></script>
    <script src="./index.js"></script>

</body>
</html>
```

### 创建 Vue 实例
在 index.js 里创建Vue 实例并设置初始值

```

// 创建 Vue 实例
let app = new Vue({
    el: '#app',
    data: {
        value: 0	// 最初的默认值
    }
});

```


### 实现效果
如下所示, 可以点击加减号进行数值的增减, 也可以在 input 聚焦的时候使用键盘上下方向键进行同样操作, 超过最大值或者小于最小值的时候不变化

![](http://ww1.sinaimg.cn/large/6b65559dgy1g40mxzefexj20k80cn3yn.jpg)



