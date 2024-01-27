import { Col, Carousel } from "react-bootstrap";

const ForecastWeather = ({ forecast }) => {
  return (
    <Col className="my-5 mx-4">
      <Carousel>
        <Carousel.Item>
          <div className="dayOne">
            <p className="small">Oggi</p>
            <small>
              <img
                src={`https://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`}
                alt=""
                height={100}
              />
            </small>
            <p>Min / Max</p>
            <p>{forecast?.list[0].main.temp_min.toFixed()}° C / {forecast?.list[0].main.temp_max.toFixed()}° C </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="dayTwo">
            <p className="small">Domani</p>
            <small>
              <img
                src={`https://openweathermap.org/img/wn/${forecast.list[8].weather[0].icon}@2x.png`}
                alt=""
                height={100}
              />
            </small>
            <p>Min / Max</p>
            <p>{forecast?.list[8].main.temp_min.toFixed()}° C / {forecast?.list[8].main.temp_max.toFixed()}° C </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="dayThree">
            <p className="small">Dopodomani</p>
            <small>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.list[16].weather[0].icon}@2x.png`}
              alt=""
              height={100}
            />
            </small>
            <p>Min / Max</p>
            <p>{forecast?.list[16].main.temp_min.toFixed()}° C / {forecast?.list[16].main.temp_max.toFixed()}° C </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </Col>
  );
};

export default ForecastWeather;
