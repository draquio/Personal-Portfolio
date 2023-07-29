import React from "react";
import "./skillssection.scss";
import { Image } from "semantic-ui-react";
import { Player } from '@lottiefiles/react-lottie-player';

export function Skillssection() {
  return (
    <div id="skills" className="skills_section">
      <h2 className="title_content">Habilidades</h2>
      <div className="skill_content">
        {/* Barras */}
        <div className="skill_bar">
          <div className="bar_container">
            <label>PHP</label>
            <span>85%</span>
            <div className="progress progress-moved">
              <div className="progress-barphp"></div>
            </div>
          </div>
          <div className="bar_container">
            <label>Python (Flask)</label>
            <span>75%</span>
            <div className="progress progress-moved">
              <div className="progress-barpython"></div>
            </div>
          </div>
          <div className="bar_container">
            <label>JavaScript (MERN stack)</label>
            <span>90%</span>
            <div className="progress progress-moved">
              <div className="progress-barjs"></div>
            </div>
          </div>
          <div className="bar_container">
            <label>CSS / HTML (Boostrap / Sass)</label>
            <span>87%</span>
            <div className="progress progress-moved">
              <div className="progress-barcss"></div>
            </div>
          </div>
          <div className="bar_container">
            <label>MySQL</label>
            <span>85%</span>
            <div className="progress progress-moved">
              <div className="progress-barmysql"></div>
            </div>
          </div>
          <div className="bar_container">
            <label>SEO</label>
            <span>80%</span>
            <div className="progress progress-moved">
              <div className="progress-barseo"></div>
            </div>
          </div>
        </div>
        {/* IMG */}
        <div className="skill_img">
          {/* <Image src="/images/html.png" /> */}
          <Player className="skill_player" src="https://lottie.host/d529ee6e-4815-45b3-8ab6-98cba52a9c47/F3YatGd310.json" background="transparent" speed="1" loop controls autoplay direction="1" mode="normal"></Player>
        </div>
      </div>
    </div>
  );
}
