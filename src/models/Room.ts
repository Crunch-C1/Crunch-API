// export {};
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

export const roomSchema = mongoose.Schema({
    title: {type: String, required: true},
    restrictions: {type: [String], default: []},
    stage: {type: Number, default: 1},
    host_id: {type: Schema.Types.ObjectId, ref: 'Ref', required: true},
    ballots: [new Schema({
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        orderedRestaurants: {type: [Schema.Types.ObjectId], ref: 'Restaurant'},
    }, {_id: false})],
    choices: [ new Schema(
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            restaurant: {
                type: Schema.Types.ObjectId,
                ref: 'Restaurant',
                required: true,
            },
            firstPlaceVotes: {type: Number, default: 0},
            secondPlaceVotes: {type: Number, default: 0},
            thirdPlaceVotes: {type: Number, default: 0},
        }, {_id: false})],
});

var Room = mongoose.model('Room', roomSchema);

module.exports = {
    Room,
}
