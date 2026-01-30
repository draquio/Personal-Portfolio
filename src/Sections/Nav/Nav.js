import React, { useEffect, useState } from "react";
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
  const [isTop, setIsTop] = useState(true);
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
  // Detectar si el scroll está en la parte superior
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Evitar el salto al desaparecer el scrollbar y evita el scroll del body
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (isActive) {
      document.body.style.overflow = "hidden";

      // Evita salto al desaparecer scrollbar
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isActive]);

  return (
    <div className={`nav_section ${isTop ? "" : "scrolled"}`}>
      <div className="nav_content">
        <div className="logo">
          <Link
            to="draquio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            aria-label="Portfolio personal"
          >
            &lt;Draquio/&gt;
          </Link>
        </div>
        <input
          onChange={onActive}
          hidden
          className="check-icon"
          id="check-icon"
          name="check-icon"
          type="checkbox"
          checked={isActive ? true : false}
        />
        <label className="icon-menu menu_mobile_icon" htmlFor="check-icon">
          <div className={`bar bar--1 ${isTop ? "" : "scrolled"}`}></div>
          <div className={`bar bar--2 ${isTop ? "" : "scrolled"}`}></div>
          <div className={`bar bar--3 ${isTop ? "" : "scrolled"}`}></div>
        </label>
        <nav className="menu_list">
          <ul>
            <li>
              <Link
                activeClass="active"
                className="menu_list_link"
                to="about_me"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                aria-label="sección sobre mi"
              >
                {len.aboutme}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu_list_link"
                to="experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                aria-label="sección experiencia"
              >
                {len.experience}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu_list_link"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                aria-label="sección de habilidades"
              >
                {len.skills}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu_list_link"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                aria-label="sección de proyectos"
              >
                {len.projects}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu_list_link"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                aria-label="sección de contacto"
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
                aria-label="sección de sobre mi en movil"
              >
                {len.aboutme}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                onClick={onActive}
                to="experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                aria-label="sección de experiencia en movil"
              >
                {len.experience}
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
                aria-label="sección de habilidades en movil"
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
                aria-label="sección de proyectos en movil"
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
                aria-label="sección de contacto en movil"
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
