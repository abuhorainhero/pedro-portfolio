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

// //Good News Imports
// import GoodNews from "../Images/goodNews.png";
// import GoodNews1 from "../Images/goodNews2.png";

import AppleBadge from "../Images/appleBadge.webp";

import GoodNewsTrailer from "../Videos/goodnewsTrailer.MP4";
import MusicalChatVideo from "../Videos/chatdemovideo.mp4";
import IndividualProject from "./Projects/IndividualProject";

export default function Projects(props) {
  const { buttonLabel, className } = props;

  const [musicalChatModal, setMusicalChatModal] = useState(false);
  const [polyBlockModal, setPolyBlockModal] = useState(false);
  const [artModal, setArtModal] = useState(false);
  const [sortingModal, setSortingModal] = useState(false);

  const toggleMusicalChat = () => setMusicalChatModal(!musicalChatModal);
  const togglePolyBlock = () => setPolyBlockModal(!polyBlockModal);
  const toggleArt = () => setArtModal(!artModal);
  const toggleSorting = () => setSortingModal(!sortingModal);

  return (
    // <div className="projects-container text-center">
    //   <h1>My Favourite Projects</h1>
    //   <hr />
    //   <div className="container-fluid">
    //     <div className="row projects">
    //       <div className="col-lg-8" onClick={toggleMusicalChat}>
    //         <IndividualProject
    //           imgPath={MusicalChat}
    //           projectName="Musical Chat"
    //         />
    //       </div>
    //     </div>
    //     <div className="row projects">
    //       <div className="col-lg-8" onClick={toggleArt}>
    //         <IndividualProject imgPath={RateMyArt} projectName="RateMyArt" />
    //       </div>
    //     </div>
    //     <div className="row projects">
    //       <div className="col-lg-8" onClick={togglePolyBlock}>
    //         <IndividualProject imgPath={PolyBlock} projectName="PolyBlock" />
    //       </div>
    //     </div>
    //     <div className="row projects">
    //       <div className="col-lg-8" onClick={toggleSorting}>
    //         <IndividualProject
    //           imgPath={SortingAlgoCover}
    //           projectName="Sorting"
    //         />
    //       </div>
    //     </div>
    //   </div>

    <div className="projects-container">
      <h1>My Favourite Projects</h1>
      <hr />
      <div className="projects">
        <div className="col-left-small" onClick={toggleMusicalChat}>
          <IndividualProject imgPath={MusicalChat} projectName="Musical Chat" />
        </div>
      </div>
      <div className="projects">
        <div className="col-right-small" onClick={toggleArt}>
          <IndividualProject imgPath={RateMyArt} projectName="RateMyArt" />
        </div>
      </div>
      <div className="projects">
        <div className="col-left-small" onClick={togglePolyBlock}>
          <IndividualProject imgPath={PolyBlock} projectName="PolyBlock" />
        </div>
      </div>
      <div className="projects">
        <div className="col-right-small" onClick={toggleSorting}>
          <IndividualProject imgPath={SortingAlgoCover} projectName="Sorting" />
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
    </div>
  );
}
