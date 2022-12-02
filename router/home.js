import {
    prefix,
    tagsAll,
    request,
    body,
    query,
    path,
    description,
    summary,
    middlewares
} from 'koa-swagger-decorator'
import { home } from '../paramters'
import { homeService as service } from '../services'
import { util } from '../lib'

@prefix('/v1')
@tagsAll('首页接口')
export default class Home {

    @request('get', '/secret')
    @summary('secret')
    static async secret(ctx, next) {
        await service.secret(ctx, next)
    }

    @request('post', '/signin')
    @summary('signin')
    @body(home.singin)
    static async signin(ctx, next) {
        await service.signin(ctx, next)
    }

}