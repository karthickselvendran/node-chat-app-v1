// Library
const express = require("express");
const http = require('http');
const socketio = require('socket.io');

// Instances
require('dotenv').config();
const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: '*' } });

// create server 
server.listen(process.env.PORT, (err) => {
    if (!err) console.log(`Server is running on port ${process.env.PORT}`)
})

// socket
io.on('connect', (socket) => {
    console.log('user is connected');

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

// end point
app.use('/', (req, res) => {
    res.json({ status: "running" })
})
