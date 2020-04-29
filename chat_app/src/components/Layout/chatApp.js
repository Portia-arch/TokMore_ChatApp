/**
 * This the main app screen component. This should allow for the display of all the messages sent and recieve.
 * First I need a server connection so that I can send a message. With the help of socket.io I can have server for that. 
 */

import React from "react";
import io from "socket.io-client";
import config from "../../config";
import Messages from "../text";
import ChatInput from "../chatInput";

require('../../styles/chatApp.css')

class ChatApp extends React.Component {
  socket = {};
  
  constructor(props) {
    super(props);
    // an array to store messages
    this.state = { messages: [] };
    this.sendMessage = this.sendMessage.bind(this);

    // Connect to the server
    this.socket = io(config.api, {
      query: `username=${props.username}`,
    }).connect();

    // Listen for messages from the server
    this.socket.on("server:message", (message) => {
      this.addMessage(message);
    });
  }

  sendMessage(message) {
    const messageObject = {
      username: this.state.username,
      message,
    };

    /* socket.on listens "sendMessage" from client and io.emit sends the message out to clients */
    // socket.on('sendMessage', (message) => {
    //   io.emit('receiveMessage', ChatInput (message.from, message.ChatInput));
    // });

    // Emit the message to the server
    this.socket.emit("client:message", messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="container">
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendMessage} />
      </div>
    );
  }
}
ChatApp.defaultProps = {
  username: "Anonymous"
};

export default ChatApp;
