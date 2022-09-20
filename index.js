const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 443;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

io.on('connection', (socket) => {
  socket.on('message1', msg => {
    io.emit('message1', msg);
  });
});

io.on('connection', (socket) => {
  socket.on('message2', msg => {
    io.emit('message2', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

