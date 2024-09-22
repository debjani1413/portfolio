import React from 'react';
import '../styledComponents/skill.css'; // Link to your CSS
import Planet from '../Components/planet';
import Slider from '../Components/slider';
import WaveBackground from '../Components/waves';
import { color } from 'three/webgpu';
import profilePic from "../Images/Astronaut.png";
import Headings from '../Components/headings';

const Skill = () => {
    return (
        <div className='skill'>
            <Headings text={"SKILLS"} />

            {/* Cards */}
            <div className="slider-container">
                <Slider />
            </div>
            
            {/* Planet at the bottom left */}
            <div className="planet-container">
                <Planet />
            </div>

        </div> 
    );
};

export default Skill;
