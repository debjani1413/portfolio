import React from 'react';

import "../styledComponents/heading.css";

const Headings = ({text}) => {
  return (
    <div className='heading'>
      <h2>{text}</h2>
    </div>
  )
}

export default Headings;
