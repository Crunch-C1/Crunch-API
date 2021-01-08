// export {};
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

export const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    unpaid_tabs: {type: [Schema.Types.ObjectId], ref: 'Tab'}
});

var User = mongoose.model('User', userSchema);

module.exports = {
    User,
}
