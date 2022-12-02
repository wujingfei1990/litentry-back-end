/**
 * @description 返回状态码
 */
export default {
    // 所有成功返回
    successCode: 10000,
    successMsg: 'Successed!',
    successEmail: 'Verification code has been sent.',
    successName: 'Congratulations, your name is available',
    isEmail: {
        code: 10001,
        msg: 'Invalid email address'
    },
    isPass: {
        code: 10001,
        msg: 'Insecure password'
    },
    isExistEmail: {
        code: 10002,
        msg: 'This email address has been registered. Please sign in.'
    },
    isBindEmail: {
        code: 10002,
        msg: 'Your account has been bound to an email'
    },
    loginFail: {
        code: 100399,
        msg: 'Incorrect email address or password.'
    },
    // token 认证失败
    authorize: {
        code: 100401,
        msg: ' 签名验证失败!'
    },
    // 没有权限
    forbiden: {
        code: 100403,
        msg: '您没有权限!'
    },
    // 参数验证失败
    paramter: {
        code: 100400,
        msg: '参数验证失败!'
    },
    // 已存在
    exist: {
        code: 10001,
        msg: '已存在相同名称的记录!'
    },
    // 系统级别下已存在系统名称的记录
    existLevel: {
        code: 10002,
        msg: '系统级别下已存在系统名称的记录!'
    },
    existCode: {
        code: 10001,
        msg: '编码已存在!'
    },
    existUrl: {
        code: 10001,
        msg: 'url地址已存在!'
    },
    existPhone: {
        code: 10001,
        msg: '电话号码地址已存在!'
    },
    create: {
        code: 10003,
        msg: 'Creation failed'
    },
    createMyCoupon: {
        code: 10003,
        msg: 'You\'ve reached your limit for getting coupons.'
    },
    notCode: {
        code: 10003,
        msg: 'You are not eligible to use the coupon'
    },
    update: {
        code: 10004,
        msg: 'Save failed'
    },
    delete: {
        code: 10005,
        msg: 'Failed to delete'
    },
    upload: {
        code: 10006,
        msg: 'Upload failed'
    },
    password: {
        code: 10007,
        msg: 'Wrong password, please re-enter'
    },
    search: {
        code: 10008,
        msg: 'No data!'
    },
    count: {
        code: 10009,
        msg: '不能删除有分类下面有数据的分类!'
    },
    phoneCodeDisct: {
        code: 10010,
        msg: '在倒计时规定时间内只允许发送一次验证码!'
    },
    phoneCodeExpires: {
        code: 10011,
        msg: '手机验证码已经过期，请重新获取最新验证码!'
    },
    phoneCodeValidate: {
        code: 10012,
        msg: '手机验证码不正确!'
    },
    notEquel: {
        code: 10013,
        msg: 'The two passwords are inconsistent'
    },
    sysCreate: {
        code: 10014,
        msg: '系统创建的数据不能删除!'
    },
    notRegister: {
        code: 10015,
        msg: 'The email address isn\'t registered. Please sign up.'
    },
    codeError: {
        code: 10016,
        msg: 'Verification code error'
    },
    cartError: {
        code: 10017,
        msg: 'Added Failed'
    },
    cartCantAdd: {
        code: 10018,
        msg: 'Out of stock'
    },
    orderCantAdd: {
        code: 10019,
        msg: 'Order Submission Failed'
    },
    payFaile: {
        code: 10020,
        msg: 'Payment Failed'
    },
    payPrice: {
        code: 10021,
        msg: 'Failed to get order price'
    },
    settleErr: {
        code: 10022,
        msg: 'Product has been removed'
    },
    payOther: {
        code: 10023,
        msg: 'Please choose another payment method'
    },
    cancelOrderErr: {
        code: 10024,
        msg: 'Failed to cancel order'
    },
    zipErr: {
        code: 10025,
        msg: 'Failed to obtain tax rate'
    },
    zipErrs: {
        code: 10026,
        msg: 'Please use the correct postal code'
    },
    addressErrs: {
        code: 10027,
        msg: 'The address cannot exceed 35 characters.'
    },
    actErrs: {
        code: 10028,
        msg: 'Offer Expired'
    },
    invitedErr: {
        code: 10029,
        msg: 'Invalid invitation code'
    },
    settleCheck: {
        code: 10030,
        msg: 'There is items in your shopping cart that is out of stock. Please delete it and continue'
    },
    delivery: {
        code: 10030,
        msg: 'days'
    },
    excelErr: {
        code: 10031,
        msg: 'Authentication Error'
    },
    signErr: {
        code: 10032,
        msg: 'sign err'
    },
    noVariant:{
        code:10033,
        msg:'Invalid products'
    },
    addressInfo:{
        code:10034,
        msg:'Incomplete address information'
    }
}