
// const crypto = require("crypto");

// const DADOS_CRIPTOGRAFAR = {
//     algoritmo : "aes256",
//     codificacao : "utf8",
//     segredo : "chaves",
//     tipo : "hex"
// };

// module.exports = {

//     encrypt(data) {
//         crypto.scrypt(data, )
//     },
//     decrypt(data) {
//         decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);
//         return decipher.final();
//     }
// }

const jwt = require('jsonwebtoken');

const secret = '9eed8176d56f174e03b822c4255048b4';

module.exports = {
    encrypt(payload) {
        return jwt.sign(payload, secret);
    },
    verify(token) {
        return jwt.verify(token, secret);
    }
}