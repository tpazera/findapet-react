import React, { Component } from 'react';
import './mapSwitch.scss';

class MapSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: props.isChecked || false,
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({ 
            isChecked: !this.state.isChecked
        })
        if (this.state.isChecked) {
            document.getElementById("map").style.visibility = "hidden";
        } else {
            document.getElementById("map").style.visibility = "visible";
        }
    }

    render() {
        let text;
        if (this.state.isChecked) text = "Ukryj mapę";
        else text = "Pokaż mapę";
        return (
            <div id="mapSwitch">
                <label className="switch">
                    <input value={this.state.isChecked} onChange={this.handleChange} type="checkbox" />
                    <span className="slider round"></span>
                    <span className={`switchText text_${this.state.isChecked}`}>
                    {text}
                </span>
                </label>
                
            </div>
            
        );
    }
}

export default MapSwitch;