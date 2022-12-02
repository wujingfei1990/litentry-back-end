/**
 * mysql 数据库操作辅助类
 * 开启mysql 连接池
 * 版本： v5 
 * 文档： https://sequelize.org/v5/
 * 创建sequelize 实例，实例创建以后就可以去建模
 */

import mysqlConfig from '../config'

import Sequelize from 'sequelize'

/**
 * 读写分离
 * 数据库拆分
 * @param dbname 数据库的名称
 * @param config 数据库配置项
 * @returns 返回Sequlize 实例
 */
const init = (config = {}) => {
    const { username, password, host, port, pool, url, dialect, replication, dbname, timezone } = config;
    let options = {
        dialect
    };
    if (pool && pool.max !== undefined) {
        options.pool = pool;
    }
    if (timezone) {
        options.timezone = timezone;
    }
    // 不启用读写分离
    if (!replication === true) {
        options = { ...{ host, port, username, password }, ...options }
    } else {
        // 读写分离机器host ,port ,username,password 都在config配置里面
        options.replication = replication;
    }
    // 是否使用url 方式
    if (url && url !== '') {
        return new Sequelize(url, options);
    }
    return new Sequelize(dbname, null, null, options);
}

// 实例
const sequelize = init(mysqlConfig.mysql);
console.log('已连接')
export { sequelize }