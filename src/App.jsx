import React, { useEffect, useState } from "react";
import Search from "./components/search/Search";
import "./App.css";

function App() {
  const handleOnSearchCity = (city) => {
    console.log(city);
  };

  return (
    <>
      <div className="container">
        <Search onSearchCity={handleOnSearchCity} />
      </div>
    </>
  );
}

export default App;
