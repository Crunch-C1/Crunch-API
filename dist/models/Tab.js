"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabSchema = void 0;
const { mongoose } = require('mongoose');
var Schema = mongoose.Schema;
exports.tabSchema = mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    roomId: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
    items: [new Schema({
            name: { type: String, required: true },
            price: { type: Schema.Types.Decimal128, required: true }
        }, { _id: false })],
    total: { type: Schema.Types.Decimal128, default: 0 },
    owes_to: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    paid_amount: { type: Schema.Types.Decimal128, default: 0 },
});
var Tab = mongoose.model('Tab', exports.tabSchema);
module.exports = {
    Tab,
};
//# sourceMappingURL=Tab.js.map