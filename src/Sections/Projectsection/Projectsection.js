import React from "react";
import "./projectsection.scss";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react"


export function Projectsection() {
  return (
    <div id="projects" className="project_section">
      <h2 className="title_content">Proyectos</h2>
      <div className="project_content">
        <div className="card_project">
          <h4><Icon name="fire"/> DameFans</h4>
          <div className="card_img damefans_img">
            <div className="card_img_content">
              DameFans fue una web de intercambios sociales con{" "}
              <b>+120k Usuarios</b> <b>+1 millón de visitas/mes</b>
              <Link
                to="https://web.archive.org/web/20190914214728/https://damefans.com/"
                className="project_button"
                target="_blank"
              >
                <Icon name="code"/> Ver proyecto
              </Link>
            </div>
          </div>
          <div className="footer_card">
            <span className="footer_tag tag_php">PHP</span>
            <span className="footer_tag tag_bootstrap">Bootstrap</span>
            <span className="footer_tag tag_mysql">MySQL</span>
          </div>
        </div>

        {/* Segunda */}

        <div className="card_project">
          <h4><Icon name="blogger" /> Blog React</h4>
          <div className="card_img reactblog_img">
            <div className="card_img_content">
              Un blog con Front y Backend creado con el MERN stack.
              <Link to="#" className="project_button" target="_blank">
              <Icon name="code"/> Ver proyecto
              </Link>
            </div>
          </div>
          <div className="footer_card">
            <span className="footer_tag tag_react">React</span>
            <span className="footer_tag tag_nodejs">Nodejs</span>
            <span className="footer_tag tag_mongodb">MongoDB</span>
          </div>
        </div>

        {/* Tercer */}
        <div className="card_project">
          <h4><Icon name="shop" /> Gestión de Stock</h4>
          <div className="card_img stock_img">
            <div className="card_img_content">
              Sistema de gestión de Stock para restaurante Super Ricard
              <Link to="#" className="project_button" target="_blank">
              <Icon name="code"/> Ver proyecto
              </Link>
            </div>
          </div>
          <div className="footer_card">
            <span className="footer_tag tag_flask">Flask</span>
            <span className="footer_tag tag_python">Python</span>
            <span className="footer_tag tag_mysql">MySQL</span>
            <span className="footer_tag tag_bootstrap">Bootstrap</span>
          </div>
        </div>
        {/* Cuarto */}
        <div className="card_project">
          <h4><Icon name="address card" /> Portfolio</h4>
          <div className="card_img portfolio_img">
            <div className="card_img_content">
              Portfolio personal
              <Link to="#" className="project_button" target="_blank">
              <Icon name="code"/> Ver proyecto
              </Link>
            </div>
          </div>
          <div className="footer_card">
            <span className="footer_tag tag_react">React</span>
          </div>
        </div>
      </div>
    </div>
  );
}
