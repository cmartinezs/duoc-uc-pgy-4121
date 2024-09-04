export class User {
    username: string;
    email: string;
    password: string;

    constructor(u: string, e: string, p: string){
        this.username =  u;
        this.email = e;
        this.password = p;
    }
}
