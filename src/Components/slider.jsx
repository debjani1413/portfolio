import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretRight,faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import skillData  from '../utils/skillData';
import "../styledComponents/slider.css";


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = skillData;

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
<div className="gallery">
  <div className="card-container">
    <ul className="card">
      {cards.map((item, index) => {
        const isCurrent = index === currentIndex;
        const isNext = index === (currentIndex + 1) % cards.length;
        const isPrev = index === (currentIndex - 1 + cards.length) % cards.length;

        return (
          <li
            className='slider-card'
            key={index}
            style={{
              zIndex: isCurrent ? 3 : isPrev ? 2 : isNext ? 1 : 0,
              transform: isCurrent
                ? "translateX(0)"
                : isPrev
                ? "translateX(-150%) scale(0.8)"
                : isNext
                ? "translateX(150%) scale(0.8)"
                : "translateX(0) scale(0)", // Hide other cards
            }}
          >
            <img src={item.icon} alt={item.name} className='icon' />
            <h3 className='name'>{item.name}</h3>
          </li>
        );
      })}
    </ul>
  </div>
  <div className="actions">
    <button className="prev" onClick={prevCard}>
      <FontAwesomeIcon icon={faCaretLeft} size='medium' />
    </button>
    <button className="next" onClick={nextCard}>
      <FontAwesomeIcon icon={faCaretRight} />
    </button>
  </div>
</div>



  );
};

export default Slider;
