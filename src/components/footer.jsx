import React from "react";
import logo from "../assets/logo.png";
import "../App.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-block">
        <img src={logo} alt="link" width="69" height="37" />
       
      </div>
      <div className="footer-link">
        <img src="/fb.svg" alt="link" />
        <img src="/twitter.svg" alt="link" />
        <img src="/dribble.svg" alt="link" />
      </div>
    </div>
  );
}

export default Footer;
