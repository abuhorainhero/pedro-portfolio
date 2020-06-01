import React, {Component } from 'react'
import '../../Styles/individualProjectStyle.css'

const IndividualProject = ({imgPath, projectName}) => {
    return (
        <div>
            <div class="card__collection clear-fix">
                <div class="cards cards--two">
                    <img src={imgPath} class="img-responsive" alt="Cards Image" />
                        <span class="cards--two__rect"></span>
                        <span class="cards--two__tri"></span>
                        <p>{projectName}</p>
                        <ul class="cards__list">
                            <li><i class="fab fa-facebook-f"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default IndividualProject