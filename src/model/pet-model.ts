export interface IPet {

_id?: "",
name: "",
type: "" ,
breed: "" ,
birthDate: "",
imgUrl: "",
pedigree?: false ,
description: "",
};

interface IPetCreated extends IPet {
    created_at: string,
    updated_at: string,

};



