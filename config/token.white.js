// jwt-token 验证白名单（哪些路径不需要验证token）
export const JWt_TOKEN_WHIte_PATH = [
    // 登录，注册接口不需要验证
    /^\/api\/swagger-html/,
    /^\/api\/swagger-json/,
    /^\/swagger-html/,
    /^\/swagger-json/,
    /^\/api\/v1\/signin/,

]