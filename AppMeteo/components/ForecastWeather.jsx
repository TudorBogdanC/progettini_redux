import { Col, Carousel } from "react-bootstrap";

const ForecastWeather = ({ forecast }) => {
  return (
    <Col className="my-5 mx-4">
      <Carousel>
        <Carousel.Item>
          <div className="dayOne">
            <p className="smallTitle">Oggi</p>
            <small>
              <img
                src={`https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`}
                alt=""
                height={100}
              />
            </small>
            <h4>Min / Max</h4>
            <h4>{forecast?.list[0].main.temp_min.toFixed()}° C / {forecast?.list[0].main.temp_max.toFixed()}° C </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="dayTwo">
            <p className="smallTitle">Domani</p>
            <small>
              <img
                src={`https://openweathermap.org/img/wn/${forecast.list[8].weather[0].icon}@2x.png`}
                alt=""
                height={100}
              />
            </small>
            <h4>Min / Max</h4>
            <h4>{forecast?.list[8].main.temp_min.toFixed()}° C / {forecast?.list[8].main.temp_max.toFixed()}° C </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="dayThree">
            <p className="smallTitle">Dopodomani</p>
            <small>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.list[16].weather[0].icon}@2x.png`}
              alt=""
              height={100}
            />
            </small>
            <h4>Min / Max</h4>
            <h4>{forecast?.list[16].main.temp_min.toFixed()}° C / {forecast?.list[16].main.temp_max.toFixed()}° C </h4>
          </div>
        </Carousel.Item>
      </Carousel>
    </Col>
  );
};

export default ForecastWeather;
