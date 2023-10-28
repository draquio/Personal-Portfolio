import React from "react";
import "./projectsection.scss";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export function Projectsection(props) {
  const { language } = props;
  return (
    <div data-aos="zoom-in" id="projects" className="project_section">
      <h2 className="title_content">{language.title}</h2>
      <div className="project_content">
        <div className="card_project">
          <h4>
            <Icon name="tv" /> {language.projects.projectMovie.title}
          </h4>
          <div className="card_img themovie_web">
            <div className="card_img_content">
              {language.projects.projectMovie.content}
              <Link
                to="https://themovie-draquio.vercel.app/"
                className="btn btn_red"
                target="_blank"
              >
                <Icon name="code" /> {language.demo}
              </Link>
            </div>
          </div>
          <div className="footer_card">
            <span className="footer_tag tag_react">React</span>
          </div>
        </div>

        {/* Segunda */}

        <div className="card_project">
          <h4>
            <Icon name="qrcode" /> {language.projects.projectQR.title}
          </h4>
          <div className="card_img qrweb_img">
            <div className="card_img_content">
              {language.projects.projectQR.content}
              <Link
                to="https://qrg.draquio.vercel.app/"
                className="btn btn_red"
                target="_blank"
              >
                <Icon name="code" /> {language.demo}
              </Link>
            </div>
          </div>
          <div className="footer_card">
            <span className="footer_tag tag_react">React</span>
            <span className="footer_tag tag_redux">Redux Toolkit</span>
          </div>
        </div>

        {/* Tercera */}

        <div className="card_project">
          <h4>
            <Icon name="translate" /> {language.projects.projectTranslate.title}
          </h4>
          <div className="card_img translate_web">
            <div className="card_img_content">
              {language.projects.projectTranslate.content}
              <Link
                to="https://traductor-bice.vercel.app/"
                className="btn btn_red"
                target="_blank"
              >
                <Icon name="code" /> {language.demo}
              </Link>
            </div>
          </div>
          <div className="footer_card">
            <span className="footer_tag tag_react">React</span>
            <span className="footer_tag tag_typescript">TypeScript</span>
          </div>
        </div>

        {/* Cuarta */}

        <div className="card_project">
          <h4>
            <Icon name="blogger" /> {language.projects.projectBlog.title}
          </h4>
          <div className="card_img reactblog_img">
            <div className="card_img_content">
              {language.projects.projectBlog.content}
              <Link
                to="https://draquioblog.vercel.app/"
                className="btn btn_red"
                target="_blank"
              >
                <Icon name="code" /> {language.demo}
              </Link>
            </div>
          </div>
          <div className="footer_card">
            <span className="footer_tag tag_react">React</span>
            <span className="footer_tag tag_nodejs">Nodejs</span>
            <span className="footer_tag tag_mongodb">MongoDB</span>
          </div>
        </div>

        {/* Quinta */}

        <div className="card_project">
          <h4>
            <Icon name="address card" />{" "}
            {language.projects.projectPortfolio.title}
          </h4>
          <div className="card_img portfolio_img">
            <div className="card_img_content">
              {language.projects.projectPortfolio.content}
              <Link to="#" className="btn btn_red mtop" target="_blank">
                <Icon name="code" /> {language.demo}
              </Link>
            </div>
          </div>
          <div className="footer_card">
            <span className="footer_tag tag_react">React</span>
            <span className="footer_tag tag_redux">Redux Toolkit</span>
          </div>
        </div>

        {/* Sexta */}

        <div className="card_project">
          <h4>
            <Icon name="fire" /> {language.projects.projectDameFans.title}
          </h4>
          <div className="card_img damefans_img">
            <div className="card_img_content">
              {/* DameFans fue una web de intercambios sociales con{" "}
              <b>+120k Usuarios</b> <b>+1 millón de visitas/mes</b> */}
              {language.projects.projectDameFans.content.info}
              <br />
              <b>
                {language.projects.projectDameFans.content.users}
                <br />
                {language.projects.projectDameFans.content.visits}
              </b>
              <Link
                to="https://web.archive.org/web/20190914214728/https://damefans.com/"
                className="btn btn_red"
                target="_blank"
              >
                <Icon name="code" /> {language.demo}
              </Link>
            </div>
          </div>
          <div className="footer_card">
            <span className="footer_tag tag_php">PHP</span>
            <span className="footer_tag tag_bootstrap">Bootstrap</span>
            <span className="footer_tag tag_mysql">MySQL</span>
          </div>
        </div>

        {/* Octava */}

        <div className="card_project">
          <h4>
            <Icon name="microphone" />
            {language.projects.projectDraquio.title}
          </h4>
          <div className="card_img blog-wordpress_img">
            <div className="card_img_content">
              {language.projects.projectDraquio.content}
              <Link
                to="https://www.draquio.com/"
                className="btn btn_red"
                target="_blank"
              >
                <Icon name="code" /> {language.demo}
              </Link>
            </div>
          </div>
          <div className="footer_card">
            <span className="footer_tag tag_wordpress">Wordpress</span>
          </div>
        </div>
      </div>
    </div>
  );
}
