const Mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Cryptography = require('../Generic/Cryptography')
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: value => Cryptography.encrypt(value)
    }
});


module.exports = Mongoose.model('User', UserSchema);



// UserSchema.methods.generateJWT = function() {
//     const today = new Date();
//     const expirationDate = new Date(today);
//     expirationDate.setDate(today.getDate() + 120);

//     return jwt.sign({
//         id: this._id,
//         creationDate: today.getDate(),
//         expirationDate: expirationDate.getDate(),
//     }, process.env.JWT_AUTH_KEY);
// };
