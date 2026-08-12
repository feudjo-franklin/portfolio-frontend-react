export class PhotoViewModel {
    _id: number;
    _name: string;
    _description: string;
    _content: string;

    constructor(theId: number, theName: string, theDescription: string, theContent: string){
        this._id = theId;
        this._name = theName;
        this._description = theDescription;
        this._content = theContent;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get content(): string {
        return this._content;
    }

    public set content(value: string) {
        this._content = value;
    }
}