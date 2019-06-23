# Vue 练习 Demo(一): 动态添加元素到页面

### 新建一个 index.html 文件,然后完成以下初步编辑

```
<div id="app">
    <input v-model="inputValue" type="text" />
    <button v-on:click="handleAddBtn">提交</button>
    <ul>
        <li v-for="item in list">{{ item }}</li>
    </ul>
</div>
```

### 通过 script 标签引入 Vue

```
<script src="https://cdn.staticfile.org/vue/2.6.2/vue.js"></script>
```

### 编辑 js 内容

```
let app = new Vue({
    el: '#app',
    data: {
        list: ['1', '2'],	// 初识值, 也可以不填
        inputValue: ''		// 和 input 的 inputValue 双向绑定
    },
    methods: {
    		// 添加事件
        handleAddBtn() {
            this.list.push(this.inputValue)
            this.inputValue = ''
        }
    },
})
```

### 效果展示

![效果展示](http://note.youdao.com/yws/public/resource/e5aee210dd5c7810b6553debfbfe7c1d/WEBRESOURCEf605d3654309b4e88491c5cc0206e895?ynotemdtimestamp=1561188602710)

