import React from 'react'
import '../Styles/aboutMe.css'


const AboutMe = () => {
    return (
        <div className="container-fluid about-me">
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <h1>Dev Skills <li className="fa fa-code"></li></h1>
                    <hr />
                    <div className="row">
                        <div className="col-lg-5">
                            <ul>
                                <b>Front-End</b>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                                <li>Jquery</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <ul> <b>Back-End</b>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>MySQL</li>
                                <li>Google Cloud (API, Storage...)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <h1>Other Habilities</h1>
                    <hr />
                    <ul> 
                        <li>PhotoShop CC</li>
                        <li>Unity Game Dev in C#</li>
                        <li>Mobile Dev with JAVA</li>
                        <li>Magic</li>
                        <li>Speed Solving Rubix Cube</li>
                    </ul>
                </div>

                <div className="col-lg-3">
                    <h1>Skills</h1>
                    <hr />
                    <ul> Life
                        <li>Idk</li>
        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe