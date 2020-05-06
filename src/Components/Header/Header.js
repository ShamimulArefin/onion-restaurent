import React from 'react';
import './Header.css';
import logo from '../../images/Logo/logo2.png'
import { Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="white">
                <Navbar.Brand href="/" className="ml-5"><img className="logo" src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="header-item mr-5">
                    <Nav.Link href="/cart" className="Butn"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                    <Nav.Link href="/login" className="logBtn Butn">Login</Nav.Link>
                    <Nav.Link href="/signup" className="main-button Butn"><span>Sign up</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;