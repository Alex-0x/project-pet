import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { API_URL } from "../../contants";
import { IPet } from "../../model/pet-model";
import { defaultPet } from "../../utils/pet.utils";
import { Pets } from "./pets";
import { PetsForm } from "./pets-form/pets-form";

type TCurrentPetState = {
  pet: IPet;
  loading: boolean;
  error: boolean;
  deleting: boolean;
};

export const PetCardEdit = () => {
  const location = useLocation();
 const params = useParams();
 const pet: IPet = location.state;
 const _id = defaultPet._id;
 

 const [currentPetState, setCurrentPetState] = 
   useState<TCurrentPetState>({
    pet,
    loading: false,
    error: false,
    deleting: false,
   });
  
  const fetchPetById = async () => {
    setCurrentPetState ({
      ...currentPetState,
      loading: true,
    });

    try {
      const res = await axios.get(`${API_URL}/${_id}`);

      setCurrentPetState({
        ...currentPetState,
        loading: false,
        pet: res.data,
      });
    }catch(e) {
      setCurrentPetState({
        ...currentPetState,
        loading: false,
        error:true,
      })
    }
  };
  useEffect(() => {
    !pet && fetchPetById();
  },[]);

  return (
    
    <div>
    
    {currentPetState.loading && "Loading"}
    {currentPetState.error && "Error"}
    {currentPetState.pet && 
    <PetsForm defaultValues={currentPetState.pet}/>
    }
    </div>
  );
};