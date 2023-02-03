import { IPet } from "../model/pet-model";

export const defaultPet: IPet = {
    _id: "",
    name: "",
    type: "DOG" || "CAT" || null,
    breed: "",
    birthDate: "",
};