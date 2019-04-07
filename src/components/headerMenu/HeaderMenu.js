import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./headerMenu.scss";

library.add(faUser);

const HeaderMenu = () => {
    return (
        <Nav className="ml-auto" id="headerMenu">
            <Nav.Link>
                Logowanie/rejestracja
                <FontAwesomeIcon icon="user" />
            </Nav.Link>
        </Nav>
    );
}

export default HeaderMenu;