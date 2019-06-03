const http = require('http');
const queryString = require('querystring');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req,res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];
    const query = queryString.parse(url.split('?')[1]);
    
    // 设置返回格式为JSON
    res.setHeader('Content-type', 'application/json');

    // 返回的数据
    const resData = {
        method,
        url,
        path,
        query
    }

    // 返回
    if(method === 'GET'){
        res.end(JSON.stringify(resData))
    }
    if(method === 'POST'){
        let postData = '';
        req.on('data',chunk => {
            postData += chunk.toString();
        })
        req.on('end', () => {
            resData.postData = postData;
            // 返回
            res.end(JSON.stringify(resData))
        })
    }
    
});

// server.listen(8000)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
