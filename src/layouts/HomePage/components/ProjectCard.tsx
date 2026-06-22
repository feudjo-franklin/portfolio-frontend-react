import React from "react"
import ProjectModel from "../../../models/ProjectModel"

export const ProjectCard: React.FC<{project: ProjectModel}> = (props) => {
    return (
    <>   
        <img src="https://picsum.photos/300/150?random=1" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.project.title}</h5>
            <p className="card-text">{props.project.description}</p>
            <a className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target={`#project${props.project.id}Info`}
                aria-controls="project1Info">Find out more</a>
        </div>
    </> 
    )
}