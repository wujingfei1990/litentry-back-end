import {resCode} from '../config'

/**
 * 成功返回
 * @param {object} ctx 当前上下文对象
 * @param {object} data 成功返回时数据
 * @param {string} msg 成功返回时消息
 */
function Success(ctx,data,msg=""){
    ctx.body={
        code:resCode.successCode,
        msg,
        data
    }
}

/**
 * 成功返回消息，添加，删除，修改
 * @param {object} ctx 上下文对象
 */
export function SuccessMsg(ctx,msg=''){
    Success(ctx,'',msg||resCode.successMsg)
}

/**
 * 成功返回对象，查询
 * @param {object} ctx 上下文对象
 * @param {object|Array} data  返回的对象
 */
export function SuccessData(ctx,data){
    Success(ctx,data)
}

/**
 * 失败返回对象
 * @param {object} ctx 
 * @param {object} errorBody 
 *     code: 错误码
 *     msg:  错误信息
 */
export function ErrorRes(ctx,errorBody){
    ctx.body=errorBody
}