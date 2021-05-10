import React from "react";
import SnackBar from "./SnackBar";
import "../styles/header.css";

//Header checks if I have 5 nominees, then display the banner
const Header = ({ nominees }) => {
  return (
    <div onClick={() => window.scroll(0, 0)}>
      <h1 className="header">
        🎞 The Shoppies 🎬 {nominees.length === 5 && <SnackBar />}
      </h1>
    </div>
  );
};

export default Header;
