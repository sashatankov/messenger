import React, { Component } from 'react';
import "./MessagesWindow.css";
import MessageBubble from "../MessageBubble/MessageBubble";
export default class MessagesWindow extends Component {

    constructor(props){
        super(props);

    }

    getBackgroundColor(messageAuthorPair){
        if(this.props.username === messageAuthorPair["username"]){
            return "#0583F2";
        }
        return "#F2F2F2"
    }

    getClassForMessageRow(messageAuthorPair){
        if(this.props.username === messageAuthorPair["username"]){
            return "messageswindow-row-reverse";
        }
        return "messageswindow-row";
    }




    getMessages(){

      const messages = this.props.messages.map((username_message_pair) =>
        <div key={this.props.messages.indexOf(username_message_pair)}
             className={this.getClassForMessageRow(username_message_pair)}>

            <div className="messageswindow-message">
                <MessageBubble author={username_message_pair["username"]}
                               content={username_message_pair["message"]}
                               backgroundColor={this.getBackgroundColor(username_message_pair)}/>
            </div>
        </div>

      );

      return messages
    }

    render() {
        return (
          <div className="messageswindow">
            { this.getMessages() }
          </div>
        )
    }
}
