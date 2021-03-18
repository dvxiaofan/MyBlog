## React中的setState执行机制



### setState执行机制是什么

React中的一个组件的显示状态可以有数据状态和外部参数所决定，而数据状态就是state，当需要修改里面的值的状态时就需要调用setState来改变，从而达到更新组件内部数据的目的。





### setState更新类型

使用setState更新数据的时候，更新类型分为： 

- 异步更新
- 同步更新



#### 异步更新

执行之后并不会立即得到更新后的值，如果需要立刻获得更新后的值，需要在setState中第二个参数的回调用获取



#### 同步执行

在setTimeout事件或者原生DOM事件中，setState为同步执行



#### 总结

- 在组件声明周期或者React合成事件中，setState为异步执行
- 在setTimeout或者原生DOM事件中， setState为同步执行



### 批量更新

如果顺序批量执行setState来更新数据其结果等于只会 执行最后一次的操作， 前面的都会被覆盖。

如果下一个state需要依赖前一个state， 推荐给setState第一个参数传入一个function来处理

而在setTimeout或者原生DOM事件中，由于是同步执行多次setState操作， 所以不会进行覆盖现象

