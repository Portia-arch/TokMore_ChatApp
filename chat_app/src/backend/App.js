let express = require('express');
let app = express();
let socket = require("socket.io");


server = app.listen(8080, function () {
    console.log('server is running on port 8080')
});

io = socket(server);

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function(data){
      io.emit('RECIEVE_MESSAGE', data)
  })
});