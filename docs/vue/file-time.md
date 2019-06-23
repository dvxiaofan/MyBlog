# 基于 git 给VuePress 博客文章底部添加更新时间

> 之前用 VuePress 搭建的博客写文章一直没有时间, 很是苦恼, 也查了很多资料, 今天终于能显示最后更新时间了

### 添加配置

路径 `根目录/docs/.vuepress/config.js`

在 `module.exports-->themeConfig`里添加一下配置

```
themeConfig: {
	lastUpdated: '上次更新时间'
}
```

### 实现效果

![最后更新时间展示](http://ww1.sinaimg.cn/large/6b65559dgy1g4ays6mqv3j20ut0l3jun.jpg)


> 说明: 这个时间是基于 git 版本管理的文件最后更新提交的时间
