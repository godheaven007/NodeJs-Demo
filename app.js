const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')


const serverHandle = (req, res) => {
    // 开发环境与线上环境切换
    console.log(process.env.NODE_ENV);

    res.setHeader('Content-Type', 'application/json');
    let url = req.url;
    req.path = url.split('?')[0];

    let blogData = handleBlogRouter(req, res);
    if(blogData) {
        res.end(JSON.stringify(blogData));
        return;
    }

    let userData = handleUserRouter(req, res);
    if(userData) {
        res.end(JSON.stringify(userData));
        return;
    }

    res.writeHead(404, {
        'Content-Type': 'text/plain'
    });
    res.write('404 Not Fount!');
    res.end();
};

module.exports = serverHandle;