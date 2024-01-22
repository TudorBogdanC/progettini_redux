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
import { Button } from 'react-bootstrap';
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
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(e) => { setLocation(e.target.value) }}
          placeholder='Enter location'
          type="text"
        />
        <Button variant="transparent" onClick={() => handleSearch()}>🔎</Button>
      </div>
      {weather != null && forecast != null && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{weather?.name}</p>
            </div>
            <div className="temp">
              <h1>{weather?.main?.temp.toFixed()}° C</h1>
            </div>
            <div className="description">
              <p>{weather?.weather[0]?.description}</p>
            </div>
          </div>
          <div className="middle">
            <div className="forecast">
              <div className="dayOne">
                <p className="small">Oggi</p>
                <small>
                  <div><img src= {`https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`} alt="" height={60}/></div>
                </small>
              </div>
              <div className="dayTwo">
                <p className="small">Domani</p>
                <small>
                <div><img src= {`https://openweathermap.org/img/wn/${forecast.list[8].weather[0].icon}@2x.png`} alt="" height={60}/></div>
                </small>
              </div>
              <div className="dayThree">
                <p className="small">Dopodomani</p>
                <div><img src= {`https://openweathermap.org/img/wn/${forecast.list[16].weather[0].icon}@2x.png`} alt="" height={60}/></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="feel">
              <p className="bold"> {weather?.main?.feels_like.toFixed()}° C</p>
              <small>Rugiada</small>
            </div>
            <div className="humidity">
              <p className="bold">{weather?.main?.humidity} %</p>
              <small>Umidità</small>
            </div>
            <div className="wind">
              <p className="bold">{weather?.wind?.speed.toFixed()} km/h</p>
              <small>Vento</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrentWeather;
