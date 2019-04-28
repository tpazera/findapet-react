import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./headerMenu.scss";
import LoginForm from "../forms/loginForm/LoginForm";
import Modal from "../modal/Modal";

library.add(faUser);

class HeaderMenu extends Component {
  state = {
    isLoginOpen: false,
    isRegisterOpen: false
  };

  toggleModal = type =>
    this.setState(prevState => ({ [type]: !prevState[type] }));

  render() {
    const { isLoginOpen, isRegisterOpen } = this.state;
    return (
      <>
        <Modal
          toggleModal={this.toggleModal}
          show={isLoginOpen}
          type="isLoginOpen"
        >
          <LoginForm />
        </Modal>
        <Nav className="ml-auto" id="headerMenu">
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
