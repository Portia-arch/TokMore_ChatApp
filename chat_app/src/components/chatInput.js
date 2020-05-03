/**
 * The chatInput component willl provide an input box that a user will use to type in a message
 * Since React ES6 doesn't bind 'this' to event handlers by default,I'll bind the maunually.
 * A updateMessage event will be the input box that will take in a component state and set it aside for future use.
 * The chatInput will have event handlers for sending the message, stoping the form form refreshing the page,
 * clearing the input box after hitting enter and calling the onSend callback to display the message using the 'this.state'.
 */

import React from 'react';

// require('../styles/chatInput.css')


class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };

    // React ES6 binding 'this and event handlers
    this.onSubmit = this.onSubmit.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  // eventhandler for sending the message
  onSubmit(event){
    // Stop the form from refreshing the page on submit
    event.preventDefault();

    // Call the onSend callback with the chatInput message
    this.props.onSend(this.state.message);

     // After hitting enter clear the input box
    this.setState({ message: '' });
  }
    // Update and save component state value for later 
    updateMessage(event){
    this.setState({ 
      message: event.target.value
     });
  }

  render() {

    return (
      <form className="chat-input" onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.setState.message}
          onChange={this.updateMessage}
          placeholder="Write your message..."
          required
        />
        <button>Send</button>
      </form>
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;