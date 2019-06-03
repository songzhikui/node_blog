const http = require('http');
const queryString = require('querystring');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req,res) => {
    console.log('method:' , req.method);
    const url = req.url;
    console.log('url:' , url);
    req.query = queryString.parse(url.split('?')[1])
    console.log('query:' , req.query);
    res.end(
        JSON.stringify(req.query)
    )
    // console.log(res);
    
});

// server.listen(8000)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
