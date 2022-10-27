import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import umair from "../../img/umair.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Skype from "../../img/skype.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";

import { themeContext } from "../../Context";

function Intro() {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      {/* Left side */}
      <div className="i-left">
        {/* name */}
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>I Am</span>
          <span>Umair Azmat</span>
          <span>
            <b>WordPress</b> & <b>MERN Stack Developer</b> with high level of
            experience in web designing and development, producting the Quality
            work
          </span>
        </div>
        {/* button */}
        <button className="button i-button">Hire Me</button>
        {/* icons */}
        <div className="i-icons">
          <a href="https://github.com/devumairazmat" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/umair-azmat-364a5a1a5/"
            target="_blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://join.skype.com/invite/wX0rMaj2bGyZ" target="_blank">
            <img src={Skype} alt="" />
          </a>
        </div>
      </div>
      {/* Right Side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={umair} alt="" />

        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "70%" }}>
          <FloatingDiv image={crown} text1="WEB" text2="Developer" />
        </div>
        <div style={{ top: "19.5rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} text1="Best Design" text2="Award" />
        </div>
        {/* Blur */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
