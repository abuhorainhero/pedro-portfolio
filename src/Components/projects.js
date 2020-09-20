import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "../Styles/projectsStyle.css";

//MusicalChat Imports
import MusicalChat from "../Images/musicalchat.webp";
import ChatDemoGif from "../Images/chatdemo.gif";

//Polyblock Imports
import PolyBlock from "../Images/polyblock.webp";
import PolyBlockImg1 from "../Images/polyblock1.webp";
import PolyBlockImg2 from "../Images/polyblock2.webp";
import PolyBlockImg3 from "../Images/polyblock3.webp";

//Rate My Art Imports
import RateMyArt from "../Images/ratemyart.webp";
import RateMyArt1 from "../Images/ratemyart1.webp";
import RateMyArt2 from "../Images/ratemyart2.webp";
import RateMyArt3 from "../Images/ratemyart3.webp";

//Sorting Algo Visualizer Imports
import SortingAlgoCover from "../Images/SAV.png";
import SortingAlgo from "../Images/sortingAlgo.gif";

//Explore Space Imports
import ExploreSpace from "../Images/exploreSpace.png";
import ExploreSpace1 from "../Images/space1.png";
import ExploreSpace2 from "../Images/space2.png";

// Portfolio Imports
import Portfolio from "../Images/portfolio.png";

// Portfolio Imports
import PinterestClone from "../Images/pinterestcloneIMG.png";

import AppleBadge from "../Images/appleBadge.webp";

import MusicalChatVideo from "../Videos/chatdemovideo.mp4";
import IndividualProject from "./Projects/IndividualProject";

import ReactPlayer from "react-player";

export default function Projects(props) {
  const { buttonLabel, className } = props;

  const [musicalChatModal, setMusicalChatModal] = useState(false);
  const [polyBlockModal, setPolyBlockModal] = useState(false);
  const [artModal, setArtModal] = useState(false);
  const [sortingModal, setSortingModal] = useState(false);
  const [exploreSpaceModal, setExploreSpaceModal] = useState(false);
  const [pinterestModal, setPinterestModal] = useState(false);
  const [portfolioModal, setportfolioModal] = useState(false);

  const toggleMusicalChat = () => setMusicalChatModal(!musicalChatModal);
  const togglePolyBlock = () => setPolyBlockModal(!polyBlockModal);
  const toggleArt = () => setArtModal(!artModal);
  const toggleSorting = () => setSortingModal(!sortingModal);
  const toggleSpace = () => setExploreSpaceModal(!exploreSpaceModal);
  const togglePinterest = () => setPinterestModal(!pinterestModal);
  const togglePortfolio = () => setportfolioModal(!portfolioModal);

  return (
    <div className="projects-container">
      <h1>My Favourite Projects</h1>
      <hr />
      <div className="container projects">
        <div className="row">
          <div className="col-lg" onClick={togglePinterest}>
            <IndividualProject
              imgPath={PinterestClone}
              projectName="Pinterest Clone With GraphQL and ReactJS"
            />
          </div>
          <div className="col-lg" onClick={toggleMusicalChat}>
            <IndividualProject
              imgPath={MusicalChat}
              projectName="Musical Chat - Real Time Chat"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg" onClick={toggleSorting}>
            <IndividualProject
              imgPath={SortingAlgoCover}
              projectName="Sorting Algorithm Visualizer"
            />
          </div>

          <div className="col-lg" onClick={togglePolyBlock}>
            <IndividualProject
              imgPath={PolyBlock}
              projectName="PolyBlock - Mobile Game"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg" onClick={toggleArt}>
            <IndividualProject
              imgPath={RateMyArt}
              projectName="RateMyArt - Social Media"
            />
          </div>
          <div className="col-lg" onClick={toggleSpace}>
            <IndividualProject
              imgPath={ExploreSpace}
              projectName="Expl0re.space"
            />
          </div>
        </div>
      </div>

      {/* MusicalChat Modal */}
      <Modal
        isOpen={musicalChatModal}
        toggle={toggleMusicalChat}
        className={className}
        size="lg"
      >
        <div className="modal-body">
          <ModalHeader toggle={toggleMusicalChat}>
            Musical Chat - Real Time Chat App Which Matches People on Musical
            Taste
          </ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row justify">
                Musical Chat is a platform where users are able to connect and
                Chat with people who have similar taste in music as them. The
                user needs to login with their Spotify account, which allows the
                platform to have access to the songs and genres they listen to.
                I created an algorithm which takes into account the favorite
                genres from users and match people based on it. Since there are
                several different genres, the algorithm takes into account how
                similar the genres are based on string similarity. When matched,
                they are able to chat in real time with each other using Web
                Sockets.
              </div>
              <div className="row skills">
                <span>
                  Skills:{" "}
                  <strong>
                    ReactJS, NodeJS, WebSockets (Socket.io), MySQL, HTML, CSS,
                    Spotify API, Heroku
                  </strong>
                </span>
              </div>
              <div className="row skills">
                <span>Time Taken: 1 Month</span>
              </div>
              <div className="row text-center justify-conent-center">
                <div className="col-md-6 col-xs-12" id="demogif">
                  <img src={ChatDemoGif} />
                </div>
                <div className="col-md-6 col-xs-12" id="demovideo">
                  <video width="300" height="178" controls>
                    <source src={MusicalChatVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="modal-bttns">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <a
                        href="https://github.com/machadop1407/musical-connection-client"
                        target="_blank"
                      >
                        <li>
                          <i className="fa fa-github" /> Github <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </a>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul>
                      <a
                        href="https://nifty-shannon-f54cb6.netlify.app/"
                        target="_blank"
                      >
                        <li>
                          <i className="fa fa-code" /> Live Version{" "}
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </div>

        <ModalFooter>
          <button id="close-modal-bttn" onClick={toggleMusicalChat}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      {/* PolyBlock Modal */}
      <Modal
        isOpen={polyBlockModal}
        toggle={togglePolyBlock}
        className={className}
        size="lg"
      >
        <div className="modal-body">
          <ModalHeader toggle={togglePolyBlock}>
            PolyBlock - Mobile Game
          </ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row justify">
                PolyBlock is a hypercasual mobile game I coded using the Unity
                Engine and the C# programming language. This project uses
                animations, cross platform programming, the implementation of
                advertisement features and UI design. The game is available for
                both Android and IOS, and it has a 4.8 rating in the Apple App
                Store.
              </div>
              <div className="row skills">
                <span>
                  Skills:{" "}
                  <strong>C#, Unity Engine, Unity Ads, Photoshop CC</strong>
                </span>
              </div>
              <div className="row skills">
                <span>Time Taken: 3 Months</span>
              </div>
              <div className="row text-center">
                <div className="col-md-4 col-xs-12">
                  <img src={PolyBlockImg1} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <img src={PolyBlockImg2} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <img src={PolyBlockImg3} />
                </div>
              </div>
            </div>
            <div className="modal-bttns">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <a
                        href="https://github.com/machadop1407/Polyblock---Mobile-Game"
                        target="_blank"
                      >
                        <li>
                          <i className="fa fa-github" /> Github <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </a>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.pedromachado.polyblock&hl=en&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                      target="_blank"
                    >
                      <img
                        alt="Get it on Google Play"
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/us/app/poly-block/id1475162422"
                      target="_blank"
                    >
                      <img
                        alt="Get it on Apple Store"
                        id="apple-badge"
                        src={AppleBadge}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </div>

        <ModalFooter>
          <button id="close-modal-bttn" onClick={togglePolyBlock}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      {/* Rate My Art Modal */}
      <Modal
        isOpen={artModal}
        toggle={toggleArt}
        className={className}
        size="lg"
      >
        <div className="modal-body">
          <ModalHeader toggle={toggleArt}>
            Rate My Art - Social Media Platform For Artists
          </ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row justify">
                This is a social media platform targeted for artists and
                architects to post their work. Each user can create an account
                or log in to an existent one. After being signed it, they can
                view every art work posted. The algorithm used to display the
                works takes into account the time in which the upload was posted
                and a combination of likes plus comments it received. This
                allows users to grow organically through the website. Users can
                also follow other users and see their own following feed, which
                only displays posts from their followers. This project also
                includes the use of password hashing and authentication by using
                sessions. The input fields are also protected against attacks,
                specially SQL injections.
              </div>
              <div className="row skills">
                <span>
                  Skills:{" "}
                  <strong>
                    Node JS | ExpressJS | Google Cloud API (GCS) | MYSQL | HTML
                    | CSS | JQuery | AJAX{" "}
                  </strong>
                </span>
              </div>
              <div className="row skills">
                <span>Time Taken: 2 Months</span>
              </div>
              <div className="row text-center">
                <div className="col-md-4 col-xs-12">
                  <img src={RateMyArt1} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <img src={RateMyArt2} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <img src={RateMyArt3} />
                </div>
              </div>
            </div>
            <div className="modal-bttns">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <a
                        href="https://github.com/machadop1407/rate-my-art"
                        target="_blank"
                      >
                        <li>
                          <i className="fa fa-github" /> Github <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </a>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul>
                      <a
                        href="http://rate-my-art.herokuapp.com"
                        target="_blank"
                      >
                        <li>
                          <i className="fa fa-code" /> Live Version{" "}
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </div>

        <ModalFooter>
          <button id="close-modal-bttn" onClick={toggleArt}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      {/* Sorting Algo Visualizer Modal */}
      <Modal
        isOpen={sortingModal}
        toggle={toggleSorting}
        className={className}
        size="lg"
      >
        <div className="modal-body">
          <ModalHeader toggle={toggleSorting}>
            Sorting Algorithms Visualizer
          </ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row justify">
                This project is a sorting visualizer I created while learning
                the important sorting algorithms. It helped me understand the
                importance of time complexity, as the algorithms have a clear
                discrepancy in velocity. Overall, it served as a valuable
                learning experience.
              </div>
              <div className="row skills">
                <span>
                  Skills:{" "}
                  <strong>
                    ReactJS, CSS, Bubble Sort, Heap Sort, Merge Sort, Quick
                    Sort, Radix Sort
                  </strong>
                </span>
              </div>
              <div className="row skills">
                <span>Time Taken: 1 week</span>
              </div>
              <div className="row text-center justify-content-center" id="SAV">
                <img src={SortingAlgo} />
              </div>
            </div>
            <div className="modal-bttns">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <a
                        href="https://github.com/machadop1407/Sorting-Visualizer"
                        target="_blank"
                      >
                        <li>
                          <i className="fa fa-github" /> Github <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </a>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul>
                      <a
                        href="https://machadop1407.github.io/Sorting-Visualizer/"
                        target="_blank"
                      >
                        <li>
                          <i className="fa fa-code" /> Live Version{" "}
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </div>

        <ModalFooter>
          <button id="close-modal-bttn" onClick={toggleSorting}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      {/* ExploreSpace Visualizer Modal */}
      <Modal
        isOpen={exploreSpaceModal}
        toggle={toggleSpace}
        className={className}
        size="lg"
      >
        <div className="modal-body">
          <ModalHeader toggle={toggleSpace}>Explore Space</ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row justify">
                This project was made in 48 hours with 3 other partners for the
                MLH To the Moon and Hacks Hackathon. THe project includes a lot
                of space related features, such as an orbital mechanics
                simulator, a three body problemm simulator, updated data about
                nearby asteroids and much more. All the simmulators were made
                using C# and the Unity Engine WebGL platform. The website was
                made in ReactJS and Typescript.
              </div>
              <div className="row skills">
                <span>
                  Skills:{" "}
                  <strong>
                    C#, UnityEngine, ReactJS, Firebase, Nasa API, User
                    Authentication, Google Geolocation API, TypeScript, Axios
                  </strong>
                </span>
              </div>
              <div className="row skills">
                <span>Time Taken: 1 week</span>
              </div>
              <div className="row text-center justify-content-center" id="SAV">
                <img src={ExploreSpace1} width="250px" />
                <img src={ExploreSpace2} width="250px" />
              </div>
            </div>
            <div className="modal-bttns">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <a
                        href="https://github.com/machadop1407/Sorting-Visualizer"
                        target="_blank"
                      >
                        <li>
                          <i className="fa fa-github" /> Github <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </a>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul>
                      <a href="https://expl0re.space" target="_blank">
                        <li>
                          <i className="fa fa-code" /> Live Version{" "}
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </div>

        <ModalFooter>
          <button id="close-modal-bttn" onClick={toggleSpace}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      {/* Pinterest Clone Modal */}
      <Modal
        isOpen={pinterestModal}
        toggle={togglePinterest}
        className={className}
        size="lg"
      >
        <div className="modal-body">
          <ModalHeader toggle={togglePinterest}>Pinterest Clone</ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row justify">
                This project was made in as a way to practice my GraphQL skills.
                I also used it to learn how to implement an ORM into my
                back-end, which in this case I used Sequelize. It replicats the
                famous column layout that Pinteres uses, and it exemplifies
                several small features present in the real website. I made a
                GraphQL API for my backend using Apollo Server, which allowed a
                wall between the clients and the API. The user can also login
                with their google account, and all info related to the user is
                saved in a ClearDB MySQL database. If the user wants to upload a
                pin, the image (and other details) are inserted to the database
                and uploaded to Cloudinary as an image storage.
              </div>
              <div className="row skills">
                <span>
                  Skills:{" "}
                  <strong>
                    ReactJS, GraphQL Apollo, Sequelize ORM, MySQL, NodeJS,
                    ExpressJS, Styled Components, TypeScript, JavaScript, Google
                    OAUTH, Cloudinary
                  </strong>
                </span>
              </div>
              <div className="row skills">
                <span>Time Taken: 2 Weeks</span>
              </div>
              <div className="row text-center justify-content-center">
                <ReactPlayer url="https://www.youtube.com/watch?v=zbCTh97ijTE&ab_channel=PedroTech" />
              </div>
            </div>
            <div className="modal-bttns">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <a
                        href="https://github.com/machadop1407/Sorting-Visualizer"
                        target="_blank"
                      >
                        <li>
                          <i className="fa fa-github" /> Github <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </a>
                    </ul>
                  </div>

                  <div className="col-md-4">
                    <ul>
                      <a href="https://expl0re.space" target="_blank">
                        <li>
                          <i className="fa fa-code" /> Live Version{" "}
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </div>

        <ModalFooter>
          <button id="close-modal-bttn" onClick={toggleSpace}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
