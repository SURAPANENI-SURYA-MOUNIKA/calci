const http=require('http');
const hostname='127.0.0.1';
const port=3000;
const requestListener=function(req,res){
    res.statusCode=200;
    res.setHeader('content-type','text/plain');
    res.end('hello world\n welcome to node js');
}
const server=http.createServer(requestListener);
server.listen(port,hostname);
