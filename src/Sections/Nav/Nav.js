import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-scroll";
export function Nav() {
  const [isActive, SetIsActive] = useState(false);
  const onActive = () => {
    SetIsActive(!isActive);
  };
  return (
    <div className="nav_section">
      <div className="nav_content">
        <div className="logo">
          <Link to="draquio" spy={true} smooth={true} offset={-100} duration={500}>
            &lt;Draquio/&gt;
          </Link>
        </div>
        <button
          onClick={onActive}
          className={`responsive_menu_button ${isActive ? "active" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className='menu_list'>
          <ul>
            <li>
              <Link activeClass="active"  to="about_me" spy={true} smooth={true} offset={0} duration={500}>
                ¿Quién soy?
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500}>
                Habilidades
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Movil */}
        <nav className={`menu_list_movil ${isActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link activeClass="active" onClick={onActive} to="about_me" spy={true} smooth={true} offset={0} duration={500}>
                ¿Quién soy?
              </Link>
            </li>
            <li>
              <Link activeClass="active" onClick={onActive} to="skills" spy={true} smooth={true} offset={0} duration={500}>
                Habilidades
              </Link>
            </li>

            <li>
              <Link activeClass="active" onClick={onActive} to="projects" spy={true} smooth={true} offset={0} duration={500}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link activeClass="active" onClick={onActive} to="contact" spy={true} smooth={true} offset={0} duration={500}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
