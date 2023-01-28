import "./Forecast.css";

const Forecast = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const groupHoursByDate = data.list.reduce(function (acc, forecastHour) {
    acc[forecastHour.dt_txt.split(" ")[0]] =
      acc[forecastHour.dt_txt.split(" ")[0]] || [];
    acc[forecastHour.dt_txt.split(" ")[0]].push(forecastHour);
    return acc;
  }, Object.create(null));

  const forecastDates = Object.keys(groupHoursByDate).slice(1, -1);

  const forecastDays = forecastDates.map((forecastDate) => {
    const d = new Date(forecastDate);
    const day = daysOfWeek[d.getDay()];
    return day;
  });

  console.log("test", groupHoursByDate["2023-01-29"]);

  return (
    <div className="forecast">
      <h2 className="forecast-title">4 Day / 3 Hour Forecast</h2>
      <div className="card-container">
        {forecastDays.map((forecastDay, index) => (
          <div className="day-forecast" key={index}>
            <h2>{forecastDay}</h2>
            {groupHoursByDate[forecastDates[index]].map(
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
