import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faInfoCircle,
  faBullhorn,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo/Logo";
import AccountMenu from "../accountMenu/AccountMenu";
import FunctionMenu from "../functionMenu/FunctionMenu";
import OtherMenu from "../otherMenu/OtherMenu";

library.add(faBook, faInfoCircle, faBullhorn, faPlus);
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="sidebar">
        <Logo />
        <hr />
        <FunctionMenu />
        <br />
        <AccountMenu />
        <br />
        <OtherMenu />
      </div>
    );
  }
}

export default Sidebar;
