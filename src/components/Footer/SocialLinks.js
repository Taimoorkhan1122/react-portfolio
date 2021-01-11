import React from "react";
import "./footer.css";
function SocialLinks() {
  return (
    <div
      className="icons-container"
      style={{
        fontSize: "2rem",
      }}>
      <a
        target="-blank"
        href="https://www.linkedin.com/in/taimoor-khan-55a512173/">
        <i className={`fab fa-linkedin`}></i>
      </a>
      <a target="-blank" href="https://github.com/Taimoorkhan1122">
        <i className={`fab fa-github`}></i>
      </a>
      <a target="-blank" href="https://stackoverflow.com/users/story/12393165">
        <i className={`fab fa-stack-overflow`}></i>
      </a>
      <a target="-blank" href="https://www.instagram.com/letstartcoding/">
        <i className={`fab fa-instagram`}></i>
      </a>
      <a target="-blank" href="https://www.facebook.com/Taimee55/">
        <i className={`fab fa-facebook`}></i>
      </a>

      <a target="-blank" href="https://twitter.com/Taimi360">
        <i className="fab fa-twitter"> </i>
      </a>
      <a target="-blank" href="https://dev.to/taimoorkhan">
        <i className={`fab fa-dev`}></i>
      </a>
    </div>
  );
}

export default SocialLinks;
