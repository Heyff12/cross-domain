var express = require('express'); // 引用express模块
var app = express(); // 创建一个简单的服务器

var requestPort = 7001; // 请求页面跑在7001端口

app.use(express.static(__dirname + '/staticRes')); //3000端口的静态文件，即index.html

//第一种跨域cors-------start--------------------------------------------------------------------------------------------------
// app.all('*',function(req, res, next) {
//     res.set('Access-Control-Allow-Origin', 'http://localhost:7000'); // 设置允许跨域的origin，允许7000端口访问本端口（7001）
//     //res.set('Access-Control-Allow-Methods', 'GET,PUT,DELETE'); // 设置允许跨域的请求方式
//     //res.set('Access-Control-Allow-Headers', 'x-requested-with,content-type'); // 设置允许跨域的响应头
//     return next();
// });
app.get('/cros', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:7000'); // 设置允许跨域的origin，允许7000端口访问本端口（7001）
    //res.set('Access-Control-Allow-Methods', 'GET,PUT,DELETE'); // 设置允许跨域的方式
    res.send("Hello world from CROS--get.😡"); // 空格部分为表情，可能在编辑器不会显示
});
app.post('/cros', (req, res) => {
    //res.set('Access-Control-Allow-Origin', 'http://localhost:7000'); // 设置允许跨域的origin，允许7000端口访问本端口（7001）
    res.send("Hello world from CROS---post.😡"); // 空格部分为表情，可能在编辑器不会显示
});
//第一种跨域-------end--------------------------------------------------------------------------------------------------

//第二种跨域jsonp-------start--------------改成post则请求失败------------------------------------------------------------------------------------
app.get('/jsonp', function (req, res) {
    var callbackName = req.query.callback;   // myFunction
    res.send(callbackName+"({'message': 'hello world from JSONP!🙃'});");
    // myFunction({'message': 'hello world from JSONP!'})
    // 一个带参数的执行函数
});
//第二种跨域jsonp-------end--------------------------------------------------------------------------------------------------

//第7种跨域proxy1-------start--------------------------------------------------------------------------------------------------
app.get('/proxy1', (req, res) => {
    res.send("Hello world from Proxy  :)")
});
//第7种跨域proxy1-------end--------------------------------------------------------------------------------------------------

//第7种跨域proxy2-------start--------------------------------------------------------------------------------------------------
app.get("/proxy2", function (req, res) {
    res.send("I am here from 7001 ¬_¬");
})
//第7种跨域proxy2-------end--------------------------------------------------------------------------------------------------



//第八种跨域websocket-------start--------------------------------------------------------------------------------------------------
var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function (client) {
    client.emit('data', 'Hello WebSocket from 7001.');
});
//第八种跨域websocket-------end--------------------------------------------------------------------------------------------------




app.listen(requestPort, function() {
    console.log('Requester is listening on port ' + requestPort); // 在dos窗口会执行这个回调函数
});
//第八种方式
// server.listen(requestPort, function() {
//     console.log('Requester is listening on port ' + requestPort); // 在dos窗口会执行这个回调函数
// });