const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;


// Function to generate random room codes
const generateRoomCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};


  
  
const chatRooms = {};

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('joinRoom', (data) => {
    const { username, roomCode } = data;
    if (!chatRooms[roomCode]) {
      chatRooms[roomCode] = [];
    }
    chatRooms[roomCode].push(username);
    socket.join(roomCode);
    io.to(roomCode).emit('roomUsers', chatRooms[roomCode]);
  });

  socket.on('chat message', ({ message, room }) => {
    const timestamp = new Date().toLocaleString();
    const fullMessage = `${timestamp} - ${message}`;
    io.to(room).emit('chat message', fullMessage);
    // Save the message in the server if needed
    if (!chatRooms[room]) {
      chatRooms[room] = [];
    }
    chatRooms[room].push(fullMessage);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

