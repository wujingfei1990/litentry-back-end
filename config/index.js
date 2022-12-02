import development from './dev.config'
// import test from './test.config'
// import production from './prod.config'
// import pro from './pro.config'
import * as consts from './const.config'
import * as tokenWhite from './token.white'
export * from './router.config'
import resCode from './response.config'

const env = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV)
const obj = { development }

// export const isLocal = env === 'local';
export const isDev = env === 'development';
// export const isTest = env === 'test';
// export const isProduction = env === 'production';
// export const isPro = env === 'pro';
export default obj[env]
export { consts, tokenWhite, resCode }
