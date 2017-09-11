var express = require('express'); // 引用express模块
var app = express();  // 创建一个简单的服务器

var requestPort = 7000;  // 请求页面跑在7000端口

app.use(express.static(__dirname + '/static')); //7000端口的静态文件，即index.html

//第7种跨域proxy1-------start--------------------------------------------------------------------------------------------------
var proxy = require('http-proxy-middleware');
app.use('/proxy1', proxy({target: 'http://localhost:7001/', changeOrigin: true}));
// changeOrigin设置为true，本地会虚拟一个服务端接收你的请求并代你发送该请求
// http://localhost:3000/proxy1   -->   http://localhost:7001/proxy1
//第7种跨域proxy1-------end--------------------------------------------------------------------------------------------------


//第7种跨域proxy2-------start--------------------------------------------------------------------------------------------------
var http= require('http');
app.get('/proxy2', function(request, response){
    var url = request.query.url    // http://localhost:7001/proxy2

    // 向url发出请求
    http.get(url, function(responseFromOtherDomain) {
        // data事件会在数据接收过程中，每收到一段数据就触发一次，接收到的数据被传入回调函数。
        responseFromOtherDomain.on("data", function(data) {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.end(data);
        });
    });
});
//第7种跨域proxy2-------end--------------------------------------------------------------------------------------------------


app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort); // 在dos窗口会执行这个回调函数
});
