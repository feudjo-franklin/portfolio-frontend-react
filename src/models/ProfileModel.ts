import SocialNetworkModel from "./SocialNetworkModel";

class ProfileModel {
    id: number;
    email?: string;
    firstname?: string;
    lastname?: string;
    qualification?: string;
    authorities?: string;
    githubLink?: string;
    socialNetworks?: SocialNetworkModel[];
    
    constructor (id: number, email: string, firstname: string, lastname: string, qualification: string, authorities: string, githubLink: string, socialNetworks: SocialNetworkModel[]){
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.qualification = qualification;
        this.authorities = authorities;
        this.githubLink = githubLink;
        this.socialNetworks = socialNetworks;
    }
}

export default ProfileModel;