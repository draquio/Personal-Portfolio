import React, { useEffect, Suspense, lazy, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import LazyLoad from 'react-lazy-load';
import { Firstsection, Nav, Footer, ProjectSections, Aboutmesection, Skillssection, Contactsection } from "../Sections";
import "./home.scss";
import { useSelector } from "react-redux";
import EN from "../Lenguages/EN.json";
import ES from "../Lenguages/ES.json";

export function Home() {
  const [aboutheight, setAboutHeight] = useState(600);
  const [skillheight, setSkillHeight] = useState(1200);
  const [projectheight, setProjectHeight] = useState(2560);
  const [contactheight, setContactHeight] = useState(700);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 700) {
        setAboutHeight(1000);
        setSkillHeight(1650)
        setProjectHeight(4300)
        setContactHeight(900)
      } else{
        setAboutHeight(600);
        setSkillHeight(1200)
        setProjectHeight(2560)
        setContactHeight(700)
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
      offset: 300,
      mirror: false,
    });
  }, []);
  return (
    <>
      <header><Nav len={language.Menu} /></header>
      <main className="container-class">
        <Firstsection language={language} />
        <LazyLoad height={aboutheight} offset={0}>
          <Aboutmesection language={language.AM} />
        </LazyLoad>
        <LazyLoad height={skillheight} offset={0}>
          <Skillssection  language={language.SK} skills={language.SKILLS} />
        </LazyLoad>
        <LazyLoad height={projectheight} offset={0}>
          <ProjectSections language={language.PJS} />
        </LazyLoad>
        <LazyLoad height={contactheight} offset={0}>
          <Contactsection language={language.CF} />
        </LazyLoad>
        <SpeedInsights />
        <Analytics />
      </main>
      <footer><Footer /></footer>
    </>
  );
}
