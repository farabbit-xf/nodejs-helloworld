var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

/**
* [create a basic chat application]:
*  https://socket.io/get-started/chat/
*/
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('-----------, msg:' + msg);
    io.emit('chat message', 'test '+msg+'...');
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
