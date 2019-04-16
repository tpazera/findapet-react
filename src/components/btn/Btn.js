import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './btn.scss';

class Btn extends Component {
    render() {

        return (
                <Button variant="outline-secondary" id="btn">{this.props.text}</Button>
        );
    }
}

export default Btn;