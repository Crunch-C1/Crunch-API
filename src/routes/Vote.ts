export { };
const { Room } = require('../models/Room');
const { User } = require('../models/User')
const express = require('express');
const router = express.Router();



router.post('/', async (req: any, res: any) => {
    let {userId, roomId} = req.query;
    let {orderedRestaurants} = req.body;

    let room = await Room.findByIdAndUpdate(roomId, {$push: {ballots: {user: userId, orderedRestaurants}}});
    
    let choices = room.choices || [];

    for(var i = 0; i < choices.length; i++){
        var choice = choices[i];
        var place = orderedRestaurants.indexOf(choice.restaurant.toString());
        console.log(place);
        if(place == 0){
            console.log("here");
            choice.firstPlaceVotes += 1;
        }
        else if(place == 1){
            choice.secondPlaceVotes += 1;
        }
        else if(place == 2){
            choice.thirdPlaceVotes += 1;
        }
    } 

    room = await Room.findByIdAndUpdate(roomId, {choices})

    res.json(room);
})

module.exports = router;