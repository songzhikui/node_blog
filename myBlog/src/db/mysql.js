const my_sql = require('mysql');
const { MYSQL_CONF } = require('../conf/db');

// 创建链接对象
const con = my_sql.createConnection(MYSQL_CONF);

// 开始连接
con.connect();

// 统一执行sql的函数
function exec(sql) {
    const promise = new Promise((resolve,reject)=>{
        con.query(sql, (err,result)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(result);
        })
    })
    return promise;
}

module.exports = {
    exec
}