const express = require('express')
const router = express.Router()

router.use(function(req, res,next){
  Host="http://"+req.headers.host;
  next();
})

router.get('/', function(req, res){
	// res.send('this is admin')
	//path: views/admin/admin.ejs
	res.render('admin/admin', {
		name: 'admin',
		host: Host
	})
})

//admin/register
router.get('/register', function(req, res){
	// res.send('this is register of admin')
	//path: views/admin/register.ejs
	res.render('admin/register', {
		description: 'this is register of admin'
	})
})

//admin/login
router.get('/login', function(req, res){
	res.send('this is login of admin')
	//path: views/admin/login.ejs
	res.render('admin/login', {
		description: 'this is login of admin'
	})
})

module.exports = router