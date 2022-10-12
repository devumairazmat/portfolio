import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* darkMode */}
        <div className="circle">1+</div>
        <span>Years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">20+</div>
        <span>Completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span>Companies </span>
        <span>Work</span>
      </div>
    </div>
  );
}

export default Experience;
