import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props){
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTSANTS = {
    description:
      "I am a Computer Scientist who just graduated from the premier IT university COMSATS University Islamabad in Computer Science Majors. I am a highly skilled professional developer who loves to take on the challenges and then solve them. Backend web with background knowledge of node js and front-end web with background knowledge of react js, along with a knack of building applications with utmost efficiency. Willing to be an asset for an organization.",
    highlights: {
      bullets: [
        "Backend web and application development",
        "Bootstrap, html, css",
        "React and Node js",
        "MERN Development",
        "Managing database",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return(
    <div className='about-me-container screen-container fade-in' id={props.id || ""}>
       <div className="about-me-parent">
        <ScreenHeading title={"About Me👨‍⚖️"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn highlighted-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="Haroon-Resume.pdf" download="Haroon-Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}