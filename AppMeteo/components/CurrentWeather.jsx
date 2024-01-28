import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import OtherCity from './OtherCity';




const CurrentWeather = ({ weather }) => {
    return (
        <>
            <Container>
                <Row className="upperSection flex-sm-row flex-md-row flex-lg-row">
                    <Col xs={8} sm={6} lg={6} md={6} xl={6}>
                        <div className="top">
                            <div className="currentWeather">
                                <div className="location">
                                    <p>{weather?.name}</p>
                                </div>
                                <div className="temp">
                                    <h1>{weather?.main?.temp.toFixed()}° C</h1>
                                </div>
                            </div>
                            <div className="description">
                                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} alt="" height={120} />
                                <h5>{weather?.weather[0]?.description}</h5>
                            </div>
                        </div>
                    </Col>
                    <Col  xs={4} sm={6} lg={6} md={6} xl={6} className="fixedCities">
                        <OtherCity/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CurrentWeather;