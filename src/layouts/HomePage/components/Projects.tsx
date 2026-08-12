import { useEffect, useState } from "react"
import ProjectModel from "../../../models/ProjectModel"
import { SpinnerLoading } from "../../../Utils/SpinnerLoading";
import { ProjectCard } from "./ProjectCard";
import { Offcanvas } from "./Offcanvas";
import { useLocation } from "react-router-dom";
import { fetchGetData } from "../../../client/client";
import { PhotoModel } from "../../../models/PhotoModel";

export const Projects = () => {

    const [projects, setProjects] = useState<ProjectModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    //const [httpError, setHttpError] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let unique_uid = queryParams.get("unique_uid");

    useEffect(() => {

        fetchGetData(`/profiles/${unique_uid}/projects`)
        .then((response: any) => {
            console.log(response.data);

            const responseJson = response.data;

            const loadedProjects: ProjectModel[] = [];

            for(const key in responseJson){

                const loadedMainPhoto: PhotoModel = {
                    id: responseJson[key].mainPhotoDTO.id,
                    name: responseJson[key].mainPhotoDTO.name,
                    description: responseJson[key].mainPhotoDTO.description,
                    fileName: responseJson[key].mainPhotoDTO.fileName,
                    downloadLink: responseJson[key].mainPhotoDTO.download_link
                }
                console.log("main photo link: ", loadedMainPhoto.downloadLink)
                const loadedPhotos: PhotoModel[] = [];

                for(const key2 in responseJson[key].photoDTOS){
                    const photo: PhotoModel = {
                        id: responseJson[key].photoDTOS[key2].id,
                        name: responseJson[key].photoDTOS[key2].name,
                        description: responseJson[key].photoDTOS[key2].description,
                        fileName: responseJson[key].photoDTOS[key2].fileName,
                        downloadLink: responseJson[key].photoDTOS[key2].download_link
                    }
                    loadedPhotos.push(photo);
                }

                loadedProjects.push(
                    {
                        id: responseJson[key].id,
                        title: responseJson[key].title,
                        description: responseJson[key].description,
                        mainPhoto: loadedMainPhoto,
                        photos: loadedPhotos,
                        techStacks: responseJson[key].techStackDTOS
                    }
                );
            }

            setProjects(loadedProjects);
            setIsLoading(false);

        })

    }, []);


    if (isLoading) {
        return (
            <SpinnerLoading />
        )
    }    
        

    return (
        <section id="portfolio" className="py-5">
            <div className="container">
                <h2 className="mb-0">My portfolio</h2>
                <h3 className="fw-light fs-5">Personal and professional projects</h3>

                <div className="row gy-4 gy-md-0 mt-4">
                    {projects.map((project: ProjectModel) => (
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