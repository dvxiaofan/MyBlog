# Vue 学习笔记(二): 计算属性-computed

### computed 与缓存

html 部分

```
<div id="app">
    {{fullName}}
    <span>{{age}}</span>
</div>
```

js 部分

```
let app = new Vue({
    el: '#app',
    data: {
        firstName: 'dev',
        lastName: 'zhang',
        age: 88
    },
    computed: {
        fullName() {
            console.log('计算一次');
            return this.firstName + " " + this.lastName
        }
    },
})
```

实现效果

![](http://imgs.devzhangjs.com/15614706983022.jpg)

动态修改 age 的值, 计算属性不会触发更改, 修改两个参考值中的一个, 计算属性会触发重新计算. 所以计算属性是有缓存的, 在参考值没有发生变化的情况下是不会重复计算和更新 DOM 的, 对性能提升有好处.

![](http://imgs.devzhangjs.com/15614708416808.jpg)


### computed 与 function

html 修改为

```
<div id="app">
    {{fullName()}}
    <span>{{age}}</span>
</div>
```

js 代码修改为

```
let app = new Vue({
    el: '#app',
    data: {
        firstName: 'dev',
        lastName: 'zhang',
        age: 29
    },
    methods: {
        fullName() {
            console.log('执行一次方法');
            return this.firstName + ' ' + this.lastName
        }
    },
})
```

效果图

![](http://imgs.devzhangjs.com/15614715728040.jpg)

这时候虽然效果能实现, 但是每次更新元素里的任何一项, 都会触发方法进行计算, 并更新 DOM,对性能有不必要的浪费


### computed 与 watch

js 代码修改

```
let app = new Vue({
    el: '#app',
    data: {
        firstName: 'dev',
        lastName: 'zhang',
        fullName: 'dev zhang',
    },
    watch: {
        firstName(val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName(val) {
            this.fullName = this.firstName + ' ' + val
        }

    },
})
```

![](http://imgs.devzhangjs.com/15614713168297.jpg)


watch 会监听对应的要素值变化, 这样也能实现和 computed 一样的效果, 但代码量会比 computed 多.















