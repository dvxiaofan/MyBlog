# 用Echarts动态显示两组数据图形
<p align="right">
<em>

2019-01-16

</em>
</p>

-------

> 最近公司项目需要用到实时数据显示, 所以就了解到了`Echarts`这个强大的工具, 使用中也遇到了好多坑, 记录一下, 希望也给需要的人提供帮助

要在项目中使用`Echarts`, 首先需要在页面里引入, 你可以完全下载下来, 或者用`npm`之类的包管理工具, 或者直接引入`cdn`加速地址, 我这里用的后者

在html页面直接引入 

```
<script src="https://cdn.bootcss.com/echarts/4.2.0-rc.2/echarts.js"></script>
```

然后需要设着一个用来显示折线图的容器, 而且要有宽高

```
<div id="main" style="width: 600px; height: 500px;"></div>   
```

接着在js文件里先实例化一个`echarts`对象出来

```
let myChart = echarts.init(document.getElementById('main'));
```

为了显示效果, 我提供了一些测试数据

```
let now = new Date();
let datas = {
    upText: '水位图形',
    upUnit: '单位(m)',
    upName: '水位',
	upMark: 2.3,		// 分界值
    upData: ['1.139'],
    downText: '流量图形',
    downUnit: '单位(m)',
    downName: '水位',
	downMark: 3.5,
    downData: ['5.473'],
    date: [now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()]
};

```

然后就是设置配置信息--`option`


```
let option = {
	title: [{
		left: 'center',
		text: datas.upText
	}, {
		top: '50%',				// 下面的折线图标题位置
		left: 'center',
		text: datas.downText
	}],
	tooltip: {
		trigger: 'axis'			// 悬浮到折点时候的上线标记线
	},
	xAxis: [{
		boundaryGap: false,		// 默认为 true，此时刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
		data: datas.date
	}, {
		boundaryGap: false,
		data: datas.date,
		gridIndex: 1			// 下面的折线图索引, (上面的索引为0)
	}],
	yAxis: [{
		name: datas.upUnit,
		boundaryGap: [0, '50%']
	}, {
		gridIndex: 1,
		name: datas.downUnit,
		boundaryGap: [0, '50%']
	}],
	grid: [{
		bottom: '60%'
	}, {
		top: '60%'
	}],
	series: [{
		name: datas.upName,
		data:  datas.date,
		type: 'line',
		smooth: true,			// 是否为平滑曲线
		areaStyle: {			// 折现下是否填充
			normal: {}
        },  
		markLine: {				// 分界线线设置
			silent: true,		// 不响应鼠标点击事件
			lineStyle: {
				width: 2,
				color: '#f00'
			},
			data: [{
				yAxis: datas.upMark
			}]
		}
	}, {
		name: datas.downName,
		data:  datas.date,
		type: 'line',
		smooth: true,
        itemStyle : {  
            normal : {  
                borderColor:'red'	// 折线折点颜色
            }  
        },
		markLine: {
			silent: true,
			lineStyle: {
				width: 2,
				color: '#f00'
			},
			data: [{
				yAxis: datas.downMark
			}]
		},
		xAxisIndex: 1,
		yAxisIndex: 1
	}],
	visualMap: [{				// 视觉映射组件
		seriesIndex: 0,
		top: 20,
		right: 10,
		pieces: [{
			gt: 0,				// 开始值
			lte: datas.upMark,	// 结束值
			color: '#0ff'
		}],
		outOfRange: {			// 超出范围
			color: '#f00'
		},
	},{
		seriesIndex: 1,
		top: '50%',
		right: 10,
		pieces: [{
			gt: 0,
			lte: datas.downMark,
			color: 'orange'
		}],
		outOfRange: {
			color: '#f00'
		},
	}], 
};
```


> 有些地方是加了注释的, 因为一开始没搞明白怎么用, 在官方文档里 和 demo 里遨游了好久, 才弄明白各个设置的意思和用处, 文档是个好东西

最后就是把`option`设置给 `echarts`实例, 是通过`setOption`来使用的:

```
myChart.setOption(option);
```

这个时候打开页面其实就能看到效果了

![只有一个数据](http://imgs.webxiaofan.com/15476380595216.jpg)


目前只有一个数据值, 接着开始启动模拟加载数据

```
// 获取数据时间间隔 3秒
let INTERVAL_TIME = 3000;
// 模拟定时加载数据
setInterval(() => {
	// 最新时间
    let newDate = new Date();
	// 模拟获取数据
    datas.upData.push((Math.random() * 5).toFixed(3));
	datas.downData.push((Math.random() * 5).toFixed(3));
	// 按时间间隔设置时间
    datas.date.push(newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds())
	// 只取8个数据
    if (datas.upData.length >= 8) {
        datas.upData.shift();
        datas.downData.shift();
        datas.date.shift();
    }
	// 设置最新数据给折线图
    myChart.setOption({
        xAxis: [{
            data: datas.date
        },{
            data:datas.date,
            gridIndex: 1
        }],
        series: [{
            data: datas.upData
        },{
            data: datas.downData,
            xAxisIndex: 1,
            yAxisIndex: 1
        }]
    })

}, INTERVAL_TIME);
```

在运行, 代码, 就能看到数据从1个变成最多8个, 并且能实时加载新数据并动态显示出来


![静态图](http://imgs.webxiaofan.com/15476381042709.jpg)

同时也能看到分界线设置的效果(我这只是截图, 实际是动态显示的)

几点小提示: 

-   如果你需要切换数据源, 需要先清除原来的的定时器和`Echarts`实例, 否则数据会出现混乱, 这里的`timer`是我给项目里的定时器起的名字

```
//  清除原有定时器
clearInterval(timer);

//  如果echat实例存在
if (myChart != null && myChart != "" && myChart != undefined) {
      //  销毁实例
      myChart.dispose();
 }
//  基于准备好的dom，初始化echarts实例
myChart = echarts.init(document.getElementById(echartId))
```
- 最好再调用它一下的`resize`方法, 原因看注释

```
//  用于使chart自适应高度和宽度, 因为初始隐藏的标签在初始化图表的时候因为获取不到容器的实际高宽，可能会绘制失败
$(window).on('resize', function () {
     myChart.resize();
 });
```

- 在会改变窗口大小的地方也调用一下`resize()`这个方法,以便能自适应.

-----
以上来自我工作中的总结笔记, 希望对看到的人有所帮助

源码地址: [GitHub](https://github.com/dvxiaofan/EchartsDemo)
也可以直接跳转--->[Echarts官网](https://www.echartsjs.com/index.html)查看更多使用技巧










