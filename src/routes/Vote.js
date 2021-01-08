const { Room } = require('../models/Room');
const { User } = require('../models/User')
// wait does it not work without the .meeks?
const Meeks = require('meeks-prf-js');
const express = require('express');
const router = express.Router();

router.get('/winner', async(req, res) => {
    let {roomId} = req.query;
    // try{
        let room = await Room.findById(roomId);
        if(room){
            console.log(room.choices)
            let choices = room.choices;

            let candidates = choices.map((item) => item.restaurant.toString()).join(' ');
            let ballots = room.ballots.map((item) => [1, item.orderedRestaurants.map(item=> item.toString())].join(' '));
            
            res.json({candidates, ballots})
        } else{
            res.json({message: "Could not find room"})
        }
    // }
    // catch(err){
    //     console.log("error")
    //     res.json({message: err})
    // }
})

router.post('/winner', async (req, res) => {
    let {roomId, winningRestaurantId} = req.query;
    try {
        const room = await Room.findById(roomId);
        room.winning_restaurant = room.choices.filter((value, index) => {
            return value._id === winningRestaurantId;
        })[0];
        await room.save();
        res.json(room);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

router.post('/', async (req, res) => {
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