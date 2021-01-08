const express = require('express');
const router = express.Router();
const roomRouter = require('./Room');
const restaurantRouter= require('./Restaurant');
const choiceRouter = require('./Choice')
const voteRouter = require('./Vote')
const userRouter = require('./User');

router.use('/room', roomRouter);
router.use('/restaurant', restaurantRouter);
router.use('/vote', voteRouter);
router.use('/choice', choiceRouter);
router.use('/user', userRouter);

module.exports = router;