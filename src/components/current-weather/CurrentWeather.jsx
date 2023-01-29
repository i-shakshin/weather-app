import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { forecastDays } from "../../utils";

const CurrentWeather = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Card sx={{ maxWidth: 450 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h3">{data.name}</Typography>
            <Typography variant="span">
              {forecastDays([data.dt * 1000])}
            </Typography>
            <Typography variant="span">
              {data.weather[0].description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: "150px" }}
            image={`icons/${data.weather[0].icon}.png`}
            alt={`Current weather is ${data.weather[0].description}`}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h3">{Math.round(data.main.temp)}°C</Typography>
          </CardContent>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6">Details:</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="span">Feels like:</Typography>
                <Typography variant="span">Wind:</Typography>
                <Typography variant="span">Humidity:</Typography>
                <Typography variant="span">Pressure:</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="span">
                  {Math.round(data.main.feels_like)} °C
                </Typography>
                <Typography variant="span">{data.wind.speed} m/s</Typography>
                <Typography variant="span">{data.main.humidity}%</Typography>
                <Typography variant="span">{data.main.pressure} hPa</Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
};

export default CurrentWeather;
