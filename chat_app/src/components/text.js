import React from 'react';

class Message extends React.Component {
    render() {
        // Was the message sent by the current user. If so, add a css class
        const fromMe = this.props.fromMe ? 'from-me' : '';

        return (
            //should display the message sent
            <div className={`message ${fromMe}`}>
                <div className='username'>
                    {this.props.username}
                </div>
                <div className='message-body'>
                    {this.props.sendMessage}
                </div>
            </div>
        );
    }
}

Message.defaultProps = {
    sendMessage: '',
    username: '',
    fromMe: true
};

export default Message;