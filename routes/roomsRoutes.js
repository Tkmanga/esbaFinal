const express = require('express');

const rooter = express.Router();

const Room = require('../models/room');


rooter.get(`/getallrooms`, async (req, res) => {
    try {
        const rooms = await Room.find({})
        res.send(rooms)
    } catch (error) {
        return res.status(404).json({message: error})
    }
})

module.exports = rooter 