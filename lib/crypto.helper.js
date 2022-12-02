import * as crypto from 'crypto'
import CryptoJS from 'crypto-js'


// 密码加密
function cryptPwd(pwd,salt) {
    let newPwd = `${pwd}:${salt}`;
    let md5 = crypto.createHash('md5');
    let result = md5.update(newPwd).digest('hex')
    return result
}

//str为待加密字符串，key为密匙
export function encryptByDESModeEBC(str, key) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(str, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString();
}
//ciphertext为带解密字符串，key为密匙
export function decryptByDESModeEBC(ciphertext, key) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    var result_value = decrypted.toString(CryptoJS.enc.Utf8);
    return result_value;
}

//SHA256并采用十六进制编码
export function encryptBySHA256(str) {
    let decrypted = CryptoJS.SHA256(str);
    let result_value = decrypted.toString();
    return result_value;
}

export default cryptPwd
