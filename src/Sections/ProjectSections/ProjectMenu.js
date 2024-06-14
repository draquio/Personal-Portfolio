import React from "react";

export function ProjectMenu(props) {
  const { menu, setMenu } = props;
  const handleChangeMenu = (menu) => {
    setMenu(menu);
  }
  return (
    <div className="menu_projects">
      <button className={`btn ${menu === "frontend" ? "active" : ""}`} onClick={() => handleChangeMenu("frontend")}>Frontend</button>
      <button className={`btn ${menu === "backend" ? "active" : ""}`} onClick={() => handleChangeMenu("backend")}>Backend</button>
    </div>
  );
}
