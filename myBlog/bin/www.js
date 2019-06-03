const http = require('http');
const serverHandle = require('../app');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer(serverHandle);

// server.listen(8000)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// 调试
// Szk-MacBook-Pro:myBlog songzk$ node --inspect-brk bin/www.js
// chrome://inspect

// 初始运行
// Szk-MacBook-Pro:myBlog songzk$ node bin/www.js

// 安装自动插件 nodemon cross-env{运行跨平台设置和使用环境变量的脚本}
// Szk-MacBook-Pro:myBlog songzk$ npm install nodemon cross-env --save-dev
// Szk-MacBook-Pro:myBlog songzk$ npm run dev
