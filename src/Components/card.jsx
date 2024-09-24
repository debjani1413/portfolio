import React from "react";
import "../styledComponents/card.css";

const Card = ({ image, tag, desc,link }) => {
  console.log(image)
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
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
    </a>
  );
}

export default Card;
