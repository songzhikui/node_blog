const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req,res) => {
    if(req.method === 'POST'){
        // req 数据格式
        console.log('req content-type: ',req.headers['content-type'])
        // 接收数据
        let postData = '';
        // 监听数据流
        req.on('data',chunk => {
            postData += chunk.toString();
        })
        req.on('end',() => {
            console.log('postData: ',postData);
            res.end('hello world!');
        })
    }
    
});

// server.listen(8000)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
