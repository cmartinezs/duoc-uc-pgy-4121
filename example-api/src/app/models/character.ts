export class Character {
    id: number;
    name: string;
    species: string;
    image: string;
    gender: string;

    constructor(id: number, name: string, species: string, image: string, gender: string) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.image = image;
        this.gender = gender;
    }

}