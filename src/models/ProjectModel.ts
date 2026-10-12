import { PhotoModel } from "./PhotoModel";

class ProjectModel {
    id: number;
    title: string;
    description: string;
    mainPhoto: PhotoModel;
    photos?: PhotoModel[];
    githubLink?: string;
    techStacks?: string[];


    constructor (id: number, title: string, description: string, mainPhoto: PhotoModel, photos: PhotoModel[], githubLink: string, techStacks: string[]){
        this.id = id;
        this.title = title;
        this.description = description;
        this.mainPhoto = mainPhoto;
        this.photos = photos;
        this.githubLink = githubLink;
        this.techStacks = techStacks;
    }
}

export default ProjectModel;