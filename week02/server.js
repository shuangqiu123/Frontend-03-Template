const http = require('http');

http.createServer((req,res)=>{
    let body=[];
    req.on('error', (err)=>{
        console.log(err);
    }).on('data', (chunk) =>{
        body.push(chunk.toString());
    }).on('end', ()=>{
        tmp = [];
        for (var i of body){
            tmp.push(Buffer.from(i));
        }
        body = Buffer.concat(tmp).toString();
        console.log("body:",body);
        res.writeHead(200, {"Content-type":'text/html'});
        res.end(' hello world!\n');
    });
}).listen(80);

console.log("server started!");