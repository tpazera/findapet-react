import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./loginForm.scss";

import Modal from "../../modal/Modal";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onFormSubmit = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => {
        Alert.success("Zalogowano", {
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
        <Form.Group controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Podaj swój adres e-mail"
            onChange={this.onEmailChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Hasło</Form.Label>
          <Form.Control
            type="password"
            placeholder="Podaj swoje hasło"
            onChange={this.onPasswordChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={this.onFormSubmit}>
          Login
        </Button>
      </>
    );
  }
}

export default LoginForm;
