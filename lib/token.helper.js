/**
 * 
 */
import * as jwt from 'jsonwebtoken'
import { consts } from '../config'
function signToken(body, time = '1d') {
   body = JSON.parse(JSON.stringify(body));
   return jwt.sign(body, consts.JWTSECRET, { expiresIn: '30d' })
}
function verifyToken(token) {
   return jwt.verify(token, consts.JWTSECRET)
}

export { signToken, verifyToken }