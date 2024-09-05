export class User {
    username: string;
    password: string;
    name!: string;
    lastname!: string;

    constructor(u: string, p: string){
        this.username = u;
        this.password = p;
    }
}
