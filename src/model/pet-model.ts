export interface IPet {

_id: string,
name: string,
type: "DOG" | "CAT" | null,
breed: string,
birthDate: string,
};

interface IPetCreated extends IPet {
    created_at: string,
    updated_at: string,
};

