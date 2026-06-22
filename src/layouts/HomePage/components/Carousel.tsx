import ProjectModel from "../../../models/ProjectModel";

export const Carousel: React.FC<{project: ProjectModel}> = (props) => {
    return (
        <div id={`carouselProject${props.project.id}`} className="carousel slide shadow h-100"
            data-bs-ride="carousel" data-bs-touch="true">
            <div className="carousel-inner h-100">
                <div className="carousel-item h-100 active" data-bs-interval="10000">
                    <img src="https://picsum.photos/1920/1080?random=1"
                            className="d-block w-100" alt="Image slide 1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Slide 1</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                            sollicitudin.</p>
                    </div>
                </div>
                <div className="carousel-item h-100" data-bs-interval="2000">
                    <img src="https://picsum.photos/1920/1080?random=2"
                            className="d-block w-100" alt="Image slide 2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Slide 2</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                            sollicitudin.</p>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <img src="https://picsum.photos/1920/1080?random=3"
                            className="d-block w-100" alt="Image slide 3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Slide 3</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                            sollicitudin.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button"
                    data-bs-target="#carouselProject1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button"
                    data-bs-target="#carouselProject1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}