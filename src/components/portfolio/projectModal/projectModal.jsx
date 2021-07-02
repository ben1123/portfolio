import React from 'react';
import './projectModal.scss';

import { Cancel, GitHub, Pageview } from '@material-ui/icons';

export default function ProjectModal(props) {

    //will receive detail about the project
    //fetch the data from API using projectId

    return (
        <div className="project-modal">
        <Cancel className="cancel-button" onClick={() => props.onCancel()}/>
        <div className="project-left">
            <h2 className="project-title">Project Title</h2>
            <div className="project-description">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates id dolores porro fugit eligendi incidunt, cupiditate magni aliquam illo itaque similique ut sunt, laudantium iure, repudiandae recusandae adipisci deleniti.</p>
            </div>
            <div className="project-technologies">
                <span className='section-label'>Technologies</span>
                <ul>
                    <li>Angular</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className="project-view">
                <span className='section-label'>Preview</span>
                <div className="view-github">
                    <GitHub className="icon" /> <a href="">https://github.com/ben1123/ben1123</a>
                </div>
                <div className="view-page">
                    <Pageview  className="icon"/> <a href="">https://github.com/ben1123/ben1123</a>
                </div>
            </div>
        </div>

        <div className="project-right">
            <div className="project-banner">
                <img src="assets/images/app.jpg" alt="" />
            </div>
        </div>

    </div>
    )
}
