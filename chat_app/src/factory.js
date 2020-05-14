/**
 * This contails all the functions for : 
 * Create users,
 * Creating the message,
 * Creating a chat room and
 * adding the time text/message was sent
 */

// generates unique user ID's for users that register
const { v4: uuidv4 } = require('uuid');

/*
 *	Creates a user using the prop id {string} and prop name {string}
 *	Then returns the name {string}
 */
const createUser = ({ name = "" } = {}) => ({
    id: uuidv4(),
    name,
});

/*
 *	Creates a messages object with the use of the prop id {string}, prop time {Date} from the get time
    function and returns the time in 24hr format i.e. 14:22
 * 	The prop message {string} will be the actual string message that will be obtained from prop sender {string} '
    which is the sender of the message
 *	The param of the message {object} are both strings
 */
const createMessage = ({ message = "", sender = "" } = {}) => ({
    id: uuidv4(),
    time: getTime(new Date(Date.now())),
    message,
    sender,
});

/*
 *	Creates a Chat object by obtaining the prop id {string},
 * 	the prop name {string},
 * 	the prop messages {Array.Message}
 * 	and the prop users {Array.string}
 
 */
const createChat = ({
    messages = [],
    name = "Community",
    users = [],
} = {}) => ({
    id: uuidv4(),
    name,
    messages,
    users,
    typingUsers: [],
});

/*
 *	@param date {Date}
 *	@return a string represented in 24hr time i.e. '11:30', '19:30'
 */
const getTime = (date) => {
    return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
};

module.exports = {
    createMessage,
    createChat,
    createUser,
};
