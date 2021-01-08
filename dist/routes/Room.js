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
router.get('/stage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roomId = req.query['roomId'];
    if (true) {
        const room = yield Room.findById(roomId);
        console.log(room);
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roomId = req.query['roomId'];
    try {
        const room = yield Room.findById(roomId);
        res.json(room);
    }
    catch (err) {
        res.json({
            error: "Invalid Room ID",
            message: err
        });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, phoneNumber, title, restrictions } = req.body;
    let user = new User({ name, phoneNumber });
    user = yield User.findOne({ phoneNumber });
    if (!user) {
        user = new User({ name, phoneNumber });
        user = yield user.save();
    }
    let newRoom = new Room({ title, restrictions, host_id: user._id });
    yield newRoom.save();
    res.json(newRoom);
}));
module.exports = router;
//# sourceMappingURL=Room.js.map