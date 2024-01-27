import { Col } from "react-bootstrap"



const ForecastWeather = ({forecast}) => {
    return (
        <>
           <Col className="my-5 mx-3 d-flex flex-column">
            <small className=" my-4">Previsioni a breve termine</small>
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
        </>
    )
}

export default ForecastWeather;