import React from 'react';

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">ABHY 567</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Stats</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        );
    }
}