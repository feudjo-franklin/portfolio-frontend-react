import React from "react";
import ProjectModel from "../../../models/ProjectModel";
import { Carousel } from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Offcanvas: React.FC<{ project: ProjectModel }> = (props) => {
    return (
        <div
            className="offcanvas offcanvas-bottom"
            tabIndex={-1}
            id={`project${props.project.id}Info`}
            aria-labelledby={`project${props.project.title}Info`}
            style={{ height: "100vh" }}   // 👈 hauteur fixe écran (pas de h-100)
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="project1Title">
                    {props.project.title}
                </h5>
                <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column">

                {/* --- Carousel (hauteur limitée) --- */}
                <div style={{ height: "70vh", flexShrink: 0 }}>
                    <Carousel project={props.project} />
                </div>

                {/* --- Tech Stacks --- */}
                {props.project.techStacks && props.project.techStacks.length > 0 && (
                    <div className="mt-4">
                        <h6 className="fw-bold mb-2">Tech Stack</h6>
                        <div className="d-flex flex-wrap gap-2">
                            {props.project.techStacks.map((tech: string, index: number) => (
                                <span
                                    key={index}
                                    className="badge bg-primary bg-opacity-10 text-primary border border-primary"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- Lien GitHub --- */}
                {props.project.githubLink && (
                    <div className="mt-4">
                        <a
                            href={props.project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-dark d-inline-flex align-items-center"
                        >
                            <FontAwesomeIcon icon={faGithub} className="me-2" />
                            View on GitHub
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};