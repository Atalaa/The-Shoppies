import React from "react";
import MovieCard from "../components/MovieCard";
import "../styles/nominees.css";

//Components that displays nominee list
const Nominees = ({ isMoviesPage, nominees, handleNomineeClick, clicked }) => {
  return (
    <div>
      <span className="pageTitle">Nominees Titles</span>

      <div className="nominees">
        {nominees &&
          nominees.map((currentMovie) => (
            <MovieCard
              key={currentMovie.imdbID}
              id={currentMovie.imdbID}
              currentMovie={currentMovie}
              posterSearch={currentMovie.Poster}
              title={currentMovie.Title}
              year={currentMovie.Year}
              isMoviesPage={isMoviesPage}
              handleNomineeClick={handleNomineeClick}
              clicked={clicked}
            />
          ))}
      </div>
    </div>
  );
};

export default Nominees;
