/**
 * This is the first screen seen by the user. 
 * The login page renders a login form that will be filled out by a new user so that they can log in.
 * After a user has inserted a user name the event handlers will then redirect the user to the main app screen.
 * If the user is already logged in they can just click the login buttom and be sent to the main app screen.
 */

import React from 'react'
import ChatApp from '../Layout/chatApp';

require('../../styles/login.css');

// Initial page load, show a simple login form
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };

        // Bind 'this' to event handlers. React ES6 does not do this by default
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
    }

    usernameChangeHandler(event) {
        this.setState({ username: event.target.value });
    }

    usernameSubmitHandler(event) {
        event.preventDefault();
        this.setState({ submitted: true, username: this.state.username });
    }

    render() {
        if (this.state.submitted) {
            // Form was submitted, now show the main App
            return (
                <ChatApp username={this.state.username} />
            );}
        return (
        
            <form onSubmit={this.usernameSubmitHandler} className="username-container">
                <p>Hey there! New to TokMore? Let's get you up 
                    and running. Choose a username and TokMore!
                    <br>
                    </br>
                    But if you already have a username click login and TokMore
                    </p>
                <div>
                    <input
                        type="text"
                        onChange={this.usernameChangeHandler}
                        placeholder="Enter your username..."
                        required />
                </div>
                <input type="submit" value="Join" />
            </form>
        );
    }
}

Login.defaultProps = {

};

export default Login;