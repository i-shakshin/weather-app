import { groupHoursByDate, forecastDates, forecastDays } from "../../utils";
import "./Forecast.css";

const Forecast = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="forecast">
      <h2 className="forecast-title">
        {forecastDates(data).length} Day / 3 Hour Forecast
      </h2>
      <div className="card-container">
        {forecastDays(forecastDates(data)).map((forecastDay, index) => (
          <div className="day-forecast" key={index}>
            <h2>{forecastDay}</h2>
            {groupHoursByDate(data)[forecastDates(data)[index]].map(
              (currentDay, indexHours) => {
                return (
                  <div className="hour-forecast" key={indexHours}>
                    <div className="top-forecast">
                      <p>{currentDay.dt_txt.split(" ")[1]}</p>
                      <img
                        alt="weather"
                        className="forecast-icon"
                        src={`icons/${currentDay.weather[0].icon}.png`}
                      />
                    </div>
                    <div className="bottom-forecast">
                      <span className="temp-forecast">
                        {Math.round(currentDay.main.temp)}°C
                      </span>
                      <span className="description-forecast">
                        {currentDay.weather[0].description}
                      </span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Forecast;
