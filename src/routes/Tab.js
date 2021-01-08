const { Room } = require('../models/Room');
const { User } = require('../models/User');
const { Tab } = require('../models/Tab')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    let { roomId, userId } = req.query;
    let tab = await Tab.findOne({ roomId, userId });
    if (tab) {
        res.json(tab);
    }
    else {
        res.json({ message: "Could not find a valid tab" });
    }
})

router.post('/', async (req, res) => {
    let { roomId, userId } = req.query;
    let { name, price } = req.body;
    let tab = await Tab.findOneAndUpdate({ roomId, userId }, { $push: { items: { name, price } } });
    if (tab) {
        tab = new Tab({ roomId, userId, items: [{ name, price }] })
        await tab.save();
        await Room.findByIdAndUpdate(roomId, { $push: { tabs: tab._id } });
        await User.findByIdAndUpdate(userId, { $push: { unpaid_tabs: tab._id } });
    }
    res.json(tab);
})

module.exports = router;