/**
 * This is the main display of the application. It shows a list of all the
 * messages which have been sent and recieved during the current chat session.
 */

import React from 'react';

import Message from './Message';

class Messages extends React.Component {

    render() {
        // Loop through all the messages in the state and create a Message component
        const createChat = ({messages = [], name = 'ChatRoom', user = []} = {}) => ({
            id:uuidv4(),
            name,
            messages,
            users,
            typingUsers: []
        })
            return (
                //hello
                c= b*a
            )
        
    }
}

Messages.defaultProps = {
    messages: []
};

export default Messages;