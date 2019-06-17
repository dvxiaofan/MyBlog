# Vue 学习笔记: 生命周期
<p align="right">
<em> 2019-06-16 </em>
</p>

-------

> Vue 中很重要的一个知识点,就是生命周期的理解. 搞懂它可以使我们在实际使用中能更好的编写逻辑代码


### 官网图例

先来一张官网关于生命周期的图例

![](http://ww1.sinaimg.cn/large/6b65559dgy1g43xag1r02j20xc2cft9s.jpg)

### 生命周期钩子

- beforeCreate: 实例创建前, 此时不能处理数据
- created: 实例已经创建出来, 属性已绑定, 但 DOM 还未完成, $el 属性还不存在 可以进行数据的处理
- beforeMounted: 实例挂载前, 如果有 el(容器,例如:<div id="app"></div>) 了, 就准备把创建的实例挂载到 el 上
- mounted: 完成挂载实例, 挂载后的 $el 就是渲染后的DOM 元素, 比如: `<div>hello vue</div>`
- beforeUpdated: 更新实例前, 此时数据发生了变化
- updated: 实例完成更新
- beforeDestroy: 实例销毁前, 销毁组件
- destroy: 实例被销毁

> 因为在实例挂载前, 在生命周期钩子里是取不到el 的,所以我们一般会在 created 和 mounted 这两个钩子里进行一些页面渲染前的数据处理工作.


