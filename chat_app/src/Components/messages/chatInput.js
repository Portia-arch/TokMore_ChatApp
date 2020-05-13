/**
 * The chatInput component will provide an input box that a user will use to type in a message and send it.
 * Since React ES6 doesn't bind 'this' to event handlers by default,I'll bind the maunually.
 * A updateMessage event will be the input box that will take in a component state and set it aside for future use.
 * The chatInput will have event handlers for sending the message, stoping the form form refreshing the page,
 * clearing the input box after hitting enter and calling the onSend callback to display the message using the 'this.state'.
 */

import React, { Component } from 'react';
// import Header from "../../header";


class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      isTyping: false
    };

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.sendMessage()
    this.setState({ message: "" })
  }

  sendMessage = () => {
    this.props.sendMessage(this.state.message)

  }

  componentWillUnmount() {
    this.stopCheckingTyping()
  }

  sendTyping = () => {
    this.lastUpdateTime = Date.now()
    if (!this.state.isTyping) {
      this.setState({ isTyping: true })
      this.props.sendTyping(true)
      this.startCheckingTyping()
    }
  }

	/*
	*	startCheckingTyping
	*	Start an interval that checks if the user is typing.
	*/
  startCheckingTyping = () => {
    console.log("Typing");
    this.typingInterval = setInterval(() => {
      if ((Date.now() - this.lastUpdateTime) > 300) {
        this.setState({ isTyping: false })
        this.stopCheckingTyping()
      }
    }, 300)
  }

	/*
	*	stopCheckingTyping
	*	Start the interval from checking if the user is typing.
	*/
  stopCheckingTyping = () => {
    console.log("Stop Typing");
    if (this.typingInterval) {
      clearInterval(this.typingInterval)
      this.props.sendTyping(false)
    }
  }


  render() {
    const { message } = this.state
    return (
      <div className="message-input">
        <form
          onSubmit={this.handleSubmit}
          className="message-form">

          <input
            id="message"
            ref={"messageinput"}
            type="text"
            className="form-control"
            value={message}
            autoComplete={'off'}
            placeholder="Type something interesting"
            onKeyUp={e => { e.keyCode !== 13 && this.sendTyping() }}
            onChange={
              ({ target }) => {
                this.setState({ message: target.value })
              }
            }
          />
          <button
            disabled={message.length < 1}
            type="submit"
            className="send"

          > Send </button>
        </form>

      </div>
    );
  }
}

export default ChatInput;