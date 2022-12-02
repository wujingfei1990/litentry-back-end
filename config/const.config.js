import path from 'path'
// jwt token 
export const JWTSECRET = 'xipin-api@slashare.com@,.654322[~`]v1.0'
// 客户端密码传递加盐密码，和客户端保持一致
export const CLIENTCRET_SYSTEM = 'SLASHARE@%_-563453@!~[001]'
// 服务器端加盐
export const PASS_WORD_SALT = 's[]?/h~`#@%are23424^&()<>s'
// email 加盐
export const EMAIL_SALT = 'eamil[],.?/%el123()'
//邮箱验证码时间
export const EMAIL_VALIDATE_TIME = 86400
//手机验证码长度
export const PHONE_CODE_LENGTH = 6
//手机验证码过期时间
export const PHONE_EXPRIES_TIME = 5 //分钟
//手机验证码倒计时时间
export const PHONE_TIME = 60
//手机验证码类型
export const PHONE_CODE_TYPE = ['register', 'create', 'validate', 'update-account']
// 时间间隔类型
export const TIME_DURATION_TYPE = {
    seconds: 'seconds',
    minutes: 'minutes',
    hours: 'hours',
    days: 'days'
}