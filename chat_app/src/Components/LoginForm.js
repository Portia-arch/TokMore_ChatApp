import React, { Component } from 'react';
import { VERIFY_USER } from "../Events";

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickname: "",
            error: "",
        };
    }

    setUser = ({ user, isUser }) => {
        if (isUser) {
            this.setError("User name taken");
        } else {
            this.setError("");
            this.props.setUser(user);
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { socket } = this.props;
        const { nickname } = this.state;
        socket.emit(VERIFY_USER, nickname, this.setUser);
    };

    handleChange = (e) => {
        this.setState({ nickname: e.target.value });
    };

    setError = (error) => {
        this.setState({ error });
    };

    render() {
        const { nickname, error } = this.state;
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <label htmlFor="nickname">
                        <p>
                            Hey there! New to TokMore?
              <br></br>
              Let's get you up and running.
              <br></br>
              Choose a username and TokMore!
            </p>
                    </label>
                    <input
                        ref={(input) => {
                            this.textInput = input;
                        }}
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={this.handleChange}
                        placeholder={"What's Your Username?"}
                    />
                    <div className="error">{error ? error : null}</div>
                </form>
            </div>
        );
    }
}

export default LoginForm;