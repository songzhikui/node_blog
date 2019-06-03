const { loginBlog }  = require('../controller/user');
const { SuccessModel, ErrorModel }  = require('../model/resModel');

const userRouterHandle = (req, res) => {
    const method = req.method;

    // 删除一篇博客
    if(method === 'POST' && req.path === '/api/user/login') {
        const {username, password} = req.body;
        const result = loginBlog(username, password);
        if(result){
            return new SuccessModel('登陆成功')
        }else{
            return new ErrorModel('登陆失败')
        }
       
    }

}
module.exports = userRouterHandle;