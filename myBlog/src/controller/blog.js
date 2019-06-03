// 获取博客列表
const getList = (author, keyword) => {
    // 返回数据（格式必须正确）
    return [
        {
            "id": 1,
            "title": "标题A",
            "content": "内容A",
            "createTime": 1558964316930,
            "author": 'songzk'
        },
        {
            "id": 2,
            "title": "标题B",
            "content": "内容B",
            "createTime": 1558964359066,
            "author": 'szk'
        }
    ]
}

// 获取博客详情
const getDetail = (id) => {
    // 返回数据（格式必须正确）
    return {
            "id": 1,
            "title": "标题A",
            "content": "内容A",
            "createTime": 1558964316930,
            "author": 'songzk'
        }
}

// 新建一篇博客
const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含 title content 属性
    console.log('blogData...', blogData);
    
    return {
        id: 3   // 表示新建博客，插入到数据表里的id
    }
}

// 更新一篇博客
const updateBlog = (id, blogData = {}) => {
    // id 是更新博客的id
    // blogData 是一个博客对象，包含 title content 属性
    return true;
}

// 删除一篇博客
const deleteBlog = (id) => {
    // id 是删除博客的id
    return true;
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}