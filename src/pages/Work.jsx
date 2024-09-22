import React from 'react';
import workData from '../utils/workData'; // Import workData
import Card from '../Components/card'; // Import the Card component
import '../styledComponents/work.css'; // Custom CSS for the slider
import Headings from '../Components/headings';

const Work = () => {
  return (
    <div className="work-container">
      <Headings text={"Projects"} />
      <div className='work-slider'>
        {workData.map((workData,index) => (
          <Card key={index} image={workData.image} tag={workData.tag} desc={workData.desc} />
        ))}
        {/* <Card  image={image} tag={"tag"} desc={"desc"} /> */}
      </div>
    </div>
  );
};

export default Work; 