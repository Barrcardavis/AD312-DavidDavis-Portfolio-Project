import React from "react";
import experienceData from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        {experienceData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{item.date}</div>

            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.location}</p>

              <ul>
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
