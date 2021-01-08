const { User } = require('../models/User');
const express = require('express');
const { route } = require('./Vote');
const router = express.Router();

router.post('/', (req, res) => {
    let {name, phoneNumber} = req.body;
    let user = new User({ name, phoneNumber });
    try {
        user = await User.findOne({ phoneNumber });
        if (!user) {
            user = new User({ name, phoneNumber })
            user = await user.save();
        }
        res.json(user);
    } catch(err) {
        res.json({
            message: err
        })
    }
});