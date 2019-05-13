import React, { Component } from 'react';
import "./sortBar.scss"
import { Col, Form, Button } from 'react-bootstrap';
import lists from "../../resources/lists.json";

class PetInfo extends Component {

    render() {

        const colors = lists.colors;
        const types = lists.types;
        const status = lists.status;

        return (
            <div>
                <Form.Row>
                    <Form.Group as={Col} controlId="selectColor">
                    <Form.Label>Kolor</Form.Label>
                    <Form.Control as="select">
                        {colors.map((item,i) => (
                            <option key={item + i}>{item}</option>
                        ))}
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="selectType">
                    <Form.Label>Typ</Form.Label>
                    <Form.Control as="select">
                        {types.map((item,i) => (
                            <option key={item + i}>{item}</option>
                        ))}
                    </Form.Control>
                    </Form.Group>                    
                    
                    <Form.Group as={Col} controlId="selectStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select">
                        {status.map((item,i) => (
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
