// export {};
const mongoose = require('mongoose'); // this is causing some kind of issue. not sure exactly how to fix

var Schema = mongoose.Schema;

export const restaurantSchema = mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    website: String,
    cuisines: [String],
    menus: [ new Schema(
        {
            subsections: [new Schema({
                title: {type: String, required: true},
                items: [new Schema({
                    name: {type: String, required: true},
                    price: {type: Schema.Types.Decimal128, required: true}
                }, {_id: false})]
            }, {_id: false})]
        }, {_id: false})
    ],
    address: {
        type: String,
        required: true,
        default: "Unknown"
    }
    
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
    Restaurant,
}
