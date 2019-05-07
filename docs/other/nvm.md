# nvm: Mac下的 node 版本管理工具

> 日常开发中，可能我们好几个项目依赖的NodeJS版本是不同的，如果没有一个合适的管理工具，有时候真的很抓狂，这个时候，就是 nvm 发挥作用的时候了

## 安装nvm
可以使用命令

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

或者使用 `Wget`:

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

安装完成后最好关闭终端，然后重启输入 `nvm`验证是否安装成功，如果出现`Node Version Manager`，说明安装是成功的。

![](http://ww1.sinaimg.cn/large/6b65559dgy1g2sjg6ecwfj20lo0g1tdg.jpg)

但如果提示是

```
command not found: nvm
```

可能是缺少相应配置导致的，可以检查根目录下的这些文件` (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).`，可在底部添加如下代码：

```
export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

保存并更新配置文件

可以输入`command -v nvm`查看结果

![](http://ww1.sinaimg.cn/large/6b65559dgy1g2sjrzromhj20bd02a0su.jpg)


## nvm 常用命令


### 查看可以安装的node版本(官方所有能用版本)

```
nvm ls-remote
```

![](http://ww1.sinaimg.cn/large/6b65559dgy1g2sjutndg7j20lo0g1gnp.jpg)


### 查看所有可以安装的LTS版本（长期支持版）

```
nvm ls-remote --lts
```

![](http://ww1.sinaimg.cn/large/6b65559dgy1g2sjwxiubvj20lo0g1wht.jpg)



### 安装指定版本的 node

```
nvm install v9.5.0
```
![](http://ww1.sinaimg.cn/large/6b65559dgy1g2sjzzy1tmj20lo0g1abx.jpg)

v 后面是想要安装的版本号

### 查看已安装的node

```
nvm ls
```

![](http://ww1.sinaimg.cn/large/6b65559dgy1g2sk179ht0j20lo0g140u.jpg)

### 切换 node 版本

```
nvm use v6.9.0
```

![](http://ww1.sinaimg.cn/large/6b65559dgy1g2sk2vli3pj20lo0g1abg.jpg)


### 设定默认的node版本

```
nvm alias default v6.9.0
```

![](http://ww1.sinaimg.cn/large/6b65559dgy1g2sk4bd69zj20lo0g1gmt.jpg)


打开新的终端，用`nvm current`查看当前版本显示
![](http://ww1.sinaimg.cn/large/6b65559dgy1g2sk5eoeq7j20lo0g1jsm.jpg)



### 删除指定版本的 node

```
nvm uninstall v9.5.0
```

此过程会花费一点时间
![](http://ww1.sinaimg.cn/large/6b65559dgy1g2sk80vuusj20lo0j3wiz.jpg)

### 安装最新稳定版本

```
nvm install stable
```

这个根据时间而定，看个人需求使用


>友情链接：[官方GitHub](https://github.com/nvm-sh/nvm)


