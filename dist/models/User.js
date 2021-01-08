"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.userSchema = mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    unpaid_tabs: { type: [Schema.Types.ObjectId], ref: 'Tab' }
});
var User = mongoose.model('User', exports.userSchema);
module.exports = {
    User,
};
//# sourceMappingURL=User.js.map