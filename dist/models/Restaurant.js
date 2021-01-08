"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantSchema = void 0;
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.restaurantSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    website: String,
    cuisines: [String],
    menus: [new Schema({
            subsections: [new Schema({
                    title: { type: String, required: true },
                    items: [new Schema({
                            name: { type: String, required: true },
                            price: { type: Schema.Types.Decimal128, required: true }
                        }, { _id: false })]
                }, { _id: false })]
        }, { _id: false })
    ],
    address: {
        type: String,
        required: true,
        default: "Unknown"
    }
});
var Restaurant = mongoose.model('Restaurant', exports.restaurantSchema);
module.exports = {
    Restaurant,
};
//# sourceMappingURL=Restaurant.js.map