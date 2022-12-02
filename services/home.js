/**
 * 
 */
import { homeController as controller } from '../controller'
import {
    cryptPwd,
    signToken,
    decryptByDESModeEBC,
    encryptByDESModeEBC,
    SuccessMsg,
    ErrorRes,
    SuccessData,
    phoneCode,
    util,
    redis,
    TAXJAR
} from '../lib'
import { consts, resCode } from '../config'
import { cryptoWaitReady, decodeAddress, signatureVerify } from '@polkadot/util-crypto';
import { u8aToHex } from '@polkadot/util';

/**
 * 随机获取一条信息
 * @param {object} ctx 执行上下文
 * @param {*} next 
 */
export async function secret(ctx, next) {
    const data = await controller.getRandSecret();
    SuccessData(ctx, data);
}
/**
 * 验证签名正确，返回token
 * @param {object} ctx 执行上下文
 * @param {*} next 
 */
export async function signin(ctx, next) {
    const { address, message, signature } = ctx.validatedBody;
    const publicKey = decodeAddress(address);
    const hexPublicKey = u8aToHex(publicKey);

    const isValidSignature = signatureVerify(message, signature, hexPublicKey).isValid;
    if(isValidSignature){
        let token = signToken({ address,message });
        SuccessData(ctx, token);
    }else{
        ErrorRes(ctx, resCode.authorize);
    }

    

}