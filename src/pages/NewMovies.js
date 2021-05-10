import React, { useState, useEffect } from "react";
import NewMovieCard from "../components/NewMovieCard";
import "../styles/newMovies.css";

//Components fetch movies currently playing in theaters
const NewMovies = () => {
  const [newMovies, setNewMovies] = useState([]);

  const getTrendingMovieRequest = async () => {
    const url =
      "https://api.themoviedb.org/3/trending/movie/week?api_key=d4ba5eb46aeffb06e1401f8e2b87dd48";
    const response = await fetch(url);
    const jsonResponse = await response.json();

    //If we have a response with data, set the movie list
    if (jsonResponse.results) {
      setNewMovies(jsonResponse.results);
    }
  };

  useEffect(() => {
    getTrendingMovieRequest();
  }, []);

  return (
    <div>
      <span className="pageTitle">New Movies</span>
      <div className="newMovies">
        {newMovies &&
          newMovies.map((currentMovie) => (
            <NewMovieCard
              key={currentMovie.id}
              id={currentMovie.id}
              poster={currentMovie.poster_path}
              title={currentMovie.title}
              date={currentMovie.release_date}
              rating={currentMovie.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default NewMovies;
