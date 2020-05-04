/**
 * This is the individual message component. 
 * Below is the logic to display it on the right if the user sent the message
 * or on the left if it was recieved from someone else.
 */

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
                    {this.props.updateMessage}
                </div>
            </div>
        );
    }
}

Message.defaultProps = {
    updateMessage: '',
    username: '',
    fromMe: true
};

export default Message;