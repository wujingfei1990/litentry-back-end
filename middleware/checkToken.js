/**
 *@description 拿到token,解析token判断用户是否存在
 *@time 
 */
import {redis} from '../lib'
export default async function (ctx, next) {
    try{
        // 拿到用户id
        const id = ctx.state.user.id;
        //和redis 中判断是否存在用户,如果不存在，表示用户是伪造的
        const code = await redis.hgetall(id);
        if(!code || !code[0]){
            ctx.body={
                code:40040,
                msg:'请您先登录!'
            }
            return;
        }
        if(code[0].id==id){
               await next();
        }
    }catch(ex){
        throw ex
    }
}