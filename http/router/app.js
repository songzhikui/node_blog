const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req,res) => {
    const url = req.url;
    console.log('url:' , url);
    const path = url.split('?')[0];
    res.end(path);  // 返回路由
    
});

// server.listen(8000)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
