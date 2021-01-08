export {};
const {Room} = require('../models/Room');
const {User} = require('../models/User');
const express = require('express');
const router = express.Router();

router.get('/stage', async (req: any, res: any) => {
    const roomId = req.query['roomId'];
    if(true) {
        const room = await Room.findById(roomId);
        console.log(room);
    }
})

router.get('/', async (req: any, res: any) => {
    const roomId = req.query['roomId'];
    try {
        const room = await Room.findById(roomId);
        res.json(room);
    } catch(err) {
        res.json({
            error: "Invalid Room ID",
            message: err
        });
    }  
});

// POST /room
router.post('/', async (req: any, res: any) => {
    let {name, phoneNumber, title, restrictions} = req.body;
    let user = new User({name, phoneNumber});
    user = await User.findOne({phoneNumber});
    if(!user){
        user = new User({name, phoneNumber})
        user = await user.save();
    }
    let newRoom = new Room({title, restrictions, host_id: user._id});
    await newRoom.save();
    res.json(newRoom);
});

module.exports = router;