import React from "react";
import "./Styles/appStyle.css";
import Header from "./Components/header";
import Projects from "./Components/projects";
import Footer from "./Components/Footer";
import AboutMe from "./Components/AboutMe";

import Resume from "./ProjectFiles/PedroMachadoResume.pdf";

function App() {
  return (
    <div className="App">
      {/* Navbar component */}
      <Header />

      {/* Introduction Structure */}
      <div className="home">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-lg-6 intro-content">
              <hr />
              <h1>Pedro Henrique Machado</h1>
              <p>
                I don't believe in <b>passion</b>. I believe in specialization
                of labour. If you're good in something, you should continue
                working in that untill you become an expert. And I am really{" "}
                <b>good</b> at coding.
              </p>
              <hr />
              <div className="social-links">
                <a href="https://github.com/machadop1407" target="_blank">
                  <li className="fa fa-github"></li>
                </a>
                <a
                  href="https://www.linkedin.com/in/pedro-machado-7606871aa/"
                  target="_blank"
                >
                  <li className="fa fa-linkedin"></li>
                </a>
                <a href={Resume} download="PedroMachadoResume.pdf">
                  <li className="fa fa-address-book-o"></li>
                </a>
              </div>

              <div id="blank"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="projectsLinkTo">
        {/* Projects Section Component */}
        <Projects />
      </div>

      <div className="aboutLinkTo">
        <AboutMe />
      </div>

      <div className="footerLinkTo">
        <Footer />
      </div>
    </div>
  );
}

export default App;
