import React, { useState } from "react";
import "./Nav.scss";
import { useDispatch, useSelector } from "react-redux";
import { changelanguage } from "../../feactures/languages/languageSlice";
import { Link } from "react-scroll";
import "semantic-ui-css/components/transition.min.css";
export function Nav(props) {
  const { len } = props;
  const disaptch = useDispatch();
  const [isActive, SetIsActive] = useState(false);
  const [language, Setlanguage] = useState(
    useSelector((state) => state.language.type)
  );
  const onActive = () => {
    SetIsActive(!isActive);
  };
  const selectLenguage = () => {
    if (language === "ES") {
      disaptch(changelanguage("EN"));
      Setlanguage("EN");
    } else {
      disaptch(changelanguage("ES"));
      Setlanguage("ES");
    }
  };

  return (
    <div className="nav_section">
      <div className="nav_content">
        <div className="logo">
          <Link
            to="draquio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            &lt;Draquio/&gt;
          </Link>
        </div>
        <input
          onClick={onActive}
          hidden
          className="check-icon"
          id="check-icon"
          name="check-icon"
          type="checkbox"
        />
        <label className="icon-menu menu_mobile_icon" for="check-icon">
          <div className="bar bar--1"></div>
          <div className="bar bar--2"></div>
          <div className="bar bar--3"></div>
        </label>
        <nav className="menu_list">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="about_me"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {len.aboutme}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {len.skills}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {len.projects}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {len.contact}
              </Link>
            </li>
            <li>
              <img
                onClick={selectLenguage}
                className="flag_lenguage"
                src={`/flag/${language}.png`}
                alt="Cambiar Idioma"
              />
            </li>
          </ul>
        </nav>

        {/* Movil */}
        <nav className={`menu_list_movil ${isActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                activeClass="active"
                onClick={onActive}
                to="about_me"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {len.aboutme}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                onClick={onActive}
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {len.skills}
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                onClick={onActive}
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {len.projects}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                onClick={onActive}
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {len.contact}
              </Link>
            </li>
            <li>
              <img
                onClick={selectLenguage}
                className="flag_lenguage"
                src={`/flag/${language}.png`}
                alt="Cambiar Idioma"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
