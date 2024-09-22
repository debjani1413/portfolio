import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import "../styledComponents/tiltComponent.css";

const TiltComponent = (props) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const current_obj = tiltRef.current; // tiltRef is an object, current is a param that holds the dom component

    VanillaTilt.init(current_obj, {
      max: 30,
      speed: 600,
      scale: 1,
      transition: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      perspective: 600,
      glare: false,
    });

    // Cleanup on component unmount
    return () => current_obj.vanillaTilt.destroy();
  }, []);

  return (
    <div ref={tiltRef} className="image-container">
      {props.children}
    </div>
  );
};

export default TiltComponent;
