/*
*  开发环境配置
*/
export default {
    env: 'develop',
    mysql: {
        username: 'litendb',
        password: 'YLNriHJPjb7pkBDa',
        host: '39.106.109.165',
        port: '3306',
        pool: {
            max: 20,// 最大连接数, 太大服务器抗不住
            min: 0, // 最小连接数
            idle: 10000, // 连接释放之前可以空闲的最长时间（以毫秒为单位）。
        },
        // timezone: '+08:00',
        //pool:null,
        url: '',
        dialect: 'mysql',
        // 是否使用读写分离， 如果设置为false,则表示不使用读写分离
        // 启用读写分离 为一个对象包含read 和 write，
        //    write: 主服务器，用于处理写入的单个服务器
        //    read : 从服务器，是一个数组，用于处理读取的多个服务器
        // 每个读/写服务器可以具有以下属性：host，port，username，password，database
        replication: false,
        define: {
            charset: 'utf8mb4'
        },
        dialectOptions: {
            charset: "utf8mb4",
            collate: "utf8mb4_unicode_ci",
            supportBigNumbers: true,
            bigNumberStrings: true,
            dateStrings: true,
            typeCast: true
        },
        dbname: 'litendb'
    },
    redis: {
        host: 'localhost',  // 主机
        port: 6379,// 端口号        
        db: 0,  // 要使用的数据库索引
        connectTimeout: 20000, // 到Redis服务器的初始连接期间发生超时之前的毫秒数
        url: null,
        password: "",
        family: 4,
        sentinels: [],  // redis 哨兵
        name: '',     //  redis 哨兵一组名称
        cluster: [] // redis 集群
    },
    // 跨域配置
    cors: {
        origin: ["*.slashare.com"],//Access-Control-Allow-Origin
        allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],//Access-Control-Allow-Methods
        allowHeaders: [],//string 数组 Access-Control-Allow-Headers
    },

}

