const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const InvalidTokenSchema = new Schema({
    stringToken: {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = Mongoose.model('InvalidToken', InvalidTokenSchema);