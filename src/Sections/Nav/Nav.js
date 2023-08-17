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
          <Link to="draquio" offset={-100} duration={500}>
            {/* <Image src="/logo.png" /> */}
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
              <Link activeClass="active" to="about_me" offset={-100} duration={500}>
                ¿Quién soy?
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="skills" offset={-100} duration={500}>
                Habilidades
              </Link>
            </li>

            <li>
              <Link activeClass="active" to="projects" offset={-100} duration={500}>
                Proyectos
              </Link>
            </li>
          </ul>
        </nav>

        {/* Movil */}
        <nav className={`menu_list_movil ${isActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link activeClass="active" to="about_me" offset={-100} duration={500}>
                ¿Quién soy?
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="skills" offset={-100} duration={500}>
                Habilidades
              </Link>
            </li>

            <li>
              <Link activeClass="active" to="projects" offset={-100} duration={500}>
                Proyectos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
