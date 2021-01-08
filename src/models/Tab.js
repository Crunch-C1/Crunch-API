// export {};
const { mongoose } = require('mongoose');

var Schema = mongoose.Schema;

const tabSchema = mongoose.Schema({
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

var Tab = mongoose.model('Tab', tabSchema);

module.exports = {
    Tab,
}
