// import React from "react";
/**
 * This is the individual message component. 
 * Below is the logic to display it on the right if the user sent the message
 * or on the left if it was recieved from someone else.
 */


class Message extends React.Component {
    render() {
        const createText = ({text = "", sender =''} = {}) =>(
            {
                id: uuidv4(),
                time:getTime(new Date(Date.now())),
                text,
                sender
            }
        )
        //returns a string represented in 24hr time 
        const getTime = (date) => {
            return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`
         }
        return (
           a= b+c
        );
    }
}

Message.defaultProps = {

};

export default Message;