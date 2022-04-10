// Library
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const routes = require('./routes/routes');

// Instances
require('dotenv').config();
const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: '*' } });

//middleware
app.use(express.json())
app.use(cors());

// create server 
server.listen(process.env.PORT, (err) => {
    if (!err) console.log(`Server is running on port ${process.env.PORT}`)
})

//mongodb connection
mongoose.connect((process.env.MONGO_URL), (err) => {
    if (!err) console.log('MongoDB Connected')
})

app.use('/api/v1', routes)

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
