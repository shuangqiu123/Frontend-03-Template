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
        var html = `<html maaa=a>

        <head>
            <style>
                body div #myid {
                    width: 100px;
                    background-color: #ff5000;
                }
        
                body div img {
                    width: 30px;
                    background-color: #ff1111;
                }
            </style>
        </head>
        
        <body>
            <div>
                <img id="myid"/>
                <img />
            </div>
        </body>
        
        </html>`;
        res.end(html);
    });
}).listen(80);
console.log("server started!");