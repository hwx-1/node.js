const Koa = require('koa')
const app = new Koa()
const middleware = function async(ctx, next) {
    console.log('this is middleware!')
    console.log(ctx.request.path)
    //   next()
}
const middleware1 = function async(ctx, next) {
    console.log('this is middleware1!')
    console.log(ctx.request.path)
    next()
    console.log('m1')
}
const middleware2 = function async(ctx, next) {
    console.log('this is middleware2!')
    console.log(ctx.request.path)
    next()
    console.log('m2')
}

app.use(middleware1)
app.use(middleware2)
app.use(middleware)
app.listen(3000)