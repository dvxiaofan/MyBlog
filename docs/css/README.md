# 让一个 div 元素水平垂直居中

## 最终实现效果

![](http://imgs.devzhangjs.com/2019-08-24-15666160850144.jpg)


## HTML 结构

```
<div class="parent">
    <div class="child"></div>
</div>
```

## 样式代码

### flex

```
.parent {
    width: 600px;
    height: 600px;
    background: #666;
    display: flex;
    justify-content: center;
    align-items: center;

}

.child {
    width: 200px;
    height: 200px;
    background: #00f;
}
```

### margin: auto;

```
.parent {
    width: 600px;
    height: 600px;
    background: #666;
    
    position: relative;

}

.child {
    width: 200px;
    height: 200px;
    background: #00f;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

### transform 

```
.parent {
    width: 600px;
    height: 600px;
    background: #666;
    
    position: relative;

}

.child {
    width: 200px;
    height: 200px;
    background: #00f;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

### margin

```
.parent {
    width: 600px;
    height: 600px;
    background: #666;
    
    position: relative;

}

.child {
    width: 200px;
    height: 200px;
    background: #00f;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -100px;
}
```

### grid

```
.parent {
    width: 600px;
    height: 600px;
    background: #666;

    display: grid;

}

.child {
    width: 200px;
    height: 200px;
    background: #00f;

    justify-self: center;
    align-self: center;
}
```

### ::before  vertical-align

```
.parent {
    width: 600px;
    height: 600px;
    background: #666;
    
    font-size: 0;
    text-align: center;
}
.parent::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
}

.child {
    width: 200px;
    height: 200px;
    background: #00f;

    display: inline-block;
    vertical-align: middle;
}
```

### flex + margin

```
.parent {
    width: 600px;
    height: 600px;
    background: #666;

    display: flex;
}

.child {
    width: 200px;
    height: 200px;
    background: #00f;

    margin: auto;
}
```

### table-cell

```
.parent {
    width: 600px;
    height: 600px;
    background: #666;

    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.child {
    width: 200px;
    height: 200px;
    background: #00f;

    display: inline-block;
}
```




