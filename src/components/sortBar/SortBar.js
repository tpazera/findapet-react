import React, { Component } from 'react';
import "./sortBar.scss"
import { Col, Form, Button } from 'react-bootstrap';
import lists from "../../resources/lists.json";
import axios from 'axios';

class PetInfo extends Component {

    state = {
        colors: [],
        status: [],
        types: [],
    }

    componentDidMount() {
        axios.get(`http://find-pet-app.herokuapp.com/rest/announcement/colors`)
            .then(res => {
                const colors = res.data;
                this.setState({ colors });
            })
        axios.get(`https://find-pet-app.herokuapp.com/rest/announcement/status`)
            .then(res => {
                const status = res.data;
                this.setState({ status });
            })
        axios.get(`https://find-pet-app.herokuapp.com/rest/announcement/types`)
            .then(res => {
                const types = res.data;
                this.setState({ types });
            })
        

    }

    render() {

        return (
            <div>
                <Form.Row>
                    <Form.Group as={Col} controlId="selectColor">
                    <Form.Label>Kolor</Form.Label>
                    <Form.Control as="select">
                        {this.state.colors.map((item,i) => (
                            <option key={item + i}>{item}</option>
                        ))}
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="selectType">
                    <Form.Label>Typ</Form.Label>
                    <Form.Control as="select">
                        {this.state.types.map((item,i) => (
                            <option key={item + i}>{item}</option>
                        ))}
                    </Form.Control>
                    </Form.Group>                    
                    
                    <Form.Group as={Col} controlId="selectStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select">
                        {this.state.status.map((item,i) => (
                            <option key={item + i}>{item}</option>
                        ))}
                    </Form.Control>
                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                    <Button variant="primary" type="submit">
                        Sortuj
                    </Button>
                    </Form.Group>

                </Form.Row>
            </div>
        );
    }
}

export default PetInfo;
