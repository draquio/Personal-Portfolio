import React from "react";
import "./aboutmesection.scss";
import { Player } from "@lottiefiles/react-lottie-player";

export function Aboutmesection(props) {
  const {language} = props;
  return (
    <>
    <div id="about_me"></div>
    <div data-aos="fade-right" className="about_me_section">
      <h2 className="title_content">{language.title}</h2>
      <div className="about_me_content">
        <div className="about_me_img">
          <Player
            className="about_me_player"
            src="https://lottie.host/98a36679-a4fe-4383-ba30-324b95640f52/belvPl3QLO.json"
            background="transparent"
            speed="1"
            loop
            controls
            autoplay
            direction="1"
            mode="normal"
          ></Player>
        </div>
        <div className="about_me_info">
          <p dangerouslySetInnerHTML={{ __html: language.content_One }}></p>
          <p dangerouslySetInnerHTML={{ __html: language.content_Two }}></p>
          <p dangerouslySetInnerHTML={{ __html: language.content_Three }}></p>
        </div>
      </div>
    </div>
    </>
  );
}