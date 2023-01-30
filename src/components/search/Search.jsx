import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const Search = ({ onSearchCity, error }) => {
  const [search, setSearch] = useState("");

  const handleOnClick = () => {
    console.log("handle", search);
    onSearchCity(search);
    console.log(error);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "700px",
        bgcolor: "#D9DDDC",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          my: 2,
        }}
      >
        {error === "Not Found" ? (
          <TextField
            error
            size="small"
            label="Enter city"
            helperText="Incorrect name city."
          />
        ) : (
          <TextField
            size="small"
            variant="outlined"
            label="Enter city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}

        <Button variant="outlined" color="inherit" onClick={handleOnClick}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default Search;
