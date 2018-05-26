const express = require('express')
const app = express()
const path = require('path')
//favicons
const favicons = require('connect-favicons');
//multiparty - upload img middleware
const multiparty = require('multiparty')
//md5
const md5 = require('blueimp-md5')


// https://github.com/theworkers/connect-favicons
app.use(favicons(__dirname + '/public/icons'));
app.use(express.static(path.join(__dirname, '/public')));


//app.set模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//req.headers.host 该路由使用的中间件
app.use(function(req, res, next){
	Host = 'http://' + req.headers.host
	next();
})


app.get('/', function(req, res, next){
	// res.send('this is app3')
	res.render('index3', {
		title: 'app3',
		host: Host
	})

})

//res.json
app.get('/test', function(req, res) {
    return res.json({
        'time': Date.now()
    })
})

//post
app.get("/logData", async function(req, res) {
	// res.json(req.body);
    let imgPath = 'img/avator.png'
    return res.json({
        'imgpath': imgPath,
        'host': Host
    })
	
});

app.post('/show', function(req, res, next){
	//multiparty
 	let  form = new multiparty.Form();
    form.uploadDir = './public/upload';
    form.parse(req, function(err, fields, files){

    	if(err){
    		throw err
    	}

    	// let name = fields.name[0]
	    // let psd = fields.psd[0]
	    // let rpsd = fields.rpsd[0]
	    // let email = fields.email[0]
	    // let phone = fields.phone[0]
        // let path = files.image[0].path
        //由于在app.js中设置过public为默认路径，所以整理地址时需要去掉public，并且把‘\'变成‘/
     	let resPath =  files.image[0].path.replace(/\\/g, '\/').replace(/public/, '')
     	// console.log(resPath)

        // console.log(fields)
        // console.log(files)

        if(files.image[0].originalFilename == ''){
            //res.send('error')
            res.render('err', {
                host: Host
            })
            return false;
        }

        //setData
        let setData = {
            name: fields.name[0],
            psd: fields.psd[0],
            rpsd: fields.rpsd[0],
            email: fields.email[0],
            phone: fields.phone[0],
            path: resPath,
            host: Host,
            md5: md5(fields.nameM[0])
        }        

        res.render('index4', {
            setData
        })

    })
})

//js-upload
app.get('/imgload', function(req, res){
    res.render('index5', {
        title: 'img preview'
    })
})

let port = 3006
app.listen(3006, function(){
	console.log('the port is listening at '+port)
})


