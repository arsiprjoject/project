import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <Container>
      <Row>
        <Col><h1>DWLR</h1></Col>
      </Row>
      <Row>
        <Col><Header/></Col>
      </Row>
      <Row>
        <Col><Home/></Col>
      </Row>
    </Container>
  );
}

export default App;
