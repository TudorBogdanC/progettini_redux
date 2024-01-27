import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const CurrentWeather = ({ weather }) => {
    return (
        <>
            <Container>
                <Row className="upperSection">
                    <Col xs={8} lg={8}>
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
                                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} alt="" height={60} />
                                <p>{weather?.weather[0]?.description}</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} lg={4}>
                        <div className="middle">
                            <div className="feel">
                                <small>Rugiada</small>
                                <p className="bold"> {weather?.main?.feels_like.toFixed()}° C</p>
                            </div>
                            <div className="humidity">
                                <small>Umidità</small>
                                <p className="bold">{weather?.main?.humidity} %</p>
                            </div>
                            <div className="wind">
                                <small>Vento</small>
                                <p className="bold">{weather?.wind?.speed.toFixed()} km/h</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CurrentWeather;