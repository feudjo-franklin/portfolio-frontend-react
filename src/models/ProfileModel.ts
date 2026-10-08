class ProfileModel {
    id: number;
    email?: string;
    firstname?: string;
    lastname?: string;
    qualification?: string;
    authorities?: string;
    githubLink?: string;
    publicLinks?: string[];
    
    constructor (id: number, email: string, firstname: string, lastname: string, qualification: string, authorities: string, githubLink: string, publicLinks: string[]){
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.qualification = qualification;
        this.authorities = authorities;
        this.githubLink = githubLink;
        this.publicLinks = publicLinks;
    }
}

export default ProfileModel;