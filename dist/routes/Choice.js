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
    let { roomId, userId } = req.query;
    let { restaurant } = req.body;
    let room;
    try {
        room = yield Room.findByIdAndUpdate(roomId, { $push: { choices: { user: userId, restaurant } } });
        res.json({ room });
    }
    catch (err) {
        res.json({ message: err });
    }
}));
module.exports = router;
//# sourceMappingURL=Choice.js.map