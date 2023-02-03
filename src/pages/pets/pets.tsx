import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../contants";
import { IPet } from "../../model/pet-model";
import { PetsCard } from "./pets-card";


type TPetState = {
    loading: boolean;
    error:boolean,
    pets: IPet[] | null;
};


export const Pets = () => {
    const [petState, setPetState] = useState<TPetState> ({
        loading: false,
        error:false,
        pets: null,
    });

    const fetchPet = async () => {
        setPetState({
            ...petState,
            loading: true,
        });

        try {
            const res = await axios.get(`${API_URL}`);
            const data: IPet[] = res.data;
            setPetState ( {
                ...petState,
                pets: data,
                loading: false,
            });

        } catch (e) {
            setPetState ({
                ...petState,
                loading: false,
                error: true,
        });
      }
    };

    useEffect(() => {
        fetchPet();
    }, []);
     
    return (
     <div className="pets"> 
        <h1> Pets</h1>
       <div className="pets-list">
        {petState.loading &&  "Loading"}
        {petState.error && "Error" }
        {petState.pets?.length === 0 && "No pets found"}
        {petState.pets?.map(pets => (
            <PetsCard key={pets._id} pet= {pets} />
        ))}
       </div>
    </div>
    );
};