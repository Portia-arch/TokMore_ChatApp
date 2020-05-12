/**
 * The chatInput component will provide an input box that a user will use to type in a message and send it.
 * Since React ES6 doesn't bind 'this' to event handlers by default,I'll bind the maunually.
 * A updateMessage event will be the input box that will take in a component state and set it aside for future use.
 * The chatInput will have event handlers for sending the message, stoping the form form refreshing the page,
 * clearing the input box after hitting enter and calling the onSend callback to display the message using the 'this.state'.
 */

import React from 'react';
import Button from "@material-ui/core/Button";

require('../styles/chatInput.css')


// Display a user input form and submit the input
class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
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
          <Button type="submit" value="send" id="submit" className="hello">Send</Button>
      </form>
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;