import React from 'react';
import { ReactSVG } from 'react-svg'; // Import ReactSVG from the react-svg package
import planet from '../Images/planet.svg'; // Import the SVG file
import '../styledComponents/planet.css'; // Import your styles

const Planet = () => {
  return (
    <div className="denied__wrapper">
      <ReactSVG src={planet} className="saturn-svg" />
    </div>
  );
}

export default Planet;
