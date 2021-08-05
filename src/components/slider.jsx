
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import './home.css';
import Badge from 'react-bootstrap/Badge'

export const data = [
    {
        "date_time": "7/22/2021 6:00",
        "project": "ABHY-567",
        "district": "Chikkaballapura",
        "taluk": "Chikballapur",
        "gpName": "Harobande",
        "waterLevel": 193,
        "pressure": 76.1,
        "temp": 27.7,
        "bPressure": 906
    },
    {
        "date_time": "7/22/2021 12:00",
        "project": "ABHY-567",
        "district": "Chikkaballapura",
        "taluk": "Chikballapur",
        "gpName": "Harobande",
        "waterLevel": 193,
        "pressure": 76.2,
        "temp": 27.6,
        "bPressure": 903
    },
    {
        "date_time": "7/22/2021 18:00",
        "project": "ABHY-567",
        "district": "Chikkaballapura",
        "taluk": "Chikballapur",
        "gpName": "Harobande",
        "waterLevel": 193,
        "pressure": 76.2,
        "temp": 27.6,
        "bPressure": 904
    },
    {
        "date_time": "7/22/2021 0:00",
        "project": "ABHY-567",
        "district": "Chikkaballapura",
        "taluk": "Chikballapur",
        "gpName": "Harobande",
        "waterLevel": 193,
        "pressure": 76.3,
        "temp": 27.6,
        "bPressure": 903
    },
    {
        "date_time": "7/23/2021 6:00",
        "project": "ABHY-567",
        "district": "Chikkaballapura",
        "taluk": "Chikballapur",
        "gpName": "Harobande",
        "waterLevel": 193,
        "pressure": 76.4,
        "temp": 27.7,
        "bPressure": 904
    },
    {
        "date_time": "7/23/2021 12:00",
        "project": "ABHY-567",
        "district": "Chikkaballapura",
        "taluk": "Chikballapur",
        "gpName": "Harobande",
        "waterLevel": 193,
        "pressure": 76.4,
        "temp": 27.6,
        "bPressure": 903
    },
    {
        "date_time": "7/23/2021 18:00",
        "project": "ABHY-567",
        "district": "Chikkaballapura",
        "taluk": "Chikballapur",
        "gpName": "Harobande",
        "waterLevel": 193,
        "pressure": 76.5,
        "temp": 27.5,
        "bPressure": 904
    },
    {
        "date_time": "7/23/2021 0:00",
        "project": "ABHY-567",
        "district": "Chikkaballapura",
        "taluk": "Chikballapur",
        "gpName": "Harobande",
        "waterLevel": 193,
        "pressure": 76.6,
        "temp": 27.6,
        "bPressure": 903
    },
    {
        "date_time": "7/24/2021 6:00",
        "project": "ABHY-567",
        "district": "Chikkaballapura",
        "taluk": "Chikballapur",
        "gpName": "Harobande",
        "waterLevel": 193,
        "pressure": 76.6,
        "temp": 27.6,
        "bPressure": 905
    }
];
export default class Slider extends React.Component {

    render() {
        return (
            <Carousel variant="dark" style={{ background: 'darkgray' }}>
                {data.map(item => (
                    <Carousel.Item>
                        <div className="card-container">
                            <Card border="info" >
                                <Card.Header> District: <b> Chikkaballapura &nbsp;&nbsp;&nbsp;</b> Taluk: <b> Chikkaballapura &nbsp;&nbsp;&nbsp;</b>  GP_Name: <b> Harobande </b></Card.Header>
                                <Card.Body>
                                    <Card.Title>Date and Time : <b>{item.date_time}</b></Card.Title>
                                    <Card.Text>
                                        <p>Water_Level (M) :  <Badge bg="info">{item.waterLevel}</Badge></p>
                                        <p>Pressure(MH2O)  :  <Badge bg="info">{item.pressure}</Badge></p>
                                        <p>Temperature (C) : <Badge bg="info">{item.temp}</Badge></p>
                                        <p>Barometric Pressure (PSI) : <Badge bg="info">{item.bPressure}</Badge></p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                    </Carousel.Item>
                ))}

            </Carousel>
        );
    }
}