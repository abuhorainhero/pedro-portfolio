import React from 'react';
import './Styles/appStyle.css'
import Header from './Components/header'
import Projects from './Components/projects'
import Footer from './Components/Footer';

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
                I don't believe in <b>passion</b>.
              I believe in specialization of labour.
              If you're good in something, you should
              continue working in that untill you become
              an expert. And I am really <b>good</b> at coding.
            </p>
              <hr />
              <button>I Am Interested</button>
              <div id="blank"></div>
            </div>
          </div>
        </div>
      </div>


      {/* Projects Section Component */}
      <Projects />
      

      <Footer />


    </div>
  );
}

export default App;
