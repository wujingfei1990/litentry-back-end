/**
 * redis 操作辅助类
 * redis 集群和哨兵
 */
import redis from 'ioredis'

import redisConfig from '../config'

function init(config) {
    const { url, sentinels, name, host, port, db, connectTimeout, family,cluster } = config;
    // url 方式创建
    if (url && url !== '') {
        return new redis(url);
    }
    let options = {};
    // redis 哨兵sentinels
    if (sentinels && Array.isArray(sentinels) && sentinels.length > 0) {
        options.sentinels = sentinels;
        options.name = name;
        return new redis({
            sentinels, name
        })
    }
    // redis 集群
    if (cluster && Array.isArray(cluster) && cluster.length > 0) {
        return new redis.Cluster(cluster)
    }
    // redis 单个实例
    return new redis({
        host, port, db, connectTimeout, family
    })
}

let inRedis = init(redisConfig.redis);

export default inRedis