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
    <div id="draquio" className="first-block">
      <div data-aos="fade-down" className="img_block">
        <div className="avatar_main"></div>
      </div>
      <div className="about_me_block">
        <h2 data-aos="fade-down">{language.FS.title}</h2>
        <div className="dev_title">
          <span ref={el} className="dev_title_span"></span>
        </div>
        <span
          data-aos="zoom-in"
          className="summary_about_me"
          dangerouslySetInnerHTML={{ __html: language.FS.content }}
        ></span>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-offset="-300"
          className="icons_profile"
        >
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/sergio-mercado-galarza-4a4b42274/"
            title="linkedin"
            aria-label="linkedin red social"
          >
            <Icon size="large" name="linkedin" />
          </Link>
          <Link target="_blank" to="https://github.com/draquio" title="github" aria-label="github">
            <Icon size="large" name="github" />
          </Link>
          <Link to="mailto:draquio@gmail.com" title="mail" aria-label="mail">
            <Icon size="large" name="mail" />
          </Link>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-offset="-300"
          className="download_button"
        >
          <a
            className="btn btn_yellow"
            download
            href={`/document/${language.FS.document}.pdf`}
          >
            {language.FS.button} <Icon name="download" />
          </a>
        </div>
      </div>
    </div>
  );
}
