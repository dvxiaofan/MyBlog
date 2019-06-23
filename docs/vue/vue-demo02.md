# Vue 练习 Demo(二): 组件化动态添加和删除元素

### 在原有基础上修改 div

```
<div id="app">
	<input v-model="inputValue" type="text" />
	<button @click="handleAddBtn">提交</button>
	<ul>
	    <todo-item 
	        :content="item"
	        :index="index"
	        v-for="(item,index) in list"
	        @delete="handleDeleteItem"
	        >
	    </todo-item>
	</ul>
</div>
```

### 创建子组件

```
let TodoItem = {
	// 需要传递的参数
    props: {
        content: this.content,
        index: this.index,
    },
    template: "<li @click='handleItemClick'>{{content}}</li>",
    methods: {
        handleItemClick() {
		       // 向父组件传递事件和参数
            this.$emit("delete", this.index)
        }
    },
}

let app = new Vue({
    el: '#app',
    components: {
        TodoItem
    },
    data: {
        list: [111, 222, 333],
        inputValue: ''
    },
    methods: {
        handleAddBtn() {
            this.list.push(this.inputValue)
            this.inputValue = ''
        },
        handleDeleteItem(index) {
            console.log(index)
            this.list.splice(index, 1)
        }
    },
})
```

### 效果展示

![效果展示](https://storage1.cuntuku.com/2019/06/22/cNT8D.gif)

