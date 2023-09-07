import React from "react";
import "./skillssection.scss";
import { Image } from "semantic-ui-react";

import { Player } from "@lottiefiles/react-lottie-player";

export function Skillssection() {
  return (
    <div id="skills" className="skills_section">
      <h2 className="title_content">Habilidades</h2>
      <div className="skill_content">
        <div className="skill_icons_section">
          <h4>FrontEnd</h4>
          <div className="tecnology_content">
            <div className="icon_container">
              <Image
                alt="tecnología frontend HTML"
                className="icon_skill"
                src="/tecnologies/html.png"
              />
              HTML
            </div>
            <div className="icon_container">
              <Image
                alt="tecnología frontend CSS"
                className="icon_skill"
                src="/tecnologies/css.png"
              />
              CSS
            </div>
            <div className="icon_container">
              <Image
                alt="tecnología frontend Javascript"
                className="icon_skill"
                src="/tecnologies/javascript.png"
              />
              JavaScript
            </div>

            <div className="icon_container">
              <Image
                alt="tecnología frontend React"
                className="icon_skill"
                src="/tecnologies/react.png"
              />
              React
            </div>
            <div className="icon_container">
              <Image
                alt="tecnología frontend Bootstrap"
                className="icon_skill"
                src="/tecnologies/bootstrap.png"
              />
              Bootstrap
            </div>
            <div className="icon_container">
              <Image
                alt="tecnología frontend Sass"
                className="icon_skill"
                src="/tecnologies/sass.png"
              />
              Sass
            </div>
          </div>
          <h4>Backend</h4>
          <div className="tecnology_content">
            <div className="icon_container">
              <Image
                alt="tecnología backend PHP"
                className="icon_skill"
                src="/tecnologies/php.png"
              />
              PHP
            </div>
            <div className="icon_container">
              <Image
                alt="tecnología backend NodeJS"
                className="icon_skill"
                src="/tecnologies/node-js.png"
              />
              NodeJS
            </div>
            <div className="icon_container">
              <Image
                alt="tecnología backend Python"
                className="icon_skill"
                src="/tecnologies/python.png"
              />
              Python
            </div>
          </div>
          <h4>Base de datos</h4>
          <div className="tecnology_content">
            <div className="icon_container">
              <Image
                alt="tecnología base de datos MongoDB"
                className="icon_skill"
                src="/tecnologies/mongodb.png"
              />
              MongoDB
            </div>
            <div className="icon_container">
              <Image
                alt="tecnología base de datos MySQL"
                className="icon_skill"
                src="/tecnologies/mysql.png"
              />
              MySQL
            </div>
            <div className="icon_container">
              <Image
                alt="tecnología base de datos SQL Server"
                className="icon_skill"
                src="/tecnologies/sql-server.png"
              />
              SQLServer
            </div>
          </div>
          <h4>Otras Herramientas</h4>
          <div className="tecnology_content">
            <div className="icon_container">
              <Image
                alt="tecnología Git"
                className="icon_skill"
                src="/tecnologies/git.png"
              />
              Git
            </div>
            <div className="icon_container">
              <Image
                alt="Seo"
                className="icon_skill"
                src="/tecnologies/seo.png"
              />
              Seo
            </div>
            <div className="icon_container">
              <Image
                alt="tecnología wordpress"
                className="icon_skill"
                src="/tecnologies/wordpress.png"
              />
              Wordpress
            </div>
            <div className="icon_container">
              <Image
                alt="tecnología Photoshop"
                className="icon_skill"
                src="/tecnologies/photoshop.png"
              />
              Photoshop
            </div>
            <div className="icon_container">
              <Image
                alt="Inglés B2"
                className="icon_skill"
                src="/tecnologies/english.png"
              />
              Inglés B2
            </div>
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
  );
}
