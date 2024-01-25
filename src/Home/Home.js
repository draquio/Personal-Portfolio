import React, { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import { Firstsection, Nav, Footer } from "../Sections";

import "./home.scss";
import { useSelector } from "react-redux";
import EN from "../Lenguages/EN.json";
import ES from "../Lenguages/ES.json";

export function Home() {
  const Aboutmesection = lazy(() =>
    import("../Sections/Aboutmesection/Aboutmesection")
  );
  const ProjectSections = lazy(() =>
    import("../Sections/ProjectSections/ProjectSections")
  );
  const Skillssection = lazy(() =>
    import("../Sections/skillssection/Skillssection")
  );
  const Contactsection = lazy(() =>
    import("../Sections/Contactsection/Contactsection")
  );
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
        <Suspense fallback={<div>Cargando...</div>}>
          <Aboutmesection language={language.AM} />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <Skillssection language={language.SK} skills={language.SKILLS} />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <ProjectSections language={language.PJS} />
        </Suspense>
        <Suspense fallback={<div>Cargando...</div>}>
          <Contactsection language={language.CF} />
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </main>
      <footer><Footer /></footer>
    </>
  );
}
