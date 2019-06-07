import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faUsers, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./accountMenu.scss";
import LoginForm from "../forms/loginForm/LoginForm";
import RegisterForm from "../forms/registerForm/RegisterForm";
import Modal from "../modal/Modal";
import Alert from "react-s-alert";

library.add(faUser, faUsers, faSignOutAlt);

class AccountMenu extends Component {
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
        <p className='label'>Konto</p>
        <Nav className="ml-auto" id="headerMenu">

          {localStorage.getItem("token") ? (
            <>
              <div className='accountInfo'>
                <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="img-circle" />
                <p>Tomek Pazera</p>
              </div>
              
              <Nav.Link onClick={() => this.logout()}>
                <FontAwesomeIcon icon="sign-out-alt" />
                <p>Wyloguj</p>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link onClick={() => this.toggleModal("isRegisterOpen")}>
                <FontAwesomeIcon icon="users" />
                <p>Rejestracja</p>
              </Nav.Link>
              <Nav.Link onClick={() => this.toggleModal("isLoginOpen")}>
                <FontAwesomeIcon icon="user" />
                <p>Logowanie</p>
              </Nav.Link>
            </>
          )}
        </Nav>
      </>
    );
  }
}

export default AccountMenu;
