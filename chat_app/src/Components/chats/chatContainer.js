import React, { Component } from 'react';
import SideBar from './sideBar'
import { CHAT_ROOMS, MESSAGE_SENT, MESSAGE_RECIEVED, TYPING } from '../../Events'
import ChatHeading from './chatheading'
import Messages from '../messages/text'
import MessageInput from '../messages/chatInput'

class ChatContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [],
            activeChat: null
        };
    }   

    // React Life cycle method

    componentDidMount() {
        const { socket } = this.props
        socket.emit(CHAT_ROOMS, this.resetChat)
    }

	/*
	*	Reset the chat back to only the chat passed in using the parameter chat
	*/
    resetChat = (chat) => {
        return this.addChat(chat, true)
    }

	/*
	*	Adds chat to the chat container, if reset is true removes all chats
	*	and sets that chat to the main chat.
	*	Sets the message and typing socket events for the chat.
	*/
    addChat = (chat, reset) => {
        const { socket } = this.props
        const { chats } = this.state

        const newChats = reset ? [chat] : [...chats, chat]
        this.setState({ chats: newChats, activeChat: reset ? chat : this.state.activeChat })

        const messageEvent = `${MESSAGE_RECIEVED}-${chat.id}`
        const typingEvent = `${TYPING}-${chat.id}`

        socket.on(typingEvent, this.updateTypingInChat(chat.id))
        socket.on(messageEvent, this.addMessageToChat(chat.id))
    }

	/*
	* 	Returns a function that will add a message to chat with the chatId passed in. 
	*/
    addMessageToChat = (chatId) => {
        return message => {
            const { chats } = this.state
            let newChats = chats.map((chat) => {
                if (chat.id === chatId)
                    chat.messages.push(message)
                return chat
            })

            this.setState({ chats: newChats })
        }
    }

	/*
	*	Updates the typing of chat with id passed in using the parameter chatId {number}
	*/
    updateTypingInChat = (chatId) => {
        return ({ isTyping, user }) => {
            if (user !== this.props.user.name) {

                const { chats } = this.state

                let newChats = chats.map((chat) => {
                    if (chat.id === chatId) {
                        if (isTyping && !chat.typingUsers.includes(user)) {
                            chat.typingUsers.push(user)
                        } else if (!isTyping && chat.typingUsers.includes(user)) {
                            chat.typingUsers = chat.typingUsers.filter(u => u !== user)
                        }
                    }
                    return chat
                })
                this.setState({ chats: newChats })
            }
        }
    }

	/*
	*	Adds a message to the specified chat using the chatId.
	*	It also takes in a {string} from the message adds it to the chat.
	*/
    sendMessage = (chatId, message) => {
        const { socket } = this.props
        socket.emit(MESSAGE_SENT, { chatId, message })
    }

	/*
	*	Sends typing status to server with the chatId of the chat being typed in.
	*	The typing {boolean} determines If the user is typing still or not.
	*/
    sendTyping = (chatId, isTyping) => {
        const { socket } = this.props
        socket.emit(TYPING, { chatId, isTyping })
    }


    /**
     * sets the chats to be active
     */
    setActiveChat = (activeChat) => {
        this.setState({ activeChat })
    }
    render() {
        const { user, logout } = this.props
        const { chats, activeChat } = this.state
        return (
            <div className="container">
                <SideBar
                    logout={logout}
                    chats={chats}
                    user={user}
                    activeChat={activeChat}
                    setActiveChat={this.setActiveChat}
                />
                <div className="chat-room-container">
                    {
                        activeChat !== null ? (

                            <div className="chat-room">
                                <ChatHeading name={activeChat.name} />
                                <Messages
                                    messages={activeChat.messages} // all the messages
                                    user={user} //current user
                                    typingUsers={activeChat.typingUsers}
                                />
                                <MessageInput
                                    sendMessage={
                                        (message) => {
                                            this.sendMessage(activeChat.id, message) // takes the current id and the message from the id
                                        }
                                    }
                                    sendTyping={
                                        (isTyping) => {
                                            this.sendTyping(activeChat.id, isTyping)
                                        }
                                    }
                                />

                            </div>
                        ) :
                            <div className="chat-room choose">
                                <h3>Choose a ChatRoom!</h3>
                            </div>
                    }
                </div>

            </div>
        );
    }
}

export default ChatContainer;