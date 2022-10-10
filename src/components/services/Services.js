import React from "react";
import "./Services.css";
import Resume from "./Umair Azmat.pdf";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../card/Card";

function Services() {
  return (
    <div className="services">
      {/* Left Side  */}
      <div className="awesome">
        <span>My Awsome</span>
        <span>Services</span>
        <spane>
          Creative solutions to others' problems are the thing I like the most
          about my work.
          <br />
          Innovative, creative, and excited about building world-class web
          applications.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side */}

      <div className="cards">
        {/* 1st Card */}
        <div style={{ left: "14rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </div>

        {/* 2nd Card */}

        <div style={{ top: "12rem", left: "-4rem" }}>
          {" "}
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </div>

        {/* 3rd Card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"WordPress"}
            detail={"Elemntor, WooCommerce, LMS, Journals,SEO "}
            color="rgba(252, 166, 31, 0.45)"
          />{" "}
        </div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
