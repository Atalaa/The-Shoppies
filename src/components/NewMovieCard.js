import React from "react";
import { img_300 } from "../config/config.js";
import { Badge } from "@material-ui/core";
import "../styles/movieCard.css";

//Component that displays the new movies coming in 2021
const NewMovieCard = ({ poster, title, date, rating }) => {
  //Check if the title is too long, take a part of the string
  let word;
  if (title.length > 20) {
    word = `${title.substring(0, 21)} ...`;
  } else {
    word = title;
  }
  return (
    <div className="media">
      <Badge
        badgeContent={rating}
        color={rating >= 7 ? "primary" : "secondary"}
      />

      <img className="poster" src={`${img_300}${poster}`} alt={title} />

      <b className="title">{word}</b>

      <span className="subTitle">{date}</span>
    </div>
  );
};

export default NewMovieCard;
