import React from "react";
import Button from "@material-ui/core/Button";
import "../styles/movieCard.css";

//Component that displays the movies that I search
const MovieCard = ({
  posterSearch,
  title,
  year,
  disabledState,
  handleNomineeClick,
  currentMovie,
  isMoviesPage,
}) => {
  //Check if the title is too long, take a part of the string
  let word;
  if (title.length > 20) {
    word = `${title.substring(0, 21)} ...`;
  } else {
    word = title;
  }

  return (
    <div className="media">
      {isMoviesPage && (
        <Button
          className="buttonNominate"
          variant="contained"
          color="primary"
          disabled={disabledState}
          onClick={() => handleNomineeClick(currentMovie)}
        >
          Nominate
        </Button>
      )}

      {!isMoviesPage && (
        <Button
          className="buttonRemove"
          variant="contained"
          color="primary"
          onClick={() => handleNomineeClick(currentMovie)}
        >
          Remove
        </Button>
      )}

      <img className="posterSearch" src={posterSearch} alt={title} />

      <b className="title">{word}</b>

      <span className="subTitle">{`Released  in ${year}`}</span>
    </div>
  );
};

export default MovieCard;
