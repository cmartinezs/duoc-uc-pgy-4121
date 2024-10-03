export class Character {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;

    constructor(id: number, name: string, status: string, species: string, image: string) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.species = species;
        this.image = image;
    }
}