import React from "react";
// import "./secondsection.scss";
import { Image } from "semantic-ui-react";

export function Secondsection() {
  return (
    <div className="second-block">
      <h3 className="title_content">Proyectos</h3>
      <div className="projects_block">
        <div className="card_project">
          <h3 className="card_project__title">Blog 2</h3>
          <Image className="card_project__img" src="/icons/img.svg" />
          <div className="footer_card">
            <span className="footer_card__tags tag_php">Php</span>
            <span className="footer_card__tags tag_mysql">MySQL</span>
            <span className="footer_card__tags tag_bootstrap">Bootstrap</span>
          </div>
        </div>
        <div className="card_project">
          <h3 className="card_project__title">Blog 2</h3>
          <Image className="card_project__img" src="/icons/img.svg" />
          <div className="footer_card">
            <span className="footer_card__tags tag_python">Python</span>
            <span className="footer_card__tags tag_flask">Flask</span>
            <span className="footer_card__tags tag_mysql">MySQL</span>
            <span className="footer_card__tags tag_bootstrap">Bootstrap</span>
          </div>
        </div>
        <div className="card_project">
          <h3 className="card_project__title">Blog 3</h3>
          <Image className="card_project__img" src="/icons/img.svg" />
          <div className="footer_card">
            <span className="footer_card__tags tag_react">React</span>
            <span className="footer_card__tags tag_nodejs">NodeJs</span>
            <span className="footer_card__tags tag_mongodb">MongoDB</span>
            <span className="footer_card__tags tag_bootstrap">Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  );
}
