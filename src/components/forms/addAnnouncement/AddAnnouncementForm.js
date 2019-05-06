import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./addAnnouncementForm.scss";

import Modal from "../../modal/Modal";

class AddAnnouncementForm extends Component {
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
        <div className="container">
          <div className="row">
            <div className="col-6">a</div>
            <div className="col-6">b</div>
            <div className="col-6">c</div>
            <div className="col-6">d</div>
            <div className="col-6">e</div>
            <div className="col-6">f</div>
          </div>
        </div>
      </>
    );
  }
}

export default AddAnnouncementForm;
