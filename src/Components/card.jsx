import React from "react";
import "../styledComponents/card.css";

const Card = ({ image, tag, desc }) => {
  console.log(image)
  return (
    <div className="container" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <div className="card head">
          <p>{tag}</p>
          <hr />
        </div>
        <div className="card section">
          <p className="desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
