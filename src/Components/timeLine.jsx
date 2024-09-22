import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import "../styledComponents/timeline.css";
import { experiences } from "../utils/expData";

const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#090325",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #090325"}}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="icon-container">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="experience-icon"
            />
          </div>
        }
      >
        <div className="experience-content">
          <h3 className="experience-title">{experience.title}</h3>
          <p className="experience-company">{experience.company_name}</p>
  
          <ul className="experience-points">
            {experience.points.map((point, index) => (
              <li key={`experience-point-${index}`}>{point}</li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>
    );
  };
  

const Timeline = () => {
  return (
    <>
      <div className="experience-container">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Timeline;
