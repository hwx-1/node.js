const Koa = require('koa')
const app = new Koa()
const Router = require('@koa/router')
const router = new Router

router.get('/', async (ctx) => {
    console.log(ctx)
    console.log(ctx.request)
    ctx.body = 'hello world'
})
router.get('/api', async (ctx) => {
    console.log(ctx)
    console.log(ctx.request)
    ctx.body = 'hello api'
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)