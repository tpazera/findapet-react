import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./addAnnouncementForm.scss";

import Modal from "../../modal/Modal";

class AddAnnouncementForm extends Component {
  onFormSubmit = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => {
        Alert.success("Dodano ogłoszenie!", {
          position: "bottom-left",
          effect: "slide",
          timeout: 1000
        });
      })
      .catch(error => console.log(error.response));
  };

  render() {
    return (
      <>
        <Alert />
        <h2 className="mb-4">Utwórz Ogłoszenie</h2>
        <Form.Group controlId="formTitlel">
          <Row>
            <Col sm="3">
              <Form.Label>Tytuł ogłoszenia</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder=""
                onChange={this.onEmailChange}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Row>
            <Col sm="3">
              <Form.Label>Słowa kluczowe</Form.Label>
            </Col>
            <Col sm="9">
              <Form.Control type="text" onChange={this.onPasswordChange} />
            </Col>
          </Row>
        </Form.Group>
        <Row className="mb-2">
          <Col sm="3">Płeć</Col>
          <Col sm="9">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="genderRadio"
                value="samica"
              />
              <label className="form-check-label" htmlFor="genderRadio">
                samica
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="genderRadio2"
                value="samiec"
              />
              <label className="form-check-label" htmlFor="genderRadio2">
                samiec
              </label>
            </div>
          </Col>
        </Row>
        <Form.Group controlId="petBreed">
          <Row>
            <Col sm="3">Rasa</Col>
            <Col sm="9">
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <Col sm="3">Opis</Col>
          <Col sm="9">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Col>
        </Row>
        <Button
          className="float-right"
          variant="primary"
          onClick={this.onFormSubmit}
        >
          Dodaj Ogłoszenie
        </Button>
      </>
    );
  }
}

export default AddAnnouncementForm;
