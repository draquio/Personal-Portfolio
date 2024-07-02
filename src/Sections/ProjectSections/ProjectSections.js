import React, { useState } from "react";
import "./ProjectSections.scss";
import { ProjectMenu } from "./ProjectMenu";
import { Frontend } from "./Frontend";
import { Backend } from "./Backend";
import { Challenge } from "./Challenge";

export function ProjectSections(props) {
  const { language } = props;
  const [menu, setMenu] = useState("frontend");
  const components = {
    frontend: <Frontend frontend={language.projects.frontend} buttons={language.projects.buttons} />,
    backend: <Backend backend={language.projects.backend} buttons={language.projects.buttons} />,
    challenge: <Challenge challenge={language.projects.challenge} buttons={language.projects.buttons} />
  };

  return (
    <>
      <div id="projects"></div>
      <div className="project_sections">
        <div data-aos="zoom-in">
          <h2 className="title_content">{language.title}</h2>
          <ProjectMenu menu={menu} setMenu={setMenu} />
        </div>
        <div className="project_container">
        {components[menu]}
        </div>
      </div>
    </>
  );
}
