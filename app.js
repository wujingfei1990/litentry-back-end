import koa from 'koa'
import compress from 'koa-compress'
import koaBody from 'koa-body'
import path from 'path'
import jwt from 'koa-jwt'
import router from './router'
import { error, sequelize, verifyToken, redis, util } from './lib'
import { errorHanler } from './middleware'
import config, { consts, tokenWhite } from './config'
import koaStaticCache from 'koa-static-cache'
import cors from '@koa/cors'
const app = new koa();

// 处理错误
app.use(errorHanler)

// 处理跨域
app.use(cors(config.cors))

// 安全，去除一些明显的安全信息
// token 验证

app.use(jwt({
    secret: consts.JWTSECRET,
}).unless({
    // 登录，注册接口不需要验证
    path: tokenWhite.JWt_TOKEN_WHIte_PATH
}))


app.use(koaStaticCache(path.join(__dirname, './public'), {
    maxAge: 365 * 24 * 60 * 60,
    gzip: true,
    prefix: '/public'
}))
// 处理http body
app.use(koaBody({
    multipart: true,
    formidable: {
        keepExtensions: true,
        maxFileSize: (100 * 1024 * 1024), // 默认20M ,但是直接输入字符串可以传递170多M 的文件
        uploadDir: path.join(__dirname, 'public/upload'),
    },
    onError: (err) => {
        console.log(err);
    }
}))

// 加载路由
app.use(router.routes(), router.allowedMethods());
// 监听端口
app.listen(3001);
// server.listen(3002);
// 错误监控
error.errListen(app);

export default app