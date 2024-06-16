import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export function Backend(props) {
  const { backend, buttons } = props;
  return (
    <>
      {backend.map((project, index) => (
        <div key={index} className="item_card_backend" data-aos="zoom-in">
          <div className="backend_content_img">
            <img
              src={project.img}
              alt={project.title}
              title={project.title}
            />
          </div>
          <div className="backend_content_card">
            <h4 className="backend_content_card_title">
              <Icon name={project.icon} /> {project.title}
            </h4>
              <div className="backend_content_card_text">
                {project.content.map((content, index) => (
                  <p key={index}>{content}</p>
                ))}
                <Link to={project.code} target="_blank" className="btn btn_yellow float-right"><Icon name="github" /> {buttons.code}</Link>
              </div>
            <div className="backend_content_card_tags ">
              {project.tecnology.map((tec, index) => (
                <span key={index} className={`tag ${project.tag[index]}`}>
                {tec}
              </span>
              ))}
            </div>
            
          </div>
        </div>
      ))}
    </>
  );
}
