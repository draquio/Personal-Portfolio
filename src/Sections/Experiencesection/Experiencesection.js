import React from "react";
import "./Experiencesection.scss";
import { Icon } from "semantic-ui-react";
export const Experiencesection = (props) => {
  const { title, experience } = props;
  return (
    <>
      <div id="experience"></div>
      <section className="experience_section">
        <h2 className="title_content" data-aos="fade-down">
          {title.experience}
        </h2>
        <div className="experiece_content">
          {experience.map((exp, index) => (
            <div className="experience_card" data-aos="fade-right" key={index}>
              <div className="experience_card_image">
                <img src={exp.imagen} alt={exp.position} />
              </div>
              <div>
                <div className="experience_card_title">
                  <h3>{exp.position}</h3>
                  <p>
                    <Icon name="clock" color="grey" /> {exp.period}
                  </p>
                </div>
                {exp.company && (
                <div className="experience_card_company">
                  <Icon name="building" />
                  {exp.company}
                </div>
                )}
                <div className="experience_card_content">
                  <p>{exp.description}</p>
                </div>
                <div className="experience_card_tags">
                  {exp.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
