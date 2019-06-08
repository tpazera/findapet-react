import React, { Component } from 'react';
import './appName.scss';

class AppName extends Component {
    state = { 
        appName: "PawFinder"
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
