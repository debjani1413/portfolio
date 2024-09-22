import React, { useEffect } from "react";
import "../styledComponents/wobblyText.css";

const WobblyText = () => {
    
  useEffect(() => {
    const squares = document.getElementsByClassName("square");

    const addAnimation = (e) => {
      e.target.classList.add("rubberBand");
      e.target.addEventListener("animationend", function handleAnimationEnd() {
        e.target.classList.remove("rubberBand");
        e.target.removeEventListener("animationend", handleAnimationEnd);
      });
    };

    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("mouseenter", addAnimation);
    }

    // Cleanup event listeners on component unmount
    return () => {
      for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener("mouseenter", addAnimation);
      }
    };
  }, []);

  return (
    <div className="wt">
      <div className="line">
        <div className="square" id="square">
          H
        </div>
        <div className="square">e</div>
        <div className="square">l</div>
        <div className="square">l</div>
        <div className="square">o</div>
        <div className="square">,</div>
      </div>
      <div className="line">
        <div className="square">I</div>
        <div className="square">'</div>
        <div className="square">m</div>
        <div className="square" style={{ marginLeft: "20px" }}>
          R
        </div>
        <div className="square">u</div>
        <div className="square">h</div>
        <div className="square">i</div>
      </div>
    </div>
  );
};

export default WobblyText;
