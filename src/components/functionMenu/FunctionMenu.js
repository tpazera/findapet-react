import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./functionMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faInfoCircle,
  faBullhorn,
  faPlus,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";


library.add(faBook, faInfoCircle, faBullhorn, faPlus, faExclamationCircle);
class FunctionMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleView(e) {
    var x = document.getElementById("pageContent");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

  render() {
    const adm = localStorage.getItem("admin");

    return (
      <div id="sidebarMenu">
        <p className='label'>Funkcje</p>
        <Link onClick={this.toggleView} to="/">
          <FontAwesomeIcon icon="bullhorn" />
          <p>Ogłoszenia</p>
        </Link> 
        {adm == 1 ? (
          <>
            <Link onClick={this.toggleView} to="/zgloszone">
              <FontAwesomeIcon icon="exclamation-circle" />
              <p>Zgłoszenia</p>
            </Link>
          </>
        ) : (<></>)}
        {localStorage.getItem("token") ? (
          <>
          <Link onClick={this.toggleView} to="/twoje-ogloszenia">
            <FontAwesomeIcon icon="book" />
            <p>Twoje ogłoszenia</p>
          </Link>
          <Link onClick={this.toggleView} to="/dodaj-ogloszenie">
            <FontAwesomeIcon icon="plus" />
            <p>Dodaj ogłoszenie</p>
          </Link>
          </>
        ) : ( <><p className='info'>Zaloguj się aby dodać ogłoszenie</p></> )}

        
        {/* <Link to="/o-nas">
          <FontAwesomeIcon icon="info-circle" />
          <p>O nas</p>
        </Link> */}
      </div>

    );
  }
}

export default FunctionMenu;
