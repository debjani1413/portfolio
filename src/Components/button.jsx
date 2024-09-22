import React from "react";

import "../styledComponents/button.css";

const Button = ({ text, to }) => {
  const handleClick = () => {
    window.open(to, "_blank");
  };

  return (
    <button className="button-79" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
