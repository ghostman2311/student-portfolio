import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <div className="header-tabs">
      <Link className='link' to="/">Home</Link>
        <Link className='link' to="/about">About</Link>
        <Link className='link' to="/project">Projects</Link>
        <Link className='link' to="/games/hangman">Hangman</Link>
        <Link className='link' to="/games/quiz">Quiz</Link>
      </div>
    </div>
  );
}

export default Header;
