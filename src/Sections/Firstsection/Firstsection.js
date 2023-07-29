import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import "./firstsection.scss";
import { Icon } from "semantic-ui-react";

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
        {/* <Image className="avatar_main" src="/images/sergiomercado.webp" /> */}
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
        <div className="icons_profiles">
          <Icon size="large" name="facebook" />
          <Icon size="large" name="linkedin" />
          <Icon size="large" name="youtube" />
        </div>
      </div>
    </div>
  );
}
