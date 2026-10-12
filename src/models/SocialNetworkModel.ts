class SocialNetworkModel {
    id: number;
    name: string;
    iconId: string;
    url: string;
    displayOrder: number;

    constructor (id: number, name: string, iconId: string, url: string, displayOrder: number) {
        this.id = id;
        this.name = name;
        this.iconId = iconId;
        this.url = url;
        this.displayOrder = displayOrder;
    }
}

export default SocialNetworkModel;