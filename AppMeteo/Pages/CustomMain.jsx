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
import { Container, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData, setForecastData } from '../reducers/weatherSlice';
import CustomNavbar from '../components/CustomNavbar';
import CurrentWeather from '../components/CurrentWeather';
import ForecastWeather from '../components/ForecastWeather';
import WeatherChart from '../components/WeatherChart';



function CustomMain() {

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
      <CustomNavbar location={location} setLocation={setLocation} handleSearch={handleSearch} />
      {weather != null && forecast != null  && (
          <Container className="app">
            <Row className="upperSection">
              <CurrentWeather weather={weather}/>
            </Row>
            <Row>
              <Col sm={6} md={6} lg={4}><ForecastWeather forecast={forecast}/></Col>
              <Col sm={6} md={6} lg={8} className="chartTemp"><WeatherChart forecast={forecast}/></Col>
            </Row>
          </Container>
          
        )
      }
    </>
  );
}

export default CustomMain;
