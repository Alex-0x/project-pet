import { IPet } from "../model/pet-model";

export const defaultPet: IPet = {
    
    name: "",
    type: "DOG" || "CAT" || null,
    breed: "",
    birthDate: "",
    imgUrl: "",
    pedigree: false,
    description: "",
};