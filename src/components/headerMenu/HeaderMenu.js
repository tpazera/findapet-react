import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

import "./headerMenu.scss";
import LoginForm from "../forms/loginForm/LoginForm";
import RegisterForm from "../forms/registerForm/RegisterForm";
import Modal from "../modal/Modal";

library.add(faUser, faUsers);

class HeaderMenu extends Component {
  state = {
    isLoginOpen: false,
    isRegisterOpen: false
  };

  toggleModal = type =>
    this.setState(prevState => ({ [type]: !prevState[type] }));

  logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

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
          <LoginForm />
        </Modal>
        <Modal
          toggleModal={this.toggleModal}
          show={isRegisterOpen}
          type="isRegisterOpen"
          title="Zarejestruj się"
        >
          <RegisterForm />
        </Modal>

        <Nav className="ml-auto" id="headerMenu">
          {localStorage.getItem("token") ? (
            <>
              <Nav.Link onClick={() => this.logout()}>
                Logout
                <FontAwesomeIcon icon="users" />
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link onClick={() => this.toggleModal("isRegisterOpen")}>
                Rejestracja
                <FontAwesomeIcon icon="users" />
              </Nav.Link>
              <Nav.Link onClick={() => this.toggleModal("isLoginOpen")}>
                Logowanie
                <FontAwesomeIcon icon="user" />
                {/* pojecia nie mam czemu sa inne wielkosci ikonek */}
              </Nav.Link>
            </>
          )}
        </Nav>
      </>
    );
  }
}

export default HeaderMenu;
