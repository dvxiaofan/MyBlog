# 利用Mock.js本地批量生成模拟JSON数据

### 导入`Mock.js`
在 HTML 页面里引入

```
<script src="http://cdn.staticfile.org/Mock.js/1.0.0/mock-min.js"></script>
```

### 批量生成模拟数据

```
let Random = Mock.Random;
Random.date();
let dataMock = Mock.mock({
    'dataList|50': [{
        'id|1000001-200000': 666666,
        'name': '@cname',
        'email': '@email',
        'date': '@date',
        'str': '@csentence'
    }]
});

console.log(dataMock);
```

### 查看结果数据

![模拟数据](http://imgs.devzhangjs.com/2019-07-17-15633540821926.jpg)


### 部分数据占位符定义

```
"中文名字": "@cname",
"邮箱": "@email",
"网址": "@url",
"域名": "@domain",
"标题": "@title",
"日期": "@date",
"时间": "@time",
"浮点数": "@float",
"自然数": "@natural",
"段落": "@paragraph",
"句子": "@sentence"
```

它们对应输出的数据例子:

```
"中文名字": "李飞",
"邮箱": "u.womlsumtu@fvq.cg",
"网址": "http://tbrsh.uk/qstmkdshc",
"域名": "lljn.tn",
"标题": "fzgdrg Jyssalp Ivwlvxbu Pmn Unmb",
"日期": "2005-04-01",
"时间": "10:22:53",
"浮点数": "-3209057368417692.5",
"自然数": "132154574125730",
"段落": "Yovyokkk ympsx kfgbeoko isssxq qetlwkjtw nrll tbcoycv onief ffvixgxyb rntvwu xztkj jrmfkyme xhjdrmr uwljpexy djqgovo mhbvt. Uugrusx xla ...",
"句子": "Xqjq fwtnupqn cipi miiajynk qyao tsxiykjj rpdcyvhc aeweyujbdt eahjwrncn duwid rvyoc tsnnsegi kylxmwb cbcdaen vpcxwndyr dublxi"
```

> 更多用法, 请参看官网, 一键直达[Mock.js](http://mockjs.com/)