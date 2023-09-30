import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Firstsection, Nav, Aboutmesection, Skillssection, Projectsection, Contactsection, Footer  } from "../Sections";
import "./home.scss";
import { useSelector } from "react-redux";
import EN from "../Lenguages/EN.json";
import ES from "../Lenguages/ES.json";


export function Home() {
  var language;
  const languageglobal = useSelector(state => state.language.type);
  if (languageglobal === "ES") {
    language = {...ES};
  } else {
    language = {...EN}
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 300,
      mirror: false,
    });
  }, []);
  return (
    <>
      <header>
        <Nav len={language.Menu}/>
      </header>
      <main className="container-class">
        <Firstsection language={language}/>
        <Aboutmesection language={language.AM}/>
        <Skillssection language={language.SK}/>
        <Projectsection language={language.PJ}/>
        <Contactsection language={language.CF}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
