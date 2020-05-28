import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import '../Styles/projectsStyle.css'
import PolyBlock from '../Images/polyblock.png'
import AppleBadge from '../Images/appleBadge.png'

import ProjectCarousel from './projectCarousel'

export default function Projects(props) {

    const {
        buttonLabel,
        className
    } = props;

    const [polyBlockModal, setPolyBlockModal] = useState(false)
    const [project2Modal, setProject2Modal] = useState(false)
    const [project3Modal, setProject3Modal] = useState(false)


    const togglePolyBlock = () => setPolyBlockModal(!polyBlockModal)
    const toggleProject2 = () => setProject2Modal(!project2Modal)
    const toggleProject3 = () => setProject3Modal(!project3Modal)


    return (
        <div className="projects-container text-center">
            <h1>My Favourite Projects</h1>

            <div className="container-fluid">
                <div className="row projects justify-content-center">
                    <div className="col-lg-3" onClick={togglePolyBlock}>
                        <img src={PolyBlock} />
                    </div>
                    <div className="col-lg-3" onClick={toggleProject2}>
                        <img src={PolyBlock} />
                    </div>
                    <div className="col-lg-3" onClick={toggleProject3}>
                        <img src={PolyBlock} />
                    </div>
                </div>
            </div>

            {/* PolyBlock Modal */}
            <Modal isOpen={polyBlockModal} toggle={togglePolyBlock} className={className} size="lg">
                <div className="modal-body">
                    <ModalHeader toggle={togglePolyBlock}>PolyBlock - Mobile Game</ModalHeader>
                    <ModalBody>
                        <div class="container">
                            <div class="row justify">
                                This was a hypercasual mobile game I coded using the Unity Engine and the
                                C# programming language. This project involved the use of animations, cross
                                platform programming, implementation of advertisement features and UI design.
                                The game is available for both Android and IOS, and it has a 4.8 rating in the
                                Apple App Store.
                        </div>
                            <div class="row skills">
                                <span>Skills: <strong>C#, Unity Engine, Unity Ads, Photoshop CC</strong></span>
                            </div>
                            <div class="row text-center">
                                <div class="col-md-4 col-xs-12"><img src={PolyBlock} /></div>
                                <div class="col-md-4 col-xs-12"><img src={PolyBlock} /></div>
                                <div class="col-md-4 col-xs-12"><img src={PolyBlock} /></div>
                            </div>
                        </div>
                        <div className="modal-bttns">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-4">
                                        <ul>
                                            <a href="https://github.com/machadop1407/Polyblock---Mobile-Game" target='_blank'><li><i class="fa fa-github" />   Github <span></span><span></span><span></span><span></span></li></a>
                                        </ul>
                                    </div>

                                    <div class="col-md-4">
                                        <a href='https://play.google.com/store/apps/details?id=com.pedromachado.polyblock&hl=en&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target='_blank'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' /></a>
                                        <a href='https://apps.apple.com/us/app/poly-block/id1475162422' target='_blank'><img alt='Get it on Apple Store' id="apple-badge" src={AppleBadge} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </div>

                <ModalFooter>
                    <button color="#802BB1" onClick={togglePolyBlock}>Cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
