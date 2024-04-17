import React from "react";
import logo from "../assets/logo.png";
import nav from "../assets/nav.png";
import "../App.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-block">
        <img src={logo} alt='link' width="69" height="37" />
        <p>© 2021 Arnau Ros, LLC. All rights reserved.</p>
      </div>
      <div className="footer-link">
      <img src={nav} alt='link'/>
      <img src={nav} alt='link'/>
      <img src={nav} alt='link'/> 
      </div>
    </div>
  );
}

export default Footer;
