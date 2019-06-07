import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Logo from '../logo/Logo';
import "./header.scss";
import AccountMenu from '../accountMenu/AccountMenu';

const Header = () => {
    return (
        <Container fluid id="header">
            <Navbar expand="md">
                <Navbar.Brand href="/">
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menuHeader" />
                <Navbar.Collapse id="menuHeader">
                    <AccountMenu />
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;