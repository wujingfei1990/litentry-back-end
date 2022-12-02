/**
 * 时间操作
 */
import {consts} from '../config'
 /**
  * 计算两个时间的间隔
  * @param {int} time  两个时间差的相隔毫秒数
  * @param {string} type 类型
  */
export function duration(time, type) {
    switch (type) {
        case consts.TIME_DURATION_TYPE.seconds:
            return Math.floor(time / 1000)
        case consts.TIME_DURATION_TYPE.minutes:
            return Math.floor(time / 1000 / 60)
        case consts.TIME_DURATION_TYPE.hours:
            return Math.floor(time / 1000 / 60 / 60)
        case consts.TIME_DURATION_TYPE.days:
            return Math.floor(time / 1000 / 60 / 60 / 24)
    }
}