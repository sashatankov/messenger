import React, { Component } from 'react';
import './InputBar.css';
export default class InputBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            content: ""
        }
    }

    handleChange(e){
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div className="inputbar">
                <input type="text" onChange={this.handleChange=this.handleChange.bind(this)}/>
            </div>
        )
    }
}
