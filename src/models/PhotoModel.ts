export class PhotoModel {
    id: number;
    name: string;
    description: string;
    fileName: string;
    downloadLink: string;

    constructor(id: number, name: string, description: string, fileName: string, downloadLink: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.fileName = fileName;
        this.downloadLink = downloadLink;
    }
}