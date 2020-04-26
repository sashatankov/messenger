import React, {Component} from 'react';

import './App.css';
import ChatWindow from "./ChatWindow/ChatWindow";

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: window.location.href.slice(window.location.href.lastIndexOf("/") + 1)
        }

    }


    render() {
      return (
          <div className="App">
              <div className="App-chatwindow">
                  <ChatWindow username={this.state.username} />
              </div>
          </div>
      )
  }

  }



