const loginBlog = (username, password) => {
    // 先使用假数据
    if(username === 'songzk' && password === '123') {
        return true;
    }
    return false;
}
module.exports = {
    loginBlog
}