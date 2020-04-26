

import React from 'react';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: "" };

    // React ES6 does not bind 'this' to event handlers by default
    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  // Takes in the input typed into the input box and puts it 
  //in a component state so that we can use this value later
  textChangeHandler(event) {
    this.setState({ chatInput: event.target.value });
  }

  // eventhandler for sending the message
  submitHandler(event) {
    // Stop the form from refreshing the page on submit
    event.preventDefault();

    // After hiting enter clear the input box
    this.setState({ chatInput: "" });

    // When sending the message, call the onSend callback with the chatInput message using the 'this.state'
    this.props.onSend(this.state.chatInput);
  }

  render() {
    return (
      <form className="chat-input" onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.chatInput}
          onChange={this.textChangeHandler}
          placeholder="Write a message..."
          required
        />
      </form>
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;