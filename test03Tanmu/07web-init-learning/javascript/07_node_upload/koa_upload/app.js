// https://chenshenhai.github.io/koa2-note/note/upload/pic-async.html

const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const convert = require('koa-convert')
const static = require('koa-static')
const {
    uploadFile
} = require('./util/upload')

const Router = require('koa-router')
const router = new Router()

const bodyParser = require('koa-bodyparser')


const app = new Koa()

// 使用koa-bodyparser中间件
app.use(bodyParser())

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
/**
 * 使用第三方中间件 end 
 */

// app.use(async (ctx) => {
//     if (ctx.method === 'GET') {
//         let title = 'upload pic async'
//         let host = ctx.request.header.host
//         await ctx.render('index', {
//             title,
//             host
//         })
//     } else if (ctx.url === '/show' && ctx.method === 'POST') {

//         let fields = ctx.request.body.fields
//         cosnsole.log(fields)

//         // 上传文件请求处理
//         let result = {
//             success: false
//         }
//         let serverFilePath = path.join(__dirname, 'static/image')

//         // 上传文件事件
//         result = await uploadFile(ctx, {
//             fileType: 'album',
//             path: serverFilePath
//         })
//         ctx.body = result
//         console.log(result)
//     } else {
//         // 其他请求显示404
//         ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
//     }

// })

router.get('/', async(ctx) => {
    let title = 'upload pic async'
    await ctx.render('index', {
        title
    })
})


router.post('/show', async(ctx) => {
   
    let result = {
        success: false
    }
    let serverFilePath = path.join(__dirname, 'static/image')
    //上传文件事件
    result = await uploadFile(ctx, {
        fileType: 'album',
        path: serverFilePath
    })
    ctx.body = result
    console.log(result)

})


app
  .use(router.routes())
  .use(router.allowedMethods());

const port = 3001
app.listen(3001, () => {
    console.log(`[demo] upload-pic-async is starting at port ${port}`)
})