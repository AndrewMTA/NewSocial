require("dotenv").config();
const path = require('path')
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes')

const User = require('./model/User');
const Message = require('./model/Message')
const rooms = ['general', 'tech', 'finance', 'crypto'];
const cors = require('cors');
const mongoose = require("mongoose");

app.use(express.urlencoded({extended: true, limit: '12MB'}));
app.use(express.json({limit: '12MB'}));
app.use(cors());
const postRoutes = require('./routes/postRoute')



app.use('/user', userRoutes)
app.use('/posts', postRoutes)

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT']
  }
})

mongoose.set('strictQuery', false);

const MONGODB = process.env.MONGODB;
mongoose.connect(MONGODB, {
  useNewUrlParser:true,
  useUnifiedTopology: true,
}).then(()=> { console.log("Connected to DB");
}).catch(err=> {
  console.log(err.message)
});



async function getLastMessagesFromRoom(room){
  let roomMessages = await Message.aggregate([
    {$match: {to: room}},
    {$group: {_id: '$date', messagesByDate: {$push: '$$ROOT'}}}
  ])
  return roomMessages;
}

function sortRoomMessagesByDate(messages){
  return messages.sort(function(a, b){
    let date1 = a._id.split('/');
    let date2 = b._id.split('/');

    date1 = date1[2] + date1[0] + date1[1]
    date2 =  date2[2] + date2[0] + date2[1];

    return date1 < date2 ? -1 : 1
  })
}

// socket connection

io.on('connection', (socket)=> {

  socket.on('new-user', async ()=> {
    const members = await User.find();
    io.emit('new-user', members)
  })

  socket.on('join-room', async(newRoom, previousRoom)=> {
    socket.join(newRoom);
    socket.leave(previousRoom);
    let roomMessages = await getLastMessagesFromRoom(newRoom);
    roomMessages = sortRoomMessagesByDate(roomMessages);
    socket.emit('room-messages', roomMessages)
  })

  socket.on('message-room', async(room, content, sender, time, date) => {
    const newMessage = await Message.create({content, from: sender, time, date, to: room});
    let roomMessages = await getLastMessagesFromRoom(room);
    roomMessages = sortRoomMessagesByDate(roomMessages);
    // sending message to room
    io.to(room).emit('room-messages', roomMessages);
    socket.broadcast.emit('notifications', room)
  })

  app.delete('/logout', async(req, res)=> {
    try {
      const {_id, newMessages} = req.body;
      const user = await User.findById(_id);
      user.status = "offline";
      user.newMessages = newMessages;
      await user.save();
      const members = await User.find();
      socket.broadcast.emit('new-user', members);
      res.status(200).send();
    } catch (e) {
      console.log(e);
      res.status(400).send()
    }
  })

})



app.get('/rooms', (req, res)=> {
  res.json(rooms)
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, function(){
  console.log(`Express server listening on port ${PORT}`);
})




if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
