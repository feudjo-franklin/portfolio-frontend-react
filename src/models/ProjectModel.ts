import { PhotoModel } from "./PhotoModel";

class ProjectModel {
    id: number;
    title: string;
    description: string;
    mainPhoto: PhotoModel;
    photos?: PhotoModel[];
    techStacks?: string[];


    constructor (id: number, title: string, description: string, mainPhoto: PhotoModel, photos: PhotoModel[], techStacks: string[]){
        this.id = id;
        this.title = title;
        this.description = description;
        this.mainPhoto = mainPhoto;
        this.photos = photos;
        this.techStacks = techStacks;
    }
}

export default ProjectModel;