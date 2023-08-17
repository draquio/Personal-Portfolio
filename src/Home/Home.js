import React from "react";
// import { , Main } from "semantic-ui-react";
import { Firstsection, Nav, Aboutmesection, Skillssection, Projectsection, Contactsection, Footer  } from "../Sections";
import "./home.scss";


export function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="container-class">
        <Firstsection />
        <Aboutmesection />
        <Skillssection />
        <Projectsection />
        <Contactsection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
