import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./loginForm.scss";

class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      id: "",
      token: ""
    };
  }

  onLoginChange = e => {
    this.setState({ login: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onFormSubmit = () => {
    axios
      .post("https://find-pet-app.herokuapp.com/auth", {
        login: this.state.login,
        password: this.state.password
      })
      .then(response => {
        this.setState({
          token: response.data.Authorization,
          id: response.data.id
        });
        localStorage.setItem("token", response.data.Authorization);
        localStorage.setItem("id", response.data.id);
        Alert.success("Zalogowano", {
          position: "bottom-left",
          effect: "slide",
          timeout: 5000
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(error => {
        Alert.error("Niepoprawne dane", {
          position: "bottom-left",
          effect: "slide",
          timeout: 5000
        });
      });
  };

  render() {
    return (
      <>
        <Alert show={this.state.showModal}/>
        <Form.Group controlId="formBasicLogin">
          <Form.Label>Nazwa użytkownika</Form.Label>
          <Form.Control
            type="text"
            placeholder="Podaj swój login"
            onChange={this.onLoginChange}
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
        <Button
          className="float-right"
          variant="primary"
          onClick={this.onFormSubmit}
        >
          SUBMIT
        </Button>
      </>
    );
  }
}

export default LoginForm;
