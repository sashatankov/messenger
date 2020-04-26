import React, { Component } from 'react';
import "./MessageBubble.css";
export default class MessageBubble extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
          <div style={{backgroundColor: this.props.backgroundColor}} className="messagebubble">
             <div className="messagebubble-author">
                 { this.props.author }
             </div>
             <div className="messagebubble-content">
                 { this.props.content }
             </div>

          </div>
        )
    }
}
