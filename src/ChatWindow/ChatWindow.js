import React, { Component } from 'react';
import io from 'socket.io-client';
import './ChatWindow.css';
import InputBar from "../InputBar/InputBar";
import SendButton from "../SendButton/SendButton";
import MessagesWindow from "../MessagesWindow/MessagesWindow";
export default class ChatWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: this.props.username,
        currentMessageContent: "",
        fetchedMessage: "",
        messages: []
    };
    this.endpoint = "http://127.0.0.1:5000";
    this.setUpSocket();
    console.log("In Chat Window, username is: " + this.state.username);


  }

  submitMessage(){
      this.addMessageToState();
      this.sendMessage();
  }

  addMessageToState(){
    console.log("message added");
  }
  sendMessage(){
      this.socket.emit("send message", {"message": this.state.currentMessageContent,
                                        "username": this.state.username});
      console.log( this.state.username + " sent: " + this.state.currentMessageContent);

  }

  handleContentChange(value){
      this.setState((prevState) => ({currentMessageContent: value}));
  }
  render() {
    return (
      <div className="chatwindow">
        <div className="chatwindow-messages">
          <MessagesWindow username={this.state.username} messages={this.state.messages}/>
        </div>

        <div className="chatwindow-input">
            <div className="chatwindow-inputbar">
                <InputBar onChange={this.handleContentChange.bind(this)}/>
            </div>
            <div className="chatwindow-inputbutton">
                <SendButton type="text" handleClick={() => {this.submitMessage()}}/>
            </div>
        </div>
      </div>
    )
  }

  setUpSocket(){
      this.socket = io(this.endpoint);
      this.socket.on("connect", () => {
          console.log("socket connected");
      });

      this.socket.on("disconnected", () => {
          console.log("socket disconnected");
      });

      this.socket.on("receive init messages", (data) => {

          console.log("init messages " + data["username_message_pairs"]);

          const data_json = JSON.parse(data["username_message_pairs"]);
          this.setState(
              (prevState) =>({messages: data_json})
          );
      });

      this.socket.on("receive message", (data) => {

          const  username_message_pair = JSON.parse(data["username_message_pair"]);
          this.setState(
              (prevState) => ({messages: [...prevState.messages, username_message_pair]})
          );

      });

      this.socket.emit("fetch init messages");
  }
}
