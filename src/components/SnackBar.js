import React from "react";
import "../styles/banner.css";

//Component that displays the banner when we select 5 movies.
const SnackBar = () => {
  return (
    <span className="banner animate__animated animate__fadeInRight">
      There are 5 movies nominated for the Shoppies Awards 2021
    </span>
  );
};

export default SnackBar;
