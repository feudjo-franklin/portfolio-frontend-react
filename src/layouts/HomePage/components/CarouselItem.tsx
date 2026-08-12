import { PhotoViewModel } from "../../../models/PhotoViewModel"

export const CarouselItem: React.FC<{photo: PhotoViewModel, index: number}> = (props) => {

    return (
        <div className={`carousel-item h-100 ${props.index === 0 ? "active" : ""}`} data-bs-interval="10000">
            {props.photo.content ?
                <img src={`data:image/jpeg;base64,${props.photo._content}`}
                    className="d-block w-100" alt={props.photo.name} />
                :
                <img src="https://picsum.photos/1920/1080?random=1"
                    className="d-block w-100" alt={props.photo.name} />
            }
        
            <div className="carousel-caption d-none d-md-block">
                <h5>{props.photo.name}</h5>
                <p>{props.photo.description}</p>
            </div>
        </div>
    )
}