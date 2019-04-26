
# 在Mac终端显示 Git 当前所在分支



### 进入根目录


 ```
 cd ~
 ```

###  编辑`.bashrc`文件（如没有此文件会自动创建）

 ```
 vim .bashrc
 ```

###  将下面的代码加入到文件的最后处

 ```
 function git_branch {
    branch="`git branch 2>/dev/null | grep "^\*" | sed -e "s/^\*\ //"`"
    if [ "${branch}" != "" ];then
        if [ "${branch}" = "(no branch)" ];then
            branch="(`git rev-parse --short HEAD`...)"
        fi
        echo " ($branch)"
    fi
 }
 
 export PS1='\u@\h \[\033[01;36m\]\W\[\033[01;32m\]$(git_branch)\[\033[00m\] \$ '
 ```
 
###  保存退出
先按
```
esc
``` 
接着
```
:wq
```

###  重新加载命令

 ```
 source ./.bashrc
 ```

 >Mac 下面启动的 shell 是 login shell，所以加载的配置文件是`.bash_profile`，不会加载`.bashrc`。如果是 Mac  的话，需要再执行下面的命令，这样每次开机后才会自动生效：

 ```
 echo "[ -r ~/.bashrc ] && source ~/.bashrc" >> .bash_profile
 ```
 
 ### 最终完成效果图
 
 ![](http://ww1.sinaimg.cn/large/6b65559dgy1g2fql4mc6fj20oq0fdmy5.jpg)