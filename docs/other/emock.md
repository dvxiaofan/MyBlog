# 用 Easy Mock 模拟伪造服务器数据进行开发调试


> 以前开发的时候需要数据调试要么当前文件代码写死, 要么新建 JSON 文件来获取. 偶然知道了 Easy Mock 这个神奇的网站(可能有点后知后觉), 伪造起数据别提多爽了

## 初次见面
打开[Easy Mock](https://www.easy-mock.com/) 官网, 界面甚至简单,我喜欢, **Hello Easy Mock**

![看到它的第一眼](http://ww1.sinaimg.cn/large/6b65559dgy1g3fvbc4vx4j213v0jyu0x.jpg)

 **Easy Mock 的自我介绍**
 
![简单介绍](http://ww1.sinaimg.cn/large/6b65559dgy1g3fuwz5jewj21380kyq6y.jpg)

## 开启探索之旅
看过介绍, 下面就开始登录使用了

### 强势登录
如果之前没有账号, 会直接注册并进行登录

![登录或注册](http://ww1.sinaimg.cn/large/6b65559dgy1g3fuwz61iaj209309cq6r.jpg)

## 只属于你的项目
登录之后, 会直接进到你的项目页面, 这里有你名下所有的项目

![项目](http://ww1.sinaimg.cn/large/6b65559dgy1g3fuwz5n99j21350ki0wc.jpg)

### 接口列表
点开一个项目, 你会看到当前项目下所有的接口列表

![接口列表](http://ww1.sinaimg.cn/large/6b65559dgy1g3fvq10qfkj211f0l6djg.jpg)

### 接口详情
点击接口列表右侧的编辑按钮, 可以直接进行模拟数据的编辑, 以及右侧接口说明信息

这个是我的示例, 编辑完成之后点击右侧更新, 然后关闭页面

![接口详情](http://ww1.sinaimg.cn/large/6b65559dgy1g3fv1uf1lej213j0lbq6g.jpg)

## 接口使用
进行以上修改编辑之后, 就可以使用接口进行数据获取了
### 复制接口地址
在接口列表也, 点击右侧复制按钮, 会直接复制当前接口的请求地址

![复制接口地址](http://ww1.sinaimg.cn/large/6b65559dgy1g3fvjoxe44j20wu0ktn0l.jpg)

### js 里 Ajax 请求接口数据
回到 js 代码里, 可以直接用 Ajax 方法进行数据请求

![js 请求示例](http://ww1.sinaimg.cn/large/6b65559dgy1g3fvr8vxyzj20rw09c75b.jpg)

### 华丽丽的结果展示
打开浏览器调试窗口, 你所 伪造 的数据已经出现了

![返回结果](http://ww1.sinaimg.cn/large/6b65559dgy1g3fv1ue7qrj213n07d0uc.jpg)

然后, 就可以用这些数据进行需要的开发调试了.

> 这仅仅是一片 Easy Mock 入门文章, 如有其它需求, 可直接阅读官网文档
> 友情链接: [Easy Mock 文档](https://www.easy-mock.com/docs)



