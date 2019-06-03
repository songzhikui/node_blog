const queryString = require('querystring');
const blogRouterHandle = require('./src/router/blog');
const userRouterHandle = require('./src/router/user');

// 用于处理post data
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if(req.method !== 'POST') {
            resolve({});
            return;
        }
        if(req.headers['content-type'] !== 'application/json') {
            resolve({});
            return;
        }
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        });
        req.on('end', () => {
            if(!postData) {
                resolve({});
                return;
            }
            resolve(JSON.parse(postData));
        })
    })
    return promise;
}

const serverHandle = (req, res) => {
    // 设置返回格式为JSON
    res.setHeader('Content-type', 'application/json');
    
    // 获取path
    const url = req.url;
    req.path = url.split('?')[0];

    // 解析 query
    req.query = queryString.parse(url.split('?')[1]);
    console.log('req.query[GET]...', req.query);

    // 处理post data
    getPostData(req).then(postData => {
        req.body = postData;
        console.log('req.body[POST]...', req.body);
        // 处理 blog 路由
        const blogData = blogRouterHandle(req, res);
        if(blogData) {
            res.end(
                JSON.stringify(blogData)
            )
            return;
        }

        // 处理 user 路由
        const userData = userRouterHandle(req, res);
        if(userData) {
            res.end(
                JSON.stringify(userData)
            )
            return;
        }

        // 处理未命中路由，返回404
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.write('404 Not Found\n');
        res.end();

    })

    
    
}

module.exports = serverHandle;

// var data = {
    //     'name': 'songzk',
    //     'env': process.env.NODE_ENV
    // }
    // res.end(JSON.stringify(data))