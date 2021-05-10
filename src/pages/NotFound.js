import React from "react";
import { NavLink } from "react-router-dom";

//Component that displays an error that informs that the page does not exist - display a button back to Home
const NotFound = () => {
  return (
    <div className="pageTitle">
      <div>
        <h3>Sorry this page does not exist.</h3>
        <NavLink exact to="/">
          <span> Home</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
