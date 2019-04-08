import React, { Component } from 'react';
import './appName.scss';

class AppName extends Component {
    state = { 
        appName: "Find a Pet"
     }
    render() {
        return (
            <div className="appName">
                {this.state.appName}
            </div>
        );
    }
}

export default AppName;
