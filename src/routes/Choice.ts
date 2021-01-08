export { };
const { Room } = require('../models/Room');
const { User } = require('../models/User')
const express = require('express');
const router = express.Router();

router.post('/', async (req: any, res: any) => {
    let {roomId, userId} = req.query;
    let {restaurant} = req.body;
    let room;
    try{
        room = await Room.findByIdAndUpdate(roomId, {$push: {choices: {user: userId, restaurant}}})
        res.json({room})
    }
    catch(err){
        res.json({message: err})
    }
})

module.exports = router;