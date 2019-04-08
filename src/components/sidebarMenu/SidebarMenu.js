import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebarMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faInfoCircle, faBullhorn } from '@fortawesome/free-solid-svg-icons'

library.add(faBook, faInfoCircle, faBullhorn);
class SidebarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div id="sidebarMenu">
                <Link to="/">
                    <FontAwesomeIcon icon="bullhorn" />
                    <p>Ogłoszenia</p>
                </Link>
                <Link to="/twoje-ogloszenia">
                    <FontAwesomeIcon icon="book" />
                    <p>Twoje ogłoszenia</p>
                </Link>
                <Link to="/o-nas">
                    <FontAwesomeIcon icon="info-circle" />
                    <p>O nas</p>
                </Link>
            </div>
        );
    }
}

export default SidebarMenu;