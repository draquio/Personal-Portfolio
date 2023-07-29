import React, { useState } from "react";
import "./Nav.scss";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { Button, Image } from "semantic-ui-react";

export function Nav() {
  const [isActive, SetIsActive] = useState(false);
  // const onActive = () => SetIsActive((prevState) => !prevState);
  const onActive = () => {
    // SetIsActive((prevState) => !prevState);
    SetIsActive(!isActive);
    console.log(isActive);
  };
  return (
    <div className="nav_section">
      <div className="nav_content">
        <div className="logo">
          <Link to="draquio" offset={-100} duration={500}>
            <Image src="/logo.png" />
          </Link>
        </div>
        <Button
          onClick={onActive}
          className={`responsive_menu_button ${isActive ? "active" : ""}`}
        >
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <span></span>
          <span></span>
          <span></span>
        </Button>
        <nav className={`menu_list ${isActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="about_me" offset={-100} duration={500}>
                ¿Quién soy?
              </Link>
            </li>
            <li>
              <Link to="skills" offset={-100} duration={500}>
                Habilidades
              </Link>
            </li>

            <li>
              <Link to="projects" offset={-100} duration={500}>
                Proyectos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
