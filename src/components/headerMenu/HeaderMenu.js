import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

import "./headerMenu.scss";
import LoginForm from "../forms/loginForm/LoginForm";
import RegisterForm from "../forms/registerForm/RegisterForm";
import Modal from "../modal/Modal";
import Alert from "react-s-alert";

library.add(faUser, faUsers);

class HeaderMenu extends Component {
  state = {
    isLoginOpen: false,
    isRegisterOpen: false,
    closeModal: false
  };

  toggleModal = type =>
    this.setState(prevState => ({ [type]: !prevState[type] }));
    
  componentDidUpdate() {
    console.log(this.state.closeModal)
    if(this.state.closeModal == true) {
      Alert.success('Zalogowano', {
        position: "bottom-left",
        effect: "slide",
        timeout: 5000
      });
    }
  }

  closeModal() {
    this.setState({
      isLoginOpen: false,
      closeModal: true
    })
    console.log('test');
    // Alert.success('Zalogowano', {
    //   position: "bottom-left",
    //   effect: "slide",
    //   timeout: 5000
    // });
  }


  render() {
    const { isLoginOpen, isRegisterOpen } = this.state;
    return (
      <>
        <Modal
          toggleModal={this.toggleModal}
          show={isLoginOpen}
          type="isLoginOpen"
          title="Zaloguj się"
        >
          <LoginForm 
            closeModal={() => this.closeModal()}
          />
        </Modal>
        <Modal
          toggleModal={this.toggleModal}
          show={isRegisterOpen}
          type="isRegisterOpen"
          title="Zarejestruj się"
        >
          <RegisterForm 
          
          />
        </Modal>
        <Nav className="ml-auto" id="headerMenu">
          <Nav.Link onClick={() => this.toggleModal("isRegisterOpen")}>
            Rejestracja
            <FontAwesomeIcon icon="users" />
          </Nav.Link>
          <Nav.Link onClick={() => this.toggleModal("isLoginOpen")}>
            Logowanie
            <FontAwesomeIcon icon="user" />
          </Nav.Link>
        </Nav>
      </>
    );
  }
}

export default HeaderMenu;
