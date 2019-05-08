const handleBlogRouter = (req, res) => {
	let method = req.method.toUpperCase();

	// 博客列表
	if(method == 'GET' && req.path == '/api/blog/list') {
		return {
			msg: '博客列表接口'
		}
	}

	// 博客详情
	if(method == 'GET' && req.path == '/api/blog/detail') {
		return {
			msg: '博客详情接口'
		}
	}

	// 新建博客
	if(method == 'POST' && req.path == '/api/blog/new') {
		return {
			msg: '新建博客接口'
		}
	}

	// 更新博客
	if(method == 'POST' && req.path == '/api/blog/update') {
		return {
			msg: '更新博客接口'
		}
	}

	// 删除博客
	if(method == 'POST' && req.path == '/api/blog/del') {
		return {
			msg: '删除博客接口'
		}
	}	
}

module.exports = handleBlogRouter;