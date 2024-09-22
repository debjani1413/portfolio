import React from "react";
import { ReactSVG } from 'react-svg'; 
import waves from "../Images/waves.svg";
import "../styledComponents/waves.css"; // Link to your CSS

const WaveBackground = () => {
  return (
    <div className="wave-container">
      <ReactSVG src={waves} className="waves" />
    </div>
  );
};

export default WaveBackground;
