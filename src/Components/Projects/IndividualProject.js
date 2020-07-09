import React, { Component } from "react";
import "../../Styles/individualProjectStyle.css";

const IndividualProject = ({ imgPath, projectName }) => {
  return (
    <div className="projectWrapper">
      <div className="card__collection clear-fix">
        <div className="cards cards--two">
          <img src={imgPath} className="img-responsive" alt="Cards Image" />
          <span className="cards--two__rect"></span>
          <span className="cards--two__tri"></span>
          <p>{projectName}</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualProject;
