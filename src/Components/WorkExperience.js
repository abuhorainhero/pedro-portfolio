import React from "react";
import "../Styles/experienceStyle.css";

export default function WorkExperience() {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <hr />
      <div className="container-fluid experience">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <h1>SA Run</h1>
            <hr />
            <h4>Back-End Software Engineer | July 2020 — Present</h4>
            <h6>
              Skills: TypeScript, NodeJS, Express, MongoDB, Socket.io, AWS, EC2
            </h6>
            <p>
              <ul>
                <li>
                  Working on developing a scalable api for an IOS and Android
                  App together with a team of 4.
                </li>
                <li>
                  Implementing a real time Chat Microservice using WebSockets
                  with Socket.IO and a MongoDB database to store messages
                </li>
                <li>
                  Managing a Monolithic architecture using an AWS EC2 and a S3
                  bucket to store images/files.
                </li>
              </ul>
            </p>
          </div>
          <div className="col-lg-4">
            <h1>PedroTech @ Youtube.com</h1>
            <hr />
            <h4>Programming Content Creator | June 2020 — Present</h4>
            <h6>
              Skills: ReactJS, TypeScript, NodeJS, Express, MySQL, MongoDB,
              REST, Algorithms, Data Structures
            </h6>
            <p>
              <ul>
                <li>
                  Uploaded 50+ tutorials teaching a variety of topics ranging
                  from how to solve algorithms questions to creating a full REST
                  API.
                </li>
                <li>
                  Produced a 18 video crash course for people learning how to
                  use ReactJS
                </li>
                <li>
                  Received several positive feedback from subscirbers, leading
                  me to create a discord group where I help everyone.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
