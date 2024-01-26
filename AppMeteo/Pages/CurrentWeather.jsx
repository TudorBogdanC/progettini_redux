{/* Qui grazie al uso dei hook useDispatch e useSelector, i dati che vengono scaricati dall'API attraverso la fetch questo
comporteranno l'aggiornamento dinamico del componente attraverso lo slice reducer impostato precedentemente. Lo useDispatch
ha il compito di far triggerare le azioni impostate dentro il reducer e quindi aggiornare il componente con i dati del payload.

Lo useSelector ci consente di accedere ai dati che abbiamo impostato nello store e quindi per estenso i dati presenti nel reducer, quelli
dove abbiamo specificato che le informazioni proveniente dall'API vadano salvate. Il componente quindi si renderizzà a video
ogni volta che questi dati cambieranno 

Nelle fetch dei dati qui sotto, facciamo il dispatch delle azioni che servono ad aggiornare il componente con i nuovi dati presi.
Questi dati vengono presi grazie alle funzioni dei reducers e che vengono gestite al click del bottone del pulsante cerca.
Insieme fanno una ricerca su url diversi ma che condividono il parametro dinamico su cui devono operare la ricerca.

*/}




import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData, setForecastData } from '../reducers/weatherSlice';


function CurrentWeather() {

  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const { data: weather, forecast } = useSelector((state) => state.weather);


  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=ac0060fd2423aad170e29ae93ab1600d&lang=it`);
      const data = await response.json();
      dispatch(setWeatherData(data));
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchForecast = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=ac0060fd2423aad170e29ae93ab1600d&lang=it&units=metric`);
      const data = await response.json();
      dispatch(setForecastData(data));
      console.log(data);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  const handleSearch = () => {
    if (location.length > 3) {
      fetchWeather();
      fetchForecast();
    }
  };

  return (
    <>
        <Navbar sticky="top" expand="lg" style={{backgroundColor:"#4D5061"}}>
      <Container fluid>
        <Navbar.Brand style={{color:"#48A9A6"}} href="#">Meteo</Navbar.Brand>
          <Form inline>
                <Row className="d-flex align-items-center g-2">
                  <Col xs="9">
                    <Form.Control
                      value={location}
                      onChange={(e) => { setLocation(e.target.value) }}
                      placeholder='Inserisci la tua città'
                      type="text"
                    />
                  </Col>
                  <Col xs="3">
                  <Button variant="dark" size="sm" onClick={() => handleSearch()}>Cerca</Button>
                  </Col>
                </Row>
              </Form>
      </Container>
    </Navbar>
      {weather != null && forecast != null && (
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
            <Col className="my-5 mx-3 d-flex flex-column">
            <small>Previsioni a breve termine</small>
            <br/>
              <div className="bottom">
                <div className="forecast">
                  <div className="dayOne">
                    <p className="small">Oggi</p>
                    <small>
                      <div><img src={`https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`} alt="" height={60} /></div>
                    </small>
                  </div>
                  <div className="dayTwo">
                    <p className="small">Domani</p>
                    <small>
                      <div><img src={`https://openweathermap.org/img/wn/${forecast.list[8].weather[0].icon}@2x.png`} alt="" height={60} /></div>
                    </small>
                  </div>
                  <div className="dayThree">
                    <p className="small">Dopodomani</p>
                    <div><img src={`https://openweathermap.org/img/wn/${forecast.list[16].weather[0].icon}@2x.png`} alt="" height={60} /></div>
                  </div>
                </div>
              </div>
            </Col>
          </Container>
        )
      }
    </>
  );
}

export default CurrentWeather;
