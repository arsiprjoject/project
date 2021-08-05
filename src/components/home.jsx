import React from 'react';
import Slider from './slider';
import GoogleMaps from './googleMaps';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './home.css';


export default class Home extends React.Component {

    render() {
        return (
            <Row>
              <Col sm={4} className ="pad-r-0"><GoogleMaps/></Col>
              <Col sm={8} className ="pad-l-0"><Slider/></Col>
            </Row>
        );
    }
}