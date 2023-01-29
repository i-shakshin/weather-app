import { useState } from "react";
import styled from "@emotion/styled";
import { TextField, Button } from "@mui/material";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = ({ onSearchCity }) => {
  const [search, setSearch] = useState("");

  const handleOnClick = () => {
    console.log("handle", search);
    onSearchCity(search);
  };

  return (
    <SearchContainer>
      <TextField
        size="small"
        variant="outlined"
        label="Enter city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="outlined" color="inherit" onClick={handleOnClick}>
        Search
      </Button>
    </SearchContainer>
  );
};

export default Search;
