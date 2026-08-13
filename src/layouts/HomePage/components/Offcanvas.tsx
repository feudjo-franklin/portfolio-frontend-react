import React from "react";
import ProjectModel from "../../../models/ProjectModel";
import { Carousel } from "./Carousel";

export const Offcanvas: React.FC<{project: ProjectModel}> = (props) => {
    return (
        <div className="offcanvas offcanvas-bottom h-100" tabIndex={-1} id={`project${props.project.id}Info`}
            aria-labelledby={`project${props.project.title}Info`}>
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="project1Title">{props.project.title}</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            {/* <!-- Carousel --> */}
            <Carousel project={props.project} />
        </div>
    </div>
    )
}