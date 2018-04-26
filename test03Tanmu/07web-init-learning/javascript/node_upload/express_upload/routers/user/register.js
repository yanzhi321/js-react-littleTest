const express = require('express')
const router = express.Router()

const fs = require('fs')

// https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md
//const multer = require('multer')
//const upload = multer({ dest: 'public/upload' });

//multiparty
const multiparty = require('multiparty')

//req.headers.host 该路由使用的中间件
router.use(function(req, res, next){
	Host = 'http://' + req.headers.host
	next();
})

const title = 'register'
router.get('/', function(req, res, next){
	//res.send('this is register')

	//找到views/user/register.ejs
	res.render('user/register', {
		title: title,
		host: Host
	})

	next()
})

//
router.get('/profile', function(req, res, next){
	// res.send('this is inputFile')
	res.render('user/register', {
		title: "inputFile",
		host: Host
	})
	next()
})


// inputFile上传image: upload.single('image') ---req.file
router.post('/profile',   function(req, res, next){

 	//multiparty
 	let  form = new multiparty.Form();
    form.uploadDir = './public/upload';
    form.parse(req, function(err, fields, files){

        if(err){
            throw err
        }

    	// console.log(fields)
    	//console.log(files, 'files')
    	// console.log(files.image[0].path)
    	
        let name = fields.name[0]
        let psd = fields.psd[0]
        let rpsd = fields.rpsd[0]
        let email = fields.email[0]
        let phone = fields.phone[0]
        let path = files.image[0].path
        console.log(name, psd, rpsd, email, phone)

        // let patt = 	/^[a-z0-9_-]{3,16}$/
        // if(patt.test(name) == false){
        // 	// res.send('err')
        // 	res.render('user/success', {
        // 		msg: 'success',
        //         host: Host
        // 	})
        // }

    	//由于在app.js中设置过public为默认路径，所以整理地址时需要去掉public，并且把‘\'变成‘/
     	let resPath =  files.image[0].path.replace(/\\/g, '\/').replace(/public/, '')
     	console.log(resPath)

     	res.render('user/showImage', {
     		title: 'showImage',
     		resP: resPath,
     		host: Host
     	})

    })

})




//fs.unlink('')
router.get('/delFile', function(req, res){
	//fs.unlink
	res.send("this is delFile")

})


module.exports = router