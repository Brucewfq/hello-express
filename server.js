/*
 * @Description: 
 * @Author: wan.bruce 
 * @Date: 2018/10/17 
 * @Last Modified by:   wan.bruce 
 * @Last Modified time: 2018/10/17 16:26 
 */
const express = require('express');
const app  = express();
const port = (process.env.PORT || 3000)
const cookieParser = require('cookie-parser')
// 引入mongoose模块
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://bruce:w201001@ds133084.mlab.com:33084/helloexpress')
const db = mongoose.connection;
db.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

db.on("connected", function () {
    console.log("数据库连接成功");
});

db.on('disconnected', function () {
    console.log('数据库连接断开');
});


const data = [{
    name: 'Tom',
    age: 12,
    sex: '男',
    address: '上海',
    date: '2018-10-17'
}];

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(port);