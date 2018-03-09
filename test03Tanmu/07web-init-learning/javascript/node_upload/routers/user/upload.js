const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
	//res.send('js of upload')
	res.render('user/upload', {
		description: 'this is upload'
	})
})


module.exports = router