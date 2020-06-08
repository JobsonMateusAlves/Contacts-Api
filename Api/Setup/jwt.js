const jwt = require('jsonwebtoken');

const secret = 'b912bc4821d7395e34ae62e476a3c4d0fcef';

module.exports = {
    sign(payload) {
        return jwt.sign(payload, secret);
    },
    verify(token) {
        return jwt.verify(token, secret);
    }
}