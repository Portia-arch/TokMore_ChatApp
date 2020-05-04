let express = require('express');
let app = express();
let socket = require("socket.io")(http);
let port = process.env.PORT || 3000

app.get('/', (req, res)=> {
  res.sendFile(__dir + '/chat_app/public/index.html')
})

server = app.listen(3000, ()=> {
    console.log('server is running on port 8080')
});

io = socket(server);

io.on("connection", (socket) => {

  console.log(socket.id);

  socket.on('sendMessages', data => {
      io.emit('addMessage', data)
  })
});