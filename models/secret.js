import { sequelize } from '../lib'
import * as Sequelize from 'sequelize'

/**
 * 私钥表
 */
const secret = sequelize.define('secret', {
    secret: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: '加密信息',
        defaultValue: ''
    }
})


export {
    secret
}