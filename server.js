var http=require('http');

var server = http.createServer(function(req,res){
    res.end('');
});

server.on('listening',function(){
    console.log('ok, server is running');
});

server.listen(3000);