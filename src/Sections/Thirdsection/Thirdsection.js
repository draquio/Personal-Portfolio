import React from "react";
import "./Thirdsection.scss";
import { Image } from "semantic-ui-react"

export function Thirdsection() {
  return (
    <div className="third-block block">
      <h2 className="title_content">Skills</h2>
      <div className="skills">
        <div className="skills__izquierda">
          <div className="porcentaje__container">
            <div className="bar_container">
              <label>PHP</label>
              <span>85%</span>
              <div class="progress progress-moved">
                <div class="progress-barphp"></div>
              </div>
            </div>
            <div className="bar_container">
              <label>Python (Flask)</label>
              <span>75%</span>
              <div class="progress progress-moved">
                <div class="progress-barpython"></div>
              </div>
            </div>
            <div className="bar_container">
              <label>JavaScript (MERN stack)</label>
              <span>90%</span>
              <div class="progress progress-moved">
                <div class="progress-barjs"></div>
              </div>
            </div>
            <div className="bar_container">
              <label>CSS / HTML (Boostrap / Sass)</label>
              <span>87%</span>
              <div class="progress progress-moved">
                <div class="progress-barcss"></div>
              </div>
            </div>
            <div className="bar_container">
              <label>MySQL</label>
              <span>85%</span>
              <div class="progress progress-moved">
                <div class="progress-barmysql"></div>
              </div>
            </div>
            <div className="bar_container">
              <label>SEO</label>
              <span>80%</span>
              <div class="progress progress-moved">
                <div class="progress-barseo"></div>
              </div>
            </div>
          </div>
        </div>
        {/* separador */}
        <div className="skills__derecha">
          {/* <div className="skills__img"> */}
            <Image src="/images/html.png" />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
