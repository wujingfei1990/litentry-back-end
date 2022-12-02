/**
 * 文件和路径
 */
const path = require('path')
const uuid = require('uuid').v4
const URL = require('url')
/**
 * 根据文件名称获取s3 key,避免重复
 * @param {string} name 文件的名称 
 */
export function getS3KeyName(name){
    const exname = path.extname(name);
    return `${uuid().replace(/-/g,'_')}${exname}`
}

/**
 * 根据图片url 提取s3 key
 * @param {string} url 图片链接 
 */
export function getS3KeyNameByUrl(url){
    const uri = URL.parse(url);
    return uri.pathname.substring(1)
}
