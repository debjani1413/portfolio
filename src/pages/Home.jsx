import React from "react";
import WobblyText from "../Components/wobblyText";
import profilePic from "../Images/Astronaut.png";
import TiltComponent from "../Components/tiltComponent";
import Button from "../Components/button";

import "../styledComponents/home.css";

const Home = () => {
  return (
    <div className="intro">
      <div className="content">
        <WobblyText className="wobbly-text" />
        <div className="desc">
          <p>I'm a frontend developer from Bharat.</p>
          <p>Reading and learning from docs are my superpowers. </p>
          <Button
            text={"Contact Me"}
            to={"https://www.linkedin.com/in/debjani-dey-4981281ab/"}
          />
        </div>
      </div>
      <TiltComponent>
        <img src={profilePic} alt="profile-pic" className="profile-pic" />
      </TiltComponent>
    </div>
  );
};

export default Home;
