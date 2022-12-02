// import * as bloom from 'bloom-redis';
import { redis } from '../lib';
import URL from 'url';


import { create, all } from 'mathjs';
const config = {
    number: 'BigNumber',
    precision: 20
}
const math = create(all, config);

/**
 * 加法
 * @param {*} val1 
 * @param {*} val2 
 */
export function add(val1, val2) {
    return math.number(math.add(math.bignumber(val1), math.bignumber(val2)));
}
/**
 * 减法
 * @param {*} val1 
 * @param {*} val2 
 */
export function subtract(val1, val2) {
    return math.number(math.subtract(math.bignumber(val1), math.bignumber(val2)));
}
/**
 * 乘法
 * @param {*} val1 
 * @param {*} val2 
 */
export function multiply(val1, val2) {
    return math.number(math.multiply(math.bignumber(val1), math.bignumber(val2)));
}
/**
 * 除法
 * @param {*} val1 
 * @param {*} val2 
 */
export function divide(val1, val2) {
    return math.number(math.divide(math.bignumber(val1), math.bignumber(val2)));
}

export function isNullOrEmpty(val) {
    return val === "" || val === undefined || val === null
}

/**
 * 替换模板字符串
 */
export function replaceTemplate(template, obj) {
    for (let key in obj) {
        const tem = obj[key];
        const regex = new RegExp(`{{${key}}}`, 'g');
        template = template.replace(regex, tem);
    }
    return template;
}

export function isEmail(val) {
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return pattern.test(val);
}

export function isPass(val) {
    // var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    var pattern = /^(?=.*[a-zA-Z])(?=.*\d)[^]{8,100}$/;
    return pattern.test(val);
}
//冒泡排序数组
export function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j].key > arr[j + 1].key) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}
/**
 * 冒泡排序 
 * @param {*} arr 数组
 * @param {*} order 排序类型，1-上架时间降序，2-价格生序，3-价格降序，4-销量降序
 * @param {*} orderType 排序方式，1-生序，2-降序
 */
export function goodsSort(arr, order) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let key = 'goodsId';
            if (order == 1) {
                key = 'createdAt';
                if (arr[j][key] < arr[j + 1][key]) {
                    let tmp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = tmp
                }
            }
            if (order == 2) {
                key = 'price'
                if ((arr[j][key] - arr[j + 1][key]) > 0) {
                    let tmp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = tmp
                }
            }
            if (order == 3) {
                key = 'price'
                if ((arr[j][key] - arr[j + 1][key]) < 0) {
                    let tmp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = tmp
                }
            }
            if (order == 4) {
                key = 'sales'
                if (arr[j][key] < arr[j + 1][key]) {
                    let tmp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = tmp
                }
            }

        }
    }
    return arr
}
/**
 * 冒泡排序 楼层排序
 * @param {*} arr 数组
 * @param {*} order 排序类型，1升序，2降序
 */
export function layerSort(arr, order = 1) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let key = 'order';
            if (order == 1) {
                if (arr[j][key] > arr[j + 1][key]) {
                    let tmp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = tmp
                }
            }
            if (order == 2) {
                if (arr[j][key] < arr[j + 1][key]) {
                    let tmp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = tmp
                }
            }
        }
    }
    return arr
}

/**
 * 布隆过滤器
 * @param {*} key 
 */
// export function bloomFun(key) {
//     bloom.connect(redis);
//     filter = new bloom.BloomFilter({
//         client: redis,
//         key: key
//     });
//     filter.contains(key, (result) => {
//         console.log('result:', result);
//     });
// }

/**
 * 创建随机验证码
 * @param {int} len 手机验证码长度 
 */
export function createRandom(len) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];
    for (let i = 0; i < len; i++) {
        const index = Math.floor(Math.random() * arr.length);
        result.push(arr[index])
    }
    return result.join('');
}
export async function sleep(time = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}

/**
 * 讲图片地址转换为cdnurl
 * @param {*} url 
 */
export function cdnUrl(link) {
    return link;
    // try {
    //     const cndHost = 'https://d2rahsm69mee2x.cloudfront.net';
    //     let arg = URL.parse(link);
    //     // console.log(cndHost+arg.path);
    //     if (arg.host == 'slashare-prod.s3.us-west-2.amazonaws.com') {
    //         return cndHost + arg.path;
    //     } else {
    //         return link;
    //     }

    // } catch (err) {
    //     return link;
    // }

}
