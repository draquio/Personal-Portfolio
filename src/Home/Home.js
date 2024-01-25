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
        <Suspense fallback={null}>
          <Aboutmesection language={language.AM} />
        </Suspense>
        <Suspense fallback={null}>
          <Skillssection language={language.SK} skills={language.SKILLS} />
        </Suspense>
        <Suspense fallback={null}>
          <ProjectSections language={language.PJS} />
        </Suspense>
        <Suspense fallback={null}>
          <Contactsection language={language.CF} />
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </main>
      <footer><Footer /></footer>
    </>
  );
}
