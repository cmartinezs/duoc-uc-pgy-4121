export class Result {
    id: number;
    name: string;
    species: string;
    image: string;

    constructor(id: number, name: string, species: string, image: string) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.image = image;
    }
}
