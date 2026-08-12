import React, { useEffect, useState } from "react"
import { Buffer } from "buffer";
import ProjectModel from "../../../models/ProjectModel"
import { fetchGetDataArrayBuffer } from "../../../client/client";

export const ProjectCard: React.FC<{project: ProjectModel}> = (props) => {

    const [mainPhotoContent, setMainPhotoContent] = useState("");

    //const downloadLink: string = props.project.mainPhoto.downloadLink;
    //const downloadLink = "/projects/1/photos/4/download-photo";

    useEffect(() => {

        const downloadLink: string = props.project.mainPhoto.downloadLink;
        console.log("The download link is : ", downloadLink)
        if (downloadLink){
            fetchGetDataArrayBuffer(downloadLink)
            .then( (response: any) => { 

                const buffer = Buffer.from(response.data, 'binary').toString('base64');
                setMainPhotoContent(buffer);
                //console.log(mainPhotoContent);
            });
        }

        
    }, []);

    return (
    <>   
        {mainPhotoContent? 
            (<img src={`data:image/jpeg;base64,${mainPhotoContent}`} className="card-img-top" alt={props.project.title} />)
            :
            (<img src="https://picsum.photos/300/150?random=1" className="card-img-top" alt={props.project.title} />)            
        }
        <div className="card-body">
            <h5 className="card-title">{props.project.title}</h5>
            <p className="card-text">{props.project.description}</p>
            <a className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target={`#project${props.project.id}Info`}
                aria-controls="project1Info">Find out more</a>
        </div>
    </> 
    )
}