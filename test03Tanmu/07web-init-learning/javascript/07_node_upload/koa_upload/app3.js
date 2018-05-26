const Koa = require('koa')
const app = new Koa()

const path = require('path')
const views = require('koa-views')

const convert = require('koa-convert')
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


app.use( async (ctx) => {
    ctx.body = 'hhhh'
})

const port = 3003
app.listen(port, () => {
    console.log('app is listening at ' + port)
})