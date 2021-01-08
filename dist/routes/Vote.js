"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Room } = require('../models/Room');
const { User } = require('../models/User');
const express = require('express');
const router = express.Router();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { userId, roomId } = req.query;
    let { orderedRestaurants } = req.body;
    let room = yield Room.findByIdAndUpdate(roomId, { $push: { ballots: { user: userId, orderedRestaurants } } });
    let choices = room.choices || [];
    for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        var place = orderedRestaurants.indexOf(choice.restaurant.toString());
        console.log(place);
        if (place == 0) {
            console.log("here");
            choice.firstPlaceVotes += 1;
        }
        else if (place == 1) {
            choice.secondPlaceVotes += 1;
        }
        else if (place == 2) {
            choice.thirdPlaceVotes += 1;
        }
    }
    room = yield Room.findByIdAndUpdate(roomId, { choices });
    res.json(room);
}));
module.exports = router;
//# sourceMappingURL=Vote.js.map