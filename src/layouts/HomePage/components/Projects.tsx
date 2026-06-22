import { useEffect, useState } from "react"
import ProjectModel from "../../../models/ProjectModel"
import { SpinnerLoading } from "../../../Utils/SpinnerLoading";
import { ProjectCard } from "./ProjectCard";
import { Offcanvas } from "./Offcanvas";

export const Projects = () => {

    const [projects, setProjects] = useState<ProjectModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl: string = "http://localhost:8080/api/projects";

            ///const url: string = `${baseUrl}?page=0&size=9`;

            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();

            const responseData = responseJson._embedded.projects;

            const loadedProjects: ProjectModel[] = [];

            for (const key in responseData) {
                loadedProjects.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    description: responseData[key].description
                });
            }

            setProjects(loadedProjects);
            setIsLoading(false);
        };
        fetchBooks().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    if (isLoading) {
        return (
            <SpinnerLoading />
        )
    }

    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        )
    }

    return (
        <section id="portfolio" className="py-5">
            <div className="container">
                <h2 className="mb-0">My portfolio</h2>
                <h3 className="fw-light fs-5">Personal and professional projects</h3>

                <div className="row gy-4 gy-md-0 mt-4">
                    {projects.map(project => (
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card">
                                <ProjectCard project={project} key={project.id}/>
                                <Offcanvas project={project} key={project.id} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}