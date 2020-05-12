/**
 * This is the first screen seen by the user. 
 * The login page renders a login form that will be filled out by a new user so that they can log in.
 * After a user has inserted a user name the event handlers will then redirect the user to the main app screen.
 * If the user is already logged in they can just click the login buttom and be sent to the main app screen.
 */

import React from 'react'
// import ChatApp from '../Layout/chatApp';   
import { VERIFY_USER } from '../../Events'
const uuidv4 = require('uuid');
require('../../styles/login.css');

// Initial page load, show a simple login form
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
    };
  }

  //sets and checks if a username is taken
  setUser = ({user, isUser}) => {
    // console.log(user, isUser)
    if (isUser) { //boolean(true or false)
        this.setError('Username Taken')
    } else {
        this.props.setUser(user)
        this.setError('')
    }
  }

  handleSumbit = (e) => {

    //prevent the login form to resubmit or refresh the app
    e.preventDefault()

    const { socket } = this.props
    const { nickname } = this.state
    socket.emit(VERIFY_USER, nickname, this.setUser)
  };

  handleChange = (e) => {

    this.setState({
        nickname:e.target.value
    })
  };

  setError = (error) => {
      this.setState({error})
  }
  render() {
    const nickname = this.state;
    return (
      <form onSubmit={this.handleSumbit} className="username-container">
        <label htmlFor="nickname">
          Hey there! New to TokMore? Let's get you up and running. Choose a
          nickname and TokMore!
          <br></br>
          Got a nickname already? Click login and TokMore
        </label>
        <div>
          <input
            ref={(input) => {
              this.textInput = input;
            }}
            type="text"
            id="nickname"
            onChange={this.handleChange}
            placeholder="Enter your Nickname..."
            required
          />
        </div>
        <input type="submit" value="Join" />
      </form>
    );
  }
}

Login.defaultProps = {

};

export default Login;