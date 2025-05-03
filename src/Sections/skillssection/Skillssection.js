import React from "react";
import "./skillssection.scss";
import { Image } from "semantic-ui-react";
import { Player } from "@lottiefiles/react-lottie-player";
export function Skillssection(props) {
  const { language, skills } = props;
  const frontend = skills.Frontend;
  const backend = skills.Backend;
  const testing = skills.Testing;
  const others = skills.Others;
  return (
    <>
      <div id="skills"></div>
      <div className="skills_section">
        <h2 className="title_content" data-aos="fade-up">
          {language.title}
        </h2>
        <div className="skill_content">
          {/* <div className="skill_icons_section"> */}
          <section>
            <h4 data-aos-duration="1000" data-aos="fade-up">
              Frontend
            </h4>
            <div className="tecnology_content">
              {frontend.map((language, index) => (
                <div
                  key={index}
                  className="icon_container"
                  data-aos-duration="1000"
                  data-aos="fade-up"
                >
                  <Image
                    alt={language.skill}
                    className="icon_skill"
                    src={language.icon}
                    loading="lazy"
                  />
                  {language.skill}
                </div>
              ))}
            </div>
          </section>
          <section>
            <h4 data-aos-duration="1000" data-aos="fade-up">
              Backend
            </h4>
            <div className="tecnology_content">
              {backend.map((language, index) => (
                <div
                  key={index}
                  className="icon_container"
                  data-aos-duration="1000"
                  data-aos="fade-up"
                >
                  <Image
                    alt={language.skill}
                    className="icon_skill"
                    src={language.icon}
                  />
                  {language.skill}
                </div>
              ))}
            </div>
          </section>
          <section>
            <h4 data-aos-duration="1000" data-aos="fade-up">
              Testing
            </h4>
            <div className="tecnology_content">
              {testing.map((testing, index) => (
                <div
                  key={index}
                  className="icon_container"
                  data-aos-duration="1000"
                  data-aos="fade-up"
                >
                  <Image
                    alt={testing.skill}
                    className="icon_skill"
                    src={testing.icon}
                  />
                  {testing.skill}
                </div>
              ))}
            </div>
          </section>
          <section>
            <h4 data-aos-duration="1000" data-aos="fade-up">
              {language.tools}
            </h4>
            <div className="tecnology_content">
              {others.map((tool, index) => (
                <div
                  key={index}
                  className="icon_container"
                  data-aos-duration="1000"
                  data-aos="fade-up"
                >
                  <Image
                    alt={tool.skill}
                    className="icon_skill"
                    src={tool.icon}
                  />
                  {tool.skill}
                </div>
              ))}
            </div>
          </section>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
