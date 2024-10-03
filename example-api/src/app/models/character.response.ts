import { Character } from "./character";

export class CharacterResponse {
    results: Character[];

    constructor(results: Character[]) {
        this.results = results;
    }
}