export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const groupHoursByDate = (data) =>
  data.list.reduce(function (acc, forecastForCurrentHour) {
    const forecastDate = forecastForCurrentHour.dt_txt.split(" ")[0];
    acc[forecastDate] = acc[forecastDate] || [];
    acc[forecastDate].push(forecastForCurrentHour);
    return acc;
  }, {});

export const forecastDates = (data) =>
  Object.keys(groupHoursByDate(data)).slice(1, -1);

export const forecastDays = (dates) =>
  dates.map((date) => {
    const dayDate = new Date(date);
    const day = daysOfWeek[dayDate.getDay()];
    return day;
  });
