const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const ContactSchema = new Schema({
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
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

module.exports = Mongoose.model('Contact', ContactSchema);





