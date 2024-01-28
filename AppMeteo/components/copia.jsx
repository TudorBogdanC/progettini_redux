import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';




const OtherCity = () => {
    const [weatherDataRoma, setWeatherDataRoma] = useState([]);
    const [weatherDataFirenze, setWeatherDataFirenze] = useState([]);
    const [weatherDataNapoli, setWeatherDataNapoli] = useState([]);

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=roma,it&units=metric&APPID=ac0060fd2423aad170e29ae93ab1600d&lang=it")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setWeatherDataRoma(data);
            })
    }, [])

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=firenze,it&units=metric&APPID=ac0060fd2423aad170e29ae93ab1600d&lang=it")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setWeatherDataFirenze(data);
            })
    }, [])

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=napoli,it&units=metric&APPID=ac0060fd2423aad170e29ae93ab1600d&lang=it")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setWeatherDataNapoli(data);
            })
    }, [])


    return (
    <>
        <Container>
            {weatherDataRoma != null && weatherDataFirenze != null && weatherDataNapoli != null && ( 
            <Row>
                <Col>
                    <div>
                        <h4>{weatherDataRoma?.name}</h4>
                        <h1>{weatherDataRoma?.main?.temp.toFixed()}° C</h1>
                        <img src={`https://openweathermap.org/img/wn/${weatherDataRoma?.weather[0]?.icon}@2x.png`} alt="" height={80} />
                    </div>
                </Col>
                <Col>
                    <div>
                        <h4>{weatherDataFirenze?.name}</h4>
                        <h1>{weatherDataFirenze?.main?.temp.toFixed()}° C</h1>
                        <img src={`https://openweathermap.org/img/wn/${weatherDataFirenze?.weather[0]?.icon}@2x.png`} alt="" height={80} />
                     
                    </div>
                </Col>
                <Col>
                    <div>
                        <h4>{weatherDataNapoli?.name}</h4>
                        <h1>{weatherDataNapoli?.main?.temp.toFixed()}° C</h1>
                        <img src={`https://openweathermap.org/img/wn/${weatherDataNapoli?.weather[0]?.icon}@2x.png`} alt="" height={80} />
                    </div>
                </Col>
            </Row>)}
        </Container>

</>
    )
}


export default OtherCity