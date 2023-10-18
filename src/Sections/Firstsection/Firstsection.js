import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import "./firstsection.scss";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "semantic-ui-css/components/icon.min.css";

export function Firstsection(props) {
  const { language } = props;
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `&lt;${language.FS.rol.dev}/&gt;`,
        `&lt;${language.FS.rol.ing}/&gt;`,
      ],
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 200,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, [language]);
  return (
    <div data-aos="fade-down" id="draquio" className="first-block">
      <div className="img_block">
        <div className="avatar_main"></div>
      </div>
      <div className="about_me_block">
        <h2>{language.FS.title}</h2>
        <div className="dev_title">
          <span ref={el} className="dev_title_span"></span>
        </div>
        <span
          className="summary_about_me"
          dangerouslySetInnerHTML={{ __html: language.FS.content }}
        ></span>
        <div className="icons_profile">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/sergio-mercado-galarza-4a4b42274/"
          >
            <Icon size="large" name="linkedin" />
          </Link>
          <Link
            target="_blank"
            to="https://www.facebook.com/sergio.mercado.16568/"
          >
            <Icon size="large" name="facebook" />
          </Link>
          <Link target="_blank" to="https://www.instagram.com/draquio/">
            <Icon size="large" name="instagram" />
          </Link>
          <Link
            target="_blank"
            to="https://www.youtube.com/channel/UCq1GwPQcE1fu8uE8up59JVQ"
          >
            <Icon size="large" name="youtube" />
          </Link>
        </div>
        <div className="download_button">
          <a
            className="btn btn_yellow"
            download
            href={`/document/${language.FS.document}.pdf`}>
            {language.FS.button} <Icon name="download" />
          </a>
        </div>
      </div>
    </div>
  );
}
