const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const keys = require('./config/keys')
const message = require('./models/message')

const socket = require('socket.io')


const app = new express();
app.use(bodyParser.json())

let server = app.listen(5000, ()=>{
    console.log("Running on port 5000")
})

mongoose.connect(keys.MongoURI)
mongoose.connection.on('error', () => {
    console.log("Error in database connection")
})
mongoose.connection.once('open', () => {
    console.log("DB connection established")
})

let io = socket(server);

io.on('connection', () =>{
    console.log("Socket Connection Established with ID :" + socket.id)
    socket.on("chat", async function(chat){
        chat.created = new Date()
        let response = await new message(chat).save()
        socket.emit("chat", chat)
    })
})

app.get('/chat', async (req, res) => {
    let result = await message.find()
    res.send(result)
})
