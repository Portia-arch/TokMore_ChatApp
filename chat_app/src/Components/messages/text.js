import React, { Component } from 'react';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.scrollDown = this.scrollDown.bind(this)
  }

  scrollDown() {
    const { container } = this.refs
    container.scrollTop = container.scrollHeight
  }

  componentDidMount() {
    this.scrollDown()
  }

  componentDidUpdate(prevProps, prevState) {
    this.scrollDown()
  }

  render() {
    const { messages, user, typingUsers } = this.props

    /**
     * this will render the messages that have been send and allow for scrolling if the messages keep on being sent
     */
    return (
      <div ref='container'
        className="thread-container">
        <div className="thread">
          {
            messages.map((mes) => {
              return (
                <div
                  key={mes.id}
                  className={`message-container ${mes.sender === user.name && 'right'}`}
                >
                  <div className="time">{mes.time}</div>
                  <div className="data">
                    <div className="message">{mes.message}</div>
                    <div className="name">{mes.sender}</div>
                  </div>
                </div>

              )
            })
          }
          {
            typingUsers.map((name) => {
              return (
                <div key={name} className="typing-user">
                  {`${name} is typing . . .`}
                </div>
              )
            })
          }
        </div>


      </div>
    );
  }
}
export default Messages;
