import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./registerForm.scss";

import Modal from "../../modal/Modal";

class RegisterForm extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  onUsernameChange = e => {
    this.setState({ username: e.target.value });
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
        <Form.Group controlId="formUsername">
          <Form.Label>Nazwa użytkownika</Form.Label>
          <Form.Control
            type="text"
            placeholder="Podaj nazwę użytkownika"
            onChange={this.onUsernameChange}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Hasło</Form.Label>
          <Form.Control
            type="password"
            placeholder="Podaj swoje hasło"
            onChange={this.onPasswordChange}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Powtórz hasło</Form.Label>
          <Form.Control
            type="password"
            placeholder="Podaj swoje hasło ponownie"
            onChange={this.onPasswordChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Podaj swój adres e-mail"
            onChange={this.onEmailChange}
          />
        </Form.Group>

        <Button
          className="float-right"
          variant="primary"
          onClick={this.onFormSubmit}
        >
          Zarejestruj się
        </Button>
      </>
    );
  }
}

export default RegisterForm;
