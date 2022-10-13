import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Skype from "@iconscout/react-unicons/icons/uil-skype";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>devumair260@gmail.com</span>
        <div className="f-icons">
          <Skype color="white" size={"3rem"} />
          <LinkedIn color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
