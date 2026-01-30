import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";
import {
  Firstsection,
  Nav,
  Footer,
  Aboutmesection,
  Skillssection,
  ProjectSections,
  Contactsection,
  Experiencesection,
} from "../Sections";

import "./home.scss";
import { useSelector } from "react-redux";
import EN from "../Lenguages/EN.json";
import ES from "../Lenguages/ES.json";

export function Home() {
  var language;
  const languageglobal = useSelector((state) => state.language.type);
  if (languageglobal === "ES") {
    language = { ...ES };
  } else {
    language = { ...EN };
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 150,
      mirror: false,
    });
  }, []);
  return (
    <>
      <header>
        <Nav len={language.Menu} />
      </header>
      <main className="container-class">
        <Firstsection language={language} />
        <Aboutmesection language={language.AM} />
        <Experiencesection title={language.Menu} experience={language.EXPERIENCE} />
        <Skillssection language={language.SK} skills={language.SKILLS} />
        <ProjectSections language={language.PJS} />
        <Contactsection language={language.CF} />
        <Analytics />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
