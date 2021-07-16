# React相关热点问题笔记



## 1. setState是异步还是同步？

1. 合成事件中是异步
2. 钩子函数中是异步
3. 原生事件中是同步
4. setTimeout中是同步



## 2. React16.4+ 生命周期

![image-20210409171026160](http://img.ccyou.icu/20210716/image-20210409171026160.png)



## 3. useEffect(fn, [])和componentDidMount 有什么差异？

`useEffect`会捕获`props`和`state`。所以即便在回调函数里，你拿到的还是初识的props和state。如果想得到最新的值，可以使用ref



## 4. hooks为什么不能放在条件判断里

已setState为例，在React内部，每个组件的hooks都是以链表的形式存在memoizeState属性中：

![image-20210409171523230](http://img.ccyou.icu/20210716/image-20210409171523230.png)



update阶段，每次调用setState，链表就会执行next向后移动一步。如果将setState写在条件判断语句中，假设条件判断不成立，么有执行里面setState方法，会导致接下来所有的setState的取值出现偏移，从而导致异常发生。





## 5.  fiber是什么

React Filber 是一种基于浏览器的单线程调度算法。

React Fiber是类似 requestIdleCallback 的机制来做异步diff。但是之前数据结构不支持这样实现异步diff，浴室React实现了一个类似链表的数据结构，将原来的递归diff变成了现在的遍历diff， 这样就能做到异步可更新了。

![image-20210409171924246](http://img.ccyou.icu/20210716/image-20210409171924246.png)



## 6. diff算法

传统diff算法的时间复杂度是O(n^3)，这在前端render中是不可接受的。为了降低时间复杂度，React的diff算法做了一些妥协，放弃了最优解，最终将时间复杂度降到了O(n)。

主要妥协：

1. tree diff： 只对比同一层的dom节点， 忽略 dom  节点的夸层级移动
2. component diff： 如果不是同一类型组件，就会删除旧组件，创建新的组件。
3. element diff： 对于同一级的一组子节点，需要通过唯一 id 进行区分，如果么有唯一id， 一旦有插入动作，会导致插入位置之后的列表全部重新渲染。这也是为什么渲染列表时为什么要使用唯一的key



## 7. 调用setState之后发生了什么

1. 在 setState 的时候，React会为当前节点创建一个 updateQueue的更新队列
2. 然后会触发 reconciliation 过程，在这个过程中，会使用名为 Fiber 的调度算法，开始生成新的Fiber 树，Fiber 算法的最大特点是可以做到异步可中断的执行。
3. 然后 React Scheduler 会根据优先级高低，先执行优先级高的节点，具体是执行 doWork 方法
4. 在 doWork 方法中， React会执行一遍 updateQueue 中的方法， 以获得新的节点。 然后对比新旧节点， 为老节点打上 更新、插入、替换 等tag
5. 当前节点 doWork 完成后，会执行performUnitOfWork 方法获得新节点，然后再重复上面的过程。
6. 当素有节点都 doWork 完成后， 会触发 commitRoot 方法， React进入commit 阶段
7. 在commit阶段汇总， React会根据前面为各个节点打的tag， 一次性更新整个DOM元素



## 8. 为什么虚拟DOM会提高性能

虚拟DOM相当于在JS和真是DOM之间加了一个缓存，利用diff算法避免了没有必要的DOM操作，从而提高性能



## 9. 错误边界是什么？有什么用？

在React中，如果任何一个组件发生错误， 它将破坏整个组件树，导致整页白屏。这时候我们可以用错误边界优雅地降级处理这些错误

举例： 

```js
class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('组件崩溃 Error: ', error);
    console.log('组件崩溃 Error: ', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.content;
    }
    return this.props.children;
  }
}
```



## 10. 什么是Portals

Portal 提供了一种将子节点渲染到存在于父组件以外的DOM节点的优秀方案

``` javascript
ReactDOM.createPortal(child, container	)
```



## 11. React组件间有哪些通信方式

- 父组件向子组件通信
  - 通过props
- 子组件向父组件通信
  - 主动调用通过props传过来的方法，并将想要传递的信息，作为参数，传递到父组件的作用域中
- 夸层级 通信
  - 使用React自带的Context进行通信，createContext创建上下文，useContext使用上下文![code](http://img.ccyou.icu/20210716/code.png)
  - 使用Redux或者Mobox等状态管理库
  - 使用订阅发布模式



## 12. React父组件如何调用子组件中的方法

1. 如果是在方法组件中调用子组件，可以使用useRef和useImperativeHandle![code](http://img.ccyou.icu/20210716/code-8193235.png)
2. 如果实在类组件中调用子组件，可以使用createRef![code](http://img.ccyou.icu/20210716/code-8193492.png)



## 13. React有哪些优化性能的手段

- 类组件中的优化手段
  - 使用纯组件 PureComponent 作为基类
  - 使用 React.memo 高阶函数包装组件
  - 使用 shouldComonentUpdate 声明周期函数来自定义渲染逻辑
- 方法组件中的优化手段
  - 使用 useMemo
  - 使用useCallBack
- 其他方式
  - 在列表需要频繁变动时，使用唯一 id 作为 key， 而不是数组下标
  - 必要时通过改变 CSS 样式隐藏显示组件，而不是通过条件判断显示隐藏组件。
  - 使用 Suspense 和 lazy 进行懒加载，例如：![code](http://img.ccyou.icu/20210716/code-8194072.png)



## 14. 为什么React元素有一个 $$typeof属性

为了防止XSS攻击，因为 Synbol 无法被序列化，所以React可以通过有没有这个属性来判断当前的 element 对象是从数据库来的还是自己生成的。

如果没有这个属性， React 会拒绝处理该元素



## 15. React如何区分  Class组件 和 FUnction组件

一般的方式是借助 typeof 和 Function。prototype。toString 来判断当前是不是class，但存在弊端，因为如果使用了babel 等编译工具，会将clas 写法全部转换为function  写法， 判断就回失效

React 区分 Class 组件 和 Function 组件的方式很巧妙，由于素有的类组件都要继承 React.Component， 所以只要判断原型链上是否有 React.Component 就可以了。



## 16. HTML 和 React 事件处理有什么区别

在HTML中事件名必须小写： `<button onclick='activateLasers()'>`

而在React中药遵循驼峰写法： `<button onClick={activateLasers}>`

在HTML中阻止默认的行为可以使用返回 false

```javascript
<a href='#' onclick='console.log("The link was clicked."); return false;' />
```

而在React中必须明确调用 `preventDefault`

```javascript
function handleClick(event) {
  event.preventDefault()
  console.log('The link was clicked.')
}
```



## 17. 什么是 suspense 组件

Suspense 让组件 “等待” 某个异步操作，直到该异步操作结束后才可渲染；

![image-20210412113232908](http://img.ccyou.icu/20210716/image-20210412113232908.png)



Suspense 也可以用于懒加载

![image-20210412113412174](http://img.ccyou.icu/20210716/image-20210412113412174.png)



## 18. 为什么 JSX 中组件名要以大写字母开头

因为React要知道当前渲染的是组件还是HTML元素



## 19. redux是什么

Redux 是一个为JavaScript应用设计的，可预测的状态容器。

解决的问题：

- 跨层级之间传递数据变得容易
- 所有对状态的改变都需要dispatch，使得整个数据的改变可追踪

缺点：

- 概念偏多，理解起来不容易
- 样板代码太多



## 20. react-redux 的实现原理

通过redux 和 react context 配合使用，并借助高阶函数， 实现了 react-redux



## 21. Redux 和 mobx 的却别

得益于 mobx 的 observable， 会用mobx可以做到精准更新， 对应的Redux 是用dispatch 进行广播，通过Provider 和connect 来对比前后差别控制更新粒度











































