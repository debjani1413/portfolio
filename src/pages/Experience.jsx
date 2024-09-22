import React from 'react';
import WaveBackground from '../Components/waves';
import Headings from '../Components/headings';

import "../styledComponents/experience.css";
import Timeline from '../Components/timeLine';


const Experience = () => {
  return (
    <div className='exp'>
      <div className='text'>
      <Headings text={"Experience"} className='prop' />
      </div>
      <WaveBackground />
      <div className='timeline'>
      <Timeline />
</div>
    </div>
  )
}

export default Experience;
