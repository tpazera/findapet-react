import React, { Component } from 'react';
import "./petInfo.scss"

class PetInfo extends Component {
    render() {

        return (
            <div>
                <div className="description">
                    {this.props.text}
                </div>
                <br />
                <div id="image0" className="image">
                    <img class="image" src={this.props.image} alt-text=""/>
                </div>
            </div>
        );
    }
}

export default PetInfo;
