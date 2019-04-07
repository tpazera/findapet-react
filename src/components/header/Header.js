import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Logo from '../logo/Logo';
import "./header.scss";
import HeaderMenu from '../headerMenu/HeaderMenu';

const Header = () => {
    return (
        <Container fluid id="header">
            <Navbar expand="md">
                <Navbar.Brand href="/">
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menuHeader" />
                <Navbar.Collapse id="menuHeader">
                    <HeaderMenu />
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;