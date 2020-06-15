import React from "react";
import "../Styles/aboutMe.css";
import FrontEndImg from "../Images/frontEnd.png";
import BackEndImg from "../Images/backEnd.png";

const AboutMe = () => {
  return (
    <div className="container-fluid about-me">
      <div className="text-center">
        <h1>About Me</h1>
        <hr />
      </div>
      <div className="row front-end">
        <img src={FrontEndImg} id="invisible-skills-img" />

        <ul>
          <b>FRONT-END SKILLS</b>
          <li>-> HTML </li>
          <li>-> CSS </li>
          <li>-> JavaScript </li>
          <li>-> ReactJS</li>
          <li>-> Jquery</li>
          <li>-> Bootstrap 4</li>
        </ul>
        <img src={FrontEndImg} id="skills-img-disappear" />
      </div>

      <div className="row back-end">
        <img src={BackEndImg} id="skills-img" />

        <ul>
          <b>BACK-END SKILLS</b>
          <li> -> NodeJs </li>
          <li> -> ExpressJs </li>
          <li> -> MySQL </li>
          <li> -> MongoDB </li>
          <li> -> Google Cloud API </li>
          <li> -> AWS </li>
        </ul>
      </div>

      <div className="row extra-skills">
        JAVA Object Oriented Programming -> Unity Engine With C# -> Photoshop CC
        -> Blender 3D Modelling
      </div>

      <div className="row extra-skills-invisible">
        <ul>
          <li> -> JAVA Object Oriented Programming </li>
          <li> -> Unity Engine With C# </li>
          <li> -> Photoshop CC </li>
          <li> -> Blender 3D Modelling </li>
        </ul>
      </div>

      <div className="row text-center justify-content-center about-description">
        <div className="col-sm-6">
          <p>
            I can work on both the front-end and the back-end of any
            application. I am also experienced with Scalable Database
            Architecture Design, deployment of projects, and object-oriented
            programming. Currently, I am a student at the University Of British
            Columbia pursuing a major in Computer Science. On my spare time I
            work on various different projects to build my skills and continue
            learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
