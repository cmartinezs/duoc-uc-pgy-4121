import { Info } from "./info";
import { Result } from "./result";

export class CharactersResponse {
    info: Info
    results: Result[]

    constructor(info: Info, results: Result[]) {
        this.info = info;
        this.results = results;
    }
}
