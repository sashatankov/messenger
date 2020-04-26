import React, { Component } from 'react';
import './SendButton.css';
export default class SendButton extends Component {

  constructor(props){
    super(props);
    this.content = null;
    if(this.props.type === "text"){
      this.content = "Send";
    }
    else{
      this.content = <img src={this.props.img} alt="send"/>
    }
  }
  handleClick(){
    this.props.handleClick();
  }
  render() {
    return (
      <div className="sendbutton" onClick={() => {this.handleClick()}}>
        {this.content}
      </div>
    )
  }
}
