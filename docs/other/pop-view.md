# 动态的给容器添加蒙版效果的弹出层


### 创建测试HTML 结构

```
<div class="content">
	<div class="btn-content">
		<button class="show-btn" onclick="showPopView()">显示蒙版</button>
		<button class="hide-btn" onclick="hidePopView()">隐藏蒙版</button>
	</div>

	<div class="view-content">
		<div class="pop-view" id="pop_view"></div>

		<div class="input-view">
			<div>
				<label>
					<input type="text" class="demo" placeholder="在这里输入内容">
				</label>
			</div>
			<div>
				<label>
					<input type="text" class="demo" placeholder="在这里输入内容">
				</label>
			</div>
			<div>
				<label>
					<input type="text" class="demo" placeholder="在这里输入内容">
				</label>
			</div>

		</div>
	</div>

</div>

```

### CSS 样式编写

```
.content {
	width: 800px;
	height: 600px;
	margin: 0 auto;
	text-align: center;
	position: relative;
}

.btn-content {
	height: 50px;
	line-height: 50px;
}
	
.view-content {
	position: absolute;
	top: 50px;
	width: 100%;
	height: 100%;
}

.input-view {
	width: 100%;
	height: 100%;
}

.pop-view {
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
	opacity: 0.5;
	width: 100%;
	height: 100%;
	background-color: #999;
	filter: alpha(opacity=50);
	display: none;
}
```

### 实现 JS 切换方法

```
function showPopView() {
	let popView = document.getElementById('pop_view');
	popView.style.display = 'block';
}

function hidePopView() {
	let popView = document.getElementById('pop_view');
	popView.style.display = 'none';
}
```

### 初始隐藏蒙版的效果

![可以编辑输入框文字](http://ww1.sinaimg.cn/large/6b65559dgy1g4a9zsn7hkj20qi0l1dgh.jpg)


### 显示蒙版后的效果


![不可编辑输入框文字](http://ww1.sinaimg.cn/large/6b65559dgy1g4a9zsq7abj20p20kb3yz.jpg)

