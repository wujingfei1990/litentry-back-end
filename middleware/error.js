/**
 * 错误处理中间件
 * 捕获错误，保证服务不死机并且保证能正确传递信息到客户端
 * 
 */
import { log4js } from '../lib'
const log = log4js.getLogger('ctx')
import { isDev } from '../config'
function handleMsg(msg) {
    if (isDev) {
        return msg;
    }
    return 'Interface service error, please contact the developer!'

}
export default async function (ctx, next) {
    try {
        await next();
    } catch (err) {
        if (err.status) {
            ctx.body = {
                code: err.status,
                msg: err.message
            }
        } else {
            ctx.body = {
                code: 500,
                msg: handleMsg(err.message)
            }
        }
        if(err.message !== 'Authentication Error'){
            log.error(err?.stack || err.message)
        }
        
    }
};