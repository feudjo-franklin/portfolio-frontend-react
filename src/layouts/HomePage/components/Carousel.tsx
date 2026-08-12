import { useEffect, useState } from "react";
import ProjectModel from "../../../models/ProjectModel";
import { PhotoModel } from "../../../models/PhotoModel";
import { fetchGetDataArrayBuffer } from "../../../client/client";
import { Buffer } from "buffer";
import { PhotoViewModel } from "../../../models/PhotoViewModel";
import { CarouselItem } from "./CarouselItem";

export const Carousel: React.FC<{project: ProjectModel}> = (props) => {

    const [photoViewModelList, setPhotoViewModelList] = useState<PhotoViewModel[]>([]);

    useEffect(() => {

        const loadPhotos = async () => {

            const photos = await Promise.all(

                props.project.photos!.map(async (photo: PhotoModel) => {


                    const response = await fetchGetDataArrayBuffer(photo.downloadLink);
                

                    const buffer = Buffer.from(response.data, 'binary').toString('base64');
                    
                    return new PhotoViewModel(
                                photo.id,
                                photo.name,
                                photo.description,
                                buffer
                            )
               
                })

            );

            setPhotoViewModelList(photos);
        }
        
        loadPhotos()

    }, []);

    return (
        <div id={`carouselProject${props.project.id}`} className="carousel slide shadow h-100"
            data-bs-ride="carousel" data-bs-touch="true">
            <div className="carousel-inner h-100">
                
                {photoViewModelList.length > 0 &&
                    photoViewModelList.map((photo: PhotoViewModel, index: number) => (

                        <CarouselItem key={photo.id} photo={photo} index={index} />

                    ))
                }
                
                
            </div>
            <button className="carousel-control-prev" type="button"
                    data-bs-target={`#carouselProject${props.project.id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button"
                    data-bs-target={`#carouselProject${props.project.id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}