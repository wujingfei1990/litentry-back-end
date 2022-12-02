/**
 * 错误记录辅助类
 * 开发环境在控制输出台输出错误，
 * 测试环境和开发环境输出错误到elasticsearch
 * 报警
 */

const env = process.env.NODE_ENV || 'development';

/**
 * 错误信息处理
 * 程序内部错误开发环境输出错误堆栈，但是测试环境输出简短信息（防止私密信息泄露）
 */
function handleMsg(error) {

}

import log4js from './log4js.helper'
const log = log4js.getLogger('app')
export function errListen(app) {
    // 监控错误日志
    app.on('error', function (err, ctx) {
        log.error('errorEvent', err?.stack || err.message)
    });

    // 捕获promise reject错误
    process.on('unhandledRejection', function (err, promise) {
        log.error('unhandledRejection', err?.stack || err.message)
    });

    // 捕获未知错误
    process.on('uncaughtException', function (err) {
        log.error('uncaughtException', err?.stack || err.message)
    });
}