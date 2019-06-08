import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Logo from '../logo/Logo';
import "./contentHeader.scss";
import AccountMenu from '../accountMenu/AccountMenu';

const Header = (props) => {
    return (
        <div id="contentHeader">
            {props.children}
        </div>
    );
}

export default Header;