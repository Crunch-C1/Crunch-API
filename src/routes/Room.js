const {Room} = require('../models/Room');
const {User} = require('../models/User');
const express = require('express');
const router = express.Router();

router.post('/stage', async (req, res) => {
    const roomId = req.query['roomId'];
    try {
        const room = await Room.findById(roomId);
        if(room){
            const newRoom = await Room.findByIdAndUpdate(roomId, {stage: room.stage + 1});
            res.json({
                roomId: newRoom._id,
                stage: newRoom.stage
            });
        }
    } catch(err) {
        res.json({
            message: "Could not increment stage."
        });
    }
})

router.get('/stage', async (req, res) => {
    const roomId = req.query['roomId'];
    try {
        const room = await Room.findById(roomId);
        res.json({
            room: room.id,
            stage: room.stage
        });
    } catch(err) {
        res.json({
            message: "No room found with id " + roomId
        });
    }
})

router.get('/', async (req, res) => {
    const roomId = req.query['roomId'];
    try {
        const room = await Room.findById(roomId);
        if(!room) throw "Room not found";
        res.json(room);
    } catch(err) {
        res.json({
            error: "Invalid Room ID",
            message: err
        });
    }  
});

// POST /room
router.post('/', async (req, res) => {
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