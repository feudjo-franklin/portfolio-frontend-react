export default class ClientModel {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
    profileUuid: string;
    
    constructor (firstname: string, lastname: string, email: string, message: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.message = message;
        this.profileUuid = "";
    }
}