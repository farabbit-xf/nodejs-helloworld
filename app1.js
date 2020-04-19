var http = require('http');
var fs = require('fs');

var PORT = 1234;

var app = http.createServer(
  function(req,res){
    var path = __dirname + req.url;
    console.log('---------, path = %s',path);
    fs.readFile(path, function(err,data){
      if(err){
        res.end();
        return;
      }
      res.write(data.toString());
      res.end();
    });
  }
);

app.listen(PORT,function(){
  console.log('server is running at %d',PORT);
});
