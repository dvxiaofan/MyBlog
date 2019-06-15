# 使用FileSaver.js把base64数据转成表格并下载
<p align="right">
<em> 2019-06-15 </em>
</p>

-------

> 最近公司项目有一个需求， 是按行业要求的一个“怪异”格式表格下载下来，后端通过表格设计器搞了一个模板，然后填充数据， 前端通过接口获取到返回的base64格式的数据，转成表格提供下载，就用到了这个FileSaver.js

### 引入 `FileSaver.js`

在HTML页面引入， 我采用的是cdn引入


```
<script src="http://cdn.staticfile.org/FileSaver.js/1.3.8/FileSaver.min.js"></script>
```


### 把base64 转成能下载的文件

先实现这个转换方法


```
function b64toFile(b64Data, filename, contentType) {
    let sliceSize = 512;
    let byteCharacters = atob(b64Data);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);
        let byteNumbers = new Array(slice.length);

        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        let byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    let file = new File(byteArrays, filename, {type: contentType});
    return file;
}
```

### 转换并下载表格数据


```
// base64Data 是服务器获取到的数据
let file = b64toFile(base64Data, 'test', 'application/vnd.ms-excel;charset=utf-8');

// 利用FileSaver.js 下载文件为Excel文件
saveAs(file, "fileName.xls");
```


是不是so easy 呢？


