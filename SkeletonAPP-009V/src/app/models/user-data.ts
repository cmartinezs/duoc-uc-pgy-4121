export class UserData {
    name: string;
    lastname: string;
    edLevel: string;
    birthday: string;

    constructor(name: string, lastname: string, edLevel: string, birthday: string) {
        this.name = name;
        this.lastname = lastname;
        this.edLevel = edLevel;
        this.birthday = birthday;
    }
}