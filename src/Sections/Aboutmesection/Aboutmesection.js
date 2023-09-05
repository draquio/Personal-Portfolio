import React from "react";
import "./aboutmesection.scss";
import { Player } from "@lottiefiles/react-lottie-player";

export function Aboutmesection() {
  return (
    <div id="about_me" className="about_me_section">
      <h2 className="title_content">Sobre mi</h2>
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
          Soy Sergio Fernando Mercado Galarza, tengo 26 años y soy de Bolivia,
          estudié <b>Ingeniería en Sistemas</b> en la Universidad Privada Domingo Savio
          y también <b>inglés</b> en el Centro Boliviano Americano (CBA). <br />
          <br />
          A lo largo de los años he trabajado con diferentes tecnologías, la
          mayoría en proyectos personales monetizados, también trabajé haciendo 
          <b> SEO para blogs </b> y canales de Youtube. <br />
          Una de mis metas es poder dedicarme a tiempo completo a mi más grande
          pasión el <b>"Desarrollo web".</b>
        </div>
      </div>
    </div>
  );
}
