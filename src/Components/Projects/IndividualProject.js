import React, { Component } from "react";
import "../../Styles/individualProjectStyle.css";

const IndividualProject = ({ imgPath, projectName }) => {
  return (
    <div className="projectWrapper">
      <div class="card__collection clear-fix">
        <div class="cards cards--two">
          <img src={imgPath} class="img-responsive" alt="Cards Image" />
          <span class="cards--two__rect"></span>
          <span class="cards--two__tri"></span>
          <p>{projectName}</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualProject;
