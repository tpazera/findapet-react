import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import "./otherMenu.scss";
import LoginForm from "../forms/loginForm/LoginForm";
import RegisterForm from "../forms/registerForm/RegisterForm";
import Modal from "../modal/Modal";
import Alert from "react-s-alert";

library.add(faQuestionCircle, faPhoneVolume);

class OtherMenu extends Component {

  render() {
    return (
      <>
        <p className='label'>Pomoc</p>
        <Nav className="ml-auto" id="headerMenu">
            <>
              <Nav.Link>
                <FontAwesomeIcon icon="question-circle" />
                <p>FAQ</p>
              </Nav.Link>
              <Nav.Link>
                <FontAwesomeIcon icon="phone-volume" />
                <p>O nas</p>
              </Nav.Link>
            </>
        </Nav>
      </>
    );
  }
}

export default OtherMenu;
