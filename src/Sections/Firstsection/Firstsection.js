import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import "./firstsection.scss";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import 'semantic-ui-css/components/icon.min.css';


export function Firstsection() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["&lt;Desarrollador Web/&gt;", "&lt;Ingeniero de Sistemas/&gt;"],
      typeSpeed: 100,
      backSpeed: 50,
      // backDelay: 1050,
      startDelay: 200,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div id="draquio" className="first-block">
      <div className="img_block">
        <div className="avatar_main"></div>
      </div>
      <div className="about_me_block">
        <h2>Ing. Sergio Mercado</h2>
        {/* <span className="dev_title">&lt; Desarrollador Full Stack /&gt;</span> */}
        <div className="dev_title">
          <span ref={el} className="dev_title_span"></span>
        </div>
        <span className="summary_about_me">
          Soy Sergio Mercado, <b>Ingeniero de Sistemas</b> con un nivel de{" "}
          <b>inglés B2</b>, me dedico al desarrollo web enfocado en las buenas
          prácticas y metodologías ágiles para brindar resultados de calidad.
        </span>
        <div className="icons_profile">
          <Link target="_blank" to='https://www.linkedin.com/in/sergio-mercado-galarza-4a4b42274/'>
            <Icon size="large" name="linkedin" />
          </Link>
          <Link target="_blank" to='https://www.facebook.com/sergio.mercado.16568/'>
          <Icon size="large" name="facebook" />
          </Link>
          <Link target="_blank" to='https://www.instagram.com/draquio/'>
          <Icon size="large" name="instagram" />
          </Link>
          <Link target="_blank" to='https://www.youtube.com/channel/UCq1GwPQcE1fu8uE8up59JVQ'>
          <Icon size="large" name="youtube" />
          </Link>
          
          
        </div>
        <div className="download_button">
          <a className="btn btn_yellow" href="/public/document/Ing. Sergio Mercado CV.pdf" download>Descargar CV <Icon  name="download" /></a>
        </div>
      </div>
    </div>
  );
}
