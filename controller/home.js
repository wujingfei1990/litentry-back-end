import { secret } from '../models'
import Sequelize from 'sequelize'
import { sequelize, util } from '../lib';
const Op = Sequelize.Op;

/**
 * 随机获取一条secret
 */
export async function getRandSecret() {
    return await secret.findOne({
        order: [Sequelize.literal('rand()')]
    })
}
/**
 * 获取导航
 */
export async function navMenus({ parentId }) {
    if (parentId == undefined) {
        parentId = {
            [Op.gte]: 0
        }
    }
    return await navMenu.findAll({
        attributes: ['id', 'name', 'icon', 'parentId', 'type', 'content'],
        where: {
            status: 1,
            parentId
        },
        order: [
            ['order', 'ASC'],
            ['createdAt', 'DESC']
        ]
    })
}
/**
 * 获取专题
 */
export async function getAcitivityZone() {
    return await acitivityZone.findAll({
        where: {
            status: 1
        },
        order: [
            ['createdAt', 'DESC']
        ]
    })
}

export async function coupon(options) {
    let { memberId } = options;
    let sql, where;

    where = '`coupon`.`shopId` = 1 AND `coupon`.`display` = 1 AND `coupon`.`status` = 1 AND `coupon`.`startTime` <= "' + moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + '" AND (`coupon`.`endTime` IS NULL OR `coupon`.`endTime` = 0 OR `coupon`.`endTime` > "' + moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + '")';
    sql = 'SELECT coupon.id,coupon.shopId,coupon.code,coupon.condition,coupon.type,coupon.cutPrice,coupon.startTime,coupon.endTime,coupon.maxCount,myCoupon.amount FROM `coupons` AS coupon LEFT JOIN `' + sequelize.config.database + '`.`myCoupons` AS myCoupon ON `coupon`.`code`=`myCoupon`.`code` AND `myCoupon`.`memberId` =' + memberId + ' WHERE ' + where;

    let [counponList] = await sequelize2.query(sql);
    return counponList.map(v => {
        v.amount = v.amount ? v.amount : 0;
        v.number = v.maxCount == 0 ? 9999 : v.maxCount - v.amount;
        return v;
    })

}

export async function server() {
    let res = await serviceManage.findAll({
        attributes: ['name', 'content', 'pic'],
        order: [
            ['createdAt', 'DESC']
        ]
    });
    return res;
}
/**
 * 查询热门关键词
 * @param {*} options 
 */
export async function getHotSearch(options) {
    let { number } = options;
    let res = await hotSearch.findAll({
        attributes: ['name'],
        order: [
            ['order', 'desc'],
            ['id', 'desc']
        ],
        limit: number
    });
    return JSON.parse(JSON.stringify(res));
}
/**
 * 总分类树
 * @param {*} options 
 */
export async function categroyList(options) {
    let res = await categoryTree.findAll({
        attributes: ['id', 'parentId', 'name', 'level', 'attrGroupId', 'standard'],
        order: [
            ['id', 'asc']
        ]
    });
    return JSON.parse(JSON.stringify(res));
}
/**
 * 楼层
 * @param {*} options 
 */
export async function layers(options) {
    let { type } = options;
    let res = await layer.findAll({
        attributes: ['layerNum', 'title', 'content'],
        where: { type, status: 1 },
        order: [["layerNum", "asc"]]
    });
    return JSON.parse(JSON.stringify(res));
}

/**
 * 历史优惠券统计
 * @param {*} options 
 */
export async function couponStatistic(options) {
    let { type } = options;
    let res = await myCoupon.findAll({
        attributes: ['code', 'type', 'condition', 'cutPrice', [sequelize.fn('SUM', sequelize.col('amount')), 'amount'], [sequelize.fn('SUM', sequelize.col('times')), 'times']],
        group: 'code',
        raw: true,
        limit: 5,
        where: {
            couponType: type
        },
        order: [
            [sequelize.fn('SUM', sequelize.col('times')), 'DESC']
        ]
    });
    return JSON.parse(JSON.stringify(res));
}

