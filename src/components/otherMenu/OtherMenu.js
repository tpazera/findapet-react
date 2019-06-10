import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./otherMenu.scss";
import LoginForm from "../forms/loginForm/LoginForm";
import RegisterForm from "../forms/registerForm/RegisterForm";
import Modal from "../modal/Modal";
import Alert from "react-s-alert";

library.add(faQuestionCircle, faPhoneVolume);

class OtherMenu extends Component {

  toggleView(e) {
    var x = document.getElementById("pageContent");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

  render() {
    return (
      <>
        <p className='label'>Pomoc</p>
        <Nav className="ml-auto" id="headerMenu">
            <>
              <Link onClick={this.toggleView} to="/faq">
                <FontAwesomeIcon icon="question-circle" />
                <p>FAQ</p>
              </Link>
              <Link onClick={this.toggleView} to="/o-nas">
                <FontAwesomeIcon icon="phone-volume" />
                <p>O nas</p>
              </Link>
            </>
        </Nav>
      </>
    );
  }
}

export default OtherMenu;
