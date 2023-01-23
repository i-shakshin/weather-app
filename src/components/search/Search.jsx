import { useState } from "react";

const Search = ({ onSearchCity }) => {
  const [search, setSearch] = useState("");

  const handleOnClick = () => {
    console.log("handle", search);
    onSearchCity(search);
  };

  return (
    <>
      <label>
        Введите город:
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button
          onClick={() => {
            handleOnClick();
          }}
        >
          Искать
        </button>
      </label>
    </>
  );
};

export default Search;
