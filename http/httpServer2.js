const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async(req, res) => {
    try{
        const data = await fs.readFile("./server2.html");
        res.writeHead(200,{'Content-Type' : 'text/html; charset=utf-8'});
        res.end(data);
    }catch(err){
        console.log(err);
        res.writeHead(500,{'Content-Type' : 'text/html; charset=utf-8'});
        res.end("err : ", err.message);
    }
});

server.listen(8088);

server.on('listening', () => {
    console.log("8088번 포트에서 서버가 대기중입니다");
});