let app = require('http').createServer()
let io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 3231
const SocketManager = require ('./SocketManager')

//io sends a socket to a fucntion
io.on('connection', SocketManager)

app.listen(PORT, () =>{
  console.log('Connected to port:' + PORT)
});