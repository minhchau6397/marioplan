import React from 'react';
import { Link } from 'react-router-dom'

import moment from 'moment'

function ProjectSummary({ project }) {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <Link to={'/project/' + project.id}>
                    <span className="card-title">{project.title}</span>
                </Link>
                <p>Posted by {project.authFirstName} {project.authLastName}</p>
                <p className="grey-text">{moment(project.createAt.toDate()).calendar()}</p>
            </div>
        </div>
    );
}

export default ProjectSummary;