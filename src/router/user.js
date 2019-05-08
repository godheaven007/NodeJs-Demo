const handleUserRouter = (req, res) => {
    let method = req.method.toUpperCase();

    if(method == 'POST' && req.path == '/api/user/login') {
        return {
            msg: '登录接口'
        }
    }
}

module.exports = handleUserRouter;