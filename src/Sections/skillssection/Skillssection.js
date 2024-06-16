import React from "react";
import "./skillssection.scss";
import { Image } from "semantic-ui-react";
import { Player } from "@lottiefiles/react-lottie-player";
export function Skillssection(props) {
  const { language, skills } = props;
  const frontend = skills.Frontend;
  const backend = skills.Backend;
  const testing = skills.Testing;
  const db = skills.DB;
  const others = skills.Others;
  return (
    <>
      <div id="skills"></div>
      <div data-aos="fade-up" className="skills_section">
        <h2 className="title_content">{language.title}</h2>
        <div className="skill_content">
          <div className="skill_icons_section">
            <h4>FrontEnd</h4>
            <div className="tecnology_content">
              {frontend.map((language, index) => (
                <div key={index} className="icon_container">
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
            <h4>Backend</h4>
            <div className="tecnology_content">
              {backend.map((language, index) => (
                <div key={index} className="icon_container">
                  <Image
                    alt={language.skill}
                    className="icon_skill"
                    src={language.icon}
                  />
                  {language.skill}
                </div>
              ))}
            </div>
            <h4>Testing</h4>
            <div className="tecnology_content">
              {testing.map((testing, index) => (
                <div key={index} className="icon_container">
                  <Image
                    alt={testing.skill}
                    className="icon_skill"
                    src={testing.icon}
                  />
                  {testing.skill}
                </div>
              ))}
            </div>
            <h4>{language.bd}</h4>
            <div className="tecnology_content">
              {db.map((language, index) => (
                <div key={index} className="icon_container">
                  <Image
                    alt={language.skill}
                    className="icon_skill"
                    src={language.icon}
                  />
                  {language.skill}
                </div>
              ))}
            </div>
            <h4>{language.tools}</h4>
            <div className="tecnology_content">
              {others.map((tool, index) => (
                <div key={index} className="icon_container">
                  <Image
                    alt={tool.skill}
                    className="icon_skill"
                    src={tool.icon}
                  />
                  {tool.skill}
                </div>
              ))}
            </div>
          </div>
          {/* IMG */}
          <div className="skill_img">
            <Player
              className="skill_player"
              src="https://lottie.host/d529ee6e-4815-45b3-8ab6-98cba52a9c47/F3YatGd310.json"
              background="transparent"
              speed="1"
              loop
              controls
              autoplay
              direction="1"
              mode="normal"
            ></Player>
          </div>
        </div>
      </div>
    </>
  );
}
