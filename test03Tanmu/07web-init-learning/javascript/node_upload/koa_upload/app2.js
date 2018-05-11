const Koa = require('koa')
const path = require('path')
const app = new Koa()

const { uploadFile } = require('./util/upload')

const Router = require('koa-router')
const router = new Router()

const convert = require('koa-convert')
const views = require('koa-views')
const static = require('koa-static')

/**
 * 使用第三方中间件 start 
 */
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
// 由于koa-static目前不支持koa2
// 所以只能用koa-convert封装一下
app.use(convert(static(
    path.join(__dirname, staticPath)
)))

// app.use( async ( ctx ) => {

//   if ( ctx.url === '/' && ctx.method === 'GET' ) {
//     // 当GET请求时候返回表单页面
//     let html = `
//       <h1>koa2 upload demo</h1>
//       <form method="POST" action="/upload.json" enctype="multipart/form-data">
//         <p>file upload</p>
//         <span>picName:</span><input name="picName" type="text" /><br/>
//         <input name="file" type="file" /><br/><br/>
//         <button type="submit">submit</button>
//       </form>
//     `
//     ctx.body = html

//   } else if ( ctx.url === '/upload.json' && ctx.method === 'POST' ) {
//     // 上传文件请求处理
//     let result = { success: false }
//     let serverFilePath = path.join( __dirname, 'upload-files' )

//     // 上传文件事件
//     result = await uploadFile( ctx, {
//       fileType: 'album',
//       path: serverFilePath
//     })

//     ctx.body = result
//   } else {
//     // 其他请求显示404
//     ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
//   }
// })

router.get('/', async (ctx) => {
   await ctx.render('index2', {

   })
})
router.post('/upload', async (ctx) => {

    let host = ctx.request.header.host
    console.log(host)

    let result = { success: false }
    let serverFilePath = path.join( __dirname, 'static/image' )
    console.log(serverFilePath)

    //upload
    result = await uploadFile( ctx, {
        fileType: 'album',
        path: serverFilePath
    })
    let sendData = Array.from(result.formData)
    console.log(result)
    // ctx.body = sendData
    const avatorUrl = result.data.pictureUrl 
    console.log(avatorUrl)
    await ctx.render('index2_show', {
        host:host,
        sendData: sendData,
        avator: result.data.pictureUrl
    })
})


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('[demo] upload-simple is starting at port 3000')
})