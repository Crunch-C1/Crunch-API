const express = require('express');
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv/config');

const dburl = process.env.MONGO_URL || "mongodb+srv://admin:1234567890@cluster0.ar48n.mongodb.net/crunch?retryWrites=true&w=majority";

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

/* --- CONSTANTS --- */
const port = process.env.PORT || 5000;
// TODO: SET CLIENT URL ENV VAR IN DEPLOYMENT
const clientURL = process.env.CLIENT_URL || 'http://localhost:5000';

/* --- MIDDLEWARE --- */
// server.use(cors({
//     origin: clientURL,
//     credentials: true
// }));

server.use(cors());

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get('/', (req, res) => {
    res.json({ message: "working" })
})

const apiRoute = require('./src/routes/api');
server.use('/api', apiRoute);

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});