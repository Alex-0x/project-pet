import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../../contants";
import { IPet } from "../../model/pet-model";
import { defaultPet } from "../../utils/pet.utils";
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


const [searchInput, setSearchInput] = useState([]);

     
    return (
     <div className="pets"> 
        <h1 className="titlePage"> Pets</h1>
        <label htmlFor="search" className="searchTitle">Search your favorite pets</label>
        <input type="search" id="search" name="search" className="searchTxt"/>
        <input 
        type="submit" className="searchBtn" value="Search" 
        ></input>
        
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