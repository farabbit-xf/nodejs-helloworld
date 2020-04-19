var http = require('http');
var httpProxy = require('http-proxy'); //加载http proxy模块

var PORT = 1234;

/*
* https://github.com/nodejitsu/node-http-proxy
*/

//创建代理服务器对象并监听错误事件
var proxy = httpProxy.createProxyServer();
proxy.on('error',function(err, req, res){
  res.end();//输出空白响应数据
});


var app = http.createServer(function(req, res){
   proxy.web(req, res, {
     target: 'http://localhost:9092'
   });
});

app.listen(PORT, function(){
  console.log('server is running at %d',PORT);
});
