const express = require('express')
const router = express.Router()

//req.headers.host 该路由使用的中间件
router.use(function(req, res, next){
	Host = 'http://' + req.headers.host
	next();
})

router.get('/', function(req, res){
	// res.send('this is login')
	//找到views/user/login.ejs
	res.render('user/login', {
		title: 'login',
		path: '/upload/n9RJbsItltHCANDW-DWTEonZ.gif'
	})
})

module.exports = router