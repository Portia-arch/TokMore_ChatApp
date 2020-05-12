import React, { Component } from 'react';
import io from 'socket.io-client';
import USER_CONNECTED from '../../Events'
import LOGOUT from "../../Events";
import Login from './chatheading';

//connects to our server
const socketURL = "http://192.168.0.102:3231"

 class ChatApp extends Component {
    constructor(props){
        super(props);

        this.state =  {
            socket: null,
            user: null
        };
    }
    
    componentWillMount() {
        this.initSocket()
    }

     //this connects to and initializes the socket  
    initSocket = ()=> {
        const socket = io(socketURL)
        socket.on('connect', ()=> {
            console.log("Connected")
        })
        this.setState({socket}) 
    }
   
    //Sets the user property in state with the user parameter containing a string and number
    setUser =  (user)=> {
        const {socket} = this.state
        socket.emit(USER_CONNECTED, user);
        this.setState({user})
    }

    //Sets the user property in state to null
    logout = ()=> {
        const { socket } = this.state;
        socket.emit(LOGOUT);
        this.setState({user:null})
    }  

    render() { 
        const { socket, user } = this.state
        return (
            <div>
                { !user ?
                <Login  socket={socket} setUser={this.setUser}/>
                }
            </div>
        );
    }
}

export default ChatApp;