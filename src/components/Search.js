import React, { useRef, useEffect } from "react";
import "../styles/search.css";

//Component that searchs a movie
const Search = ({ searchMovie, setSearchMovie }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  });

  const handleChangeMovie = (event) => {
    event.preventDefault();
    const updateMovie = event.target.value;
    setSearchMovie(updateMovie);
  };

  return (
    <div>
      <input
        ref={inputEl}
        className="form-control"
        placeholder="Search a movie..."
        value={searchMovie}
        onChange={handleChangeMovie}
      />
    </div>
  );
};

export default Search;
