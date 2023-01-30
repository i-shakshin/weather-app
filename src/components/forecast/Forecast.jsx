import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { groupHoursByDate, forecastDates, forecastDays } from "../../utils";

const Forecast = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 2,
        }}
      >
        <Typography variant="h2">
          {forecastDates(data).length} Day / 3 Hour Forecast
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {forecastDays(forecastDates(data)).map((forecastDay, index) => (
            <Grid key={index} item xs={12 / forecastDates(data).length}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#D9DDDC",
                }}
              >
                <Typography variant="h3">{forecastDay}</Typography>
                {groupHoursByDate(data)[forecastDates(data)[index]].map(
                  (currentDay, indexHours) => {
                    const currentDayDate = new Date(currentDay.dt_txt);
                    const forecastHour = currentDayDate.toLocaleString(
                      "en-US",
                      { hour: "numeric", hour12: true }
                    );
                    return (
                      <Card
                        key={indexHours}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          bgcolor: "#BDB7AB",
                          m: 2,
                          alignItems: "stretch",
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography>{forecastHour}</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <CardMedia
                              component="img"
                              sx={{ width: "70px", ml: "auto" }}
                              image={`icons/${currentDay.weather[0].icon}.png`}
                              alt={`Current weather is ${currentDay.weather[0].description}`}
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <Typography>
                              {Math.round(currentDay.main.temp)}°C
                            </Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <Typography sx={{ textAlign: "end" }}>
                              {currentDay.weather[0].description}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Card>
                    );
                  }
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default Forecast;
