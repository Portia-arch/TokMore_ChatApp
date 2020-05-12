const Message = require('../components/text')
const io = require('./server'). io 
const { VERIFY_USER, USER_CONNECTED, LOGOUT} = require('../Events')
let connectedUsers = {}

//the socket inside the function individualize the type of connection we have  
module.exports = function(socket) {
    console.log('Socket Id' + socket.id)
}

//verify username
socket.on(VERIFY_USER, (user, callback) => {
    if (isUser(connectedUsers, nickname)) {
        callback({isUser:true, user:null})
    } else {
        callback({ isUser:false, user:createUser({name:nickname})})
    }
})

//user Connects with username
    socket.on(USER_CONNECTED, (user)=> {
        connectedUsers = addUser(connectedUsers, user)
        socket.user = user

        io.emit(USER_CONNECTED, connectedUsers)
        console.log(connectedUsers);
    })


//user disconnects


//user logouts


/**
 * Adds a user to a list passed in
 * It will return a userList {object} that has key value pairs of users
 * It will take in the parameter {user} and add it to the list
 */
function addUser(userList, user) {
    let newList = Object.assign({}, userList)
    newList[user.name] = user
    return newList
}

/**
 * Removes a user from the list passed in
 * It will take in a parameter {object} fom userList and a {string} from username name and remove it
 */
function removeUser(userList, username) {
    let newList = Object.assign({}, userList)
    delete newList[username]
    return newList
}

/**
 * Checks if the user is in the passed list.
 * Takes in a {string} aas a parameter from username 
 * And returns a userList {object} with key value pairs of users
 */
function isUser(userList, username) {
    //boolean
    return username in userList
}