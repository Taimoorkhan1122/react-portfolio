import React from "react";
import SocialLinks from "./SocialLinks.js";
import Author from "./Author";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="inner-container">
        <SocialLinks />
        <Author className="author" />
      </div>
    </div>
  );
};

export default Footer;
