const express = require('express')
const router = express.Router()

//req.headers.host 该路由使用的中间件
router.use(function(req, res, next){
	Host = 'http://' + req.headers.host
	next();
})

router.get('/', function(req, res){
	// res.send(" index of routers folder")
	//找到views/test.ejs
	res.render('index', {
		name: 'index',
		host: Host
	})
})

module.exports = router