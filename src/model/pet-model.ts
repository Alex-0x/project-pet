import { Url } from "url";

export interface IPet {

_id?: string,
name: string,
type: "DOG" | "CAT" | null,
breed: string,
birthDate: string,
imgUrl: string,
pedigree: boolean,
description: string,
};

interface IPetCreated extends IPet {
    created_at: string,
    updated_at: string,
};

