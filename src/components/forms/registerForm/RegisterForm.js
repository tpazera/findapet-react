import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./registerForm.scss";
import { FormErrors } from "../../formErrors/FormError";

class RegisterForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    phone: "",
    desc: "",
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
    phoneValid: true,
    descValid: true,
    formValid: false,
    formErrors: {username: '', email: '', password: '', phone: '', desc: ''},
  };


  onFormSubmit = () => {

    if (this.state.formValid) {
      let dto = {
        "email": this.state.email,
        "id": 0,
        "nick": this.state.username,
        "number": this.state.phone,
        "other": this.state.desc.replace(/<[^>]*>?/gm, ''),
        "password": this.state.password
      };
      axios.post('https://find-pet-app.herokuapp.com/rest/user', {
        userDTO: JSON.parse(dto)
      }, {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*"
          }
      })
      .then((response) => {
        Alert.success("Zarejestrowano", {
          position: "bottom-left",
          effect: "slide",
          timeout: 3000
        });
        setTimeout(function() {
          window.location.reload();
        }, 3000)
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    
  };

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let usernameValid = this.state.usernameValid;
    let descValid = this.state.descValid;
    let phoneValid = this.state.phoneValid;
  
    switch(fieldName) {
      case 'email':
        if(!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          fieldValidationErrors.email = 'Email jest niepoprawny';
          emailValid = false;
          break;
        };
        emailValid = true;
        fieldValidationErrors.email = '';
        break;
      case 'password':
        if(value.length <= 6) {
          fieldValidationErrors.password = 'Hasło jest za krótkie';
          passwordValid = false;
          break;
        };
        passwordValid = true;
        fieldValidationErrors.password = '';
        break;
      case 'username':
        if(value.length >= 15) {
          fieldValidationErrors.username = 'Nazwa jest za długa';
          usernameValid = false;
          break;
        } else if (value.length <= 3) {
          fieldValidationErrors.username = 'Nazwa jest za krótka';
          usernameValid = false;
          break;
        } else if (!value.match(/^([a-zA-Z0-9_-]+)$/)) {
          fieldValidationErrors.username = 'Nazwa może składać się tylko z liter, \'_\', \'-\' i cyfr';
          usernameValid = false;
            break;
          }
          usernameValid = true;
        fieldValidationErrors.username = '';
        break;
      case 'phone':
        if(!value.match(/^[0-9\+]{8,13}$/)) {
          fieldValidationErrors.phone = 'Błędny numer telefonu';
          phoneValid = false;
            break;
          }
        phoneValid = true;
        fieldValidationErrors.phone = '';
        break;
      case 'desc':
          if (value.length >= 300) {
            fieldValidationErrors.desc = 'Max 300 znaków';
            descValid = false;
            break;
          }
          descValid = true;
          fieldValidationErrors.desc = "";
          break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    usernameValid: usernameValid,
                    descValid: descValid,
                    phoneValid: phoneValid,
                  }, this.validateForm);
  }
  
  validateForm() {
    console.log(this.state.emailValid + " " + this.state.passwordValid + " " + this.state.descValid + " " + this.state.phoneValid+ " " +  this.state.usernameValid);
    this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.descValid && this.state.phoneValid && this.state.usernameValid});
  }
  

  render() {
    return (
      <>
        <Alert />
        <Form.Group controlId="formUsername">
          <Form.Label>Nazwa użytkownika*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Podaj nazwę użytkownika"
            name="username"
            value={this.state.username}
            onChange={(event) => this.handleUserInput(event)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Hasło*</Form.Label>
          <Form.Control
            type="password"
            placeholder="Podaj swoje hasło"
            name="password"
            value={this.state.password}
            onChange={(event) => this.handleUserInput(event)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Podaj swój adres email"
            name="email"
            value={this.state.email}
            onChange={(event) => this.handleUserInput(event)}
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Numer telefonu</Form.Label>
          <Form.Control
            type="text"
            placeholder="Podaj swój numer telefonu"
            value={this.state.phone}
            name="phone"
            onChange={(event) => this.handleUserInput(event)}
          />
        </Form.Group>
        <Form.Group controlId="formDesc">
          <Form.Label>Opis</Form.Label>
          <Form.Control
            type="text"
            placeholder="Krótko o Tobie, dodatkowy kontakt"
            value={this.state.desc}
            name="desc"
            onChange={(event) => this.handleUserInput(event)}
          />
        </Form.Group>

        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <Button
          className="float-right"
          variant="primary"
          onClick={this.onFormSubmit}
          disabled={!this.state.formValid}
        >
          Zarejestruj się
        </Button>
      </>
    );
  }
}

export default RegisterForm;
