import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import "../styles/movies.css";

//Components fetch a specific movie searched
const Movies = ({ isMoviesPage, nominees, handleNomineeClick }) => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const getMovieRequest = async (searchMovie) => {
    const url = `http://www.omdbapi.com/?s=${searchMovie}&type=movie&apikey=986ccdbc`;
    const response = await fetch(url);
    const jsonResponse = await response.json();

    //If we have a response with data, set the movie list
    if (jsonResponse.Search) {
      setMovies(jsonResponse.Search);
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getMovieRequest(searchMovie);
    }
    //cleanup
    return () => (mounted = false);
  }, [searchMovie]);

  return (
    <div>
      <span className="pageTitle">Movies title</span>
      <Search searchMovie={searchMovie} setSearchMovie={setSearchMovie} />

      <div className="movies">
        {movies &&
          movies.map((currentMovie) => (
            <MovieCard
              key={currentMovie.imdbID}
              id={currentMovie.imdbID}
              currentMovie={currentMovie}
              handleNomineeClick={handleNomineeClick}
              posterSearch={currentMovie.Poster}
              title={currentMovie.Title}
              year={currentMovie.Year}
              //Check if a movie exists in nominee list - to disable the nominate button
              disabledState={
                !!nominees.find(
                  (item) => item.imdbID === currentMovie.imdbID
                ) || nominees.length >= 5
              }
              isMoviesPage={isMoviesPage}
            />
          ))}
      </div>
    </div>
  );
};

export default Movies;
