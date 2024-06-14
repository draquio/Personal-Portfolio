import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export function Frontend(props) {
  const { frontend, buttons } = props;
  return (
    <>
      {frontend.map((project, index) => (
        <div key={index} className="item_card_frontend" data-aos="zoom-in">
          <h4 className="item_card_title">
            <Icon name={project.icon} /> {project.title}
          </h4>
          <div className="image_card">
            <img src={project.img} alt={project.title} loading="lazy" />
            <div className="content_img">
              {project.content}
              <Link
                to={project.link}
                className="btn btn_yellow"
                target="_blank"
              >
                <Icon name="computer" /> {buttons.demo}
              </Link>
              {project.code ? (
                <Link to={project.code} className="btn btn_red" target="_blank">
                  <Icon name="github" />
                  {buttons.code}
                </Link>
              ) : (
                ""
              )}
            </div>
            <div className="background_img"></div>
          </div>
          <div className="tecnologies_card">
            {project.tecnology.map((tecnology, index) => (
              <span key={index} className={`tag ${project.tag[index]}`}>
                {tecnology}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
