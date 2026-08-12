class ProfileModel {
    id: number;
    email?: string;
    firstname?: string;
    lastname?: string;
    qualification?: string;
    authorities?: string;
    publicLinks?: string[];
    
    constructor (id: number, email: string, firstname: string, lastname: string, qualification: string, authorities: string, publicLinks: string[]){
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.qualification = qualification;
        this.authorities = authorities;
        this.publicLinks = publicLinks;
    }
}

export default ProfileModel;