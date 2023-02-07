import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { API_URL } from "../../../contants";
import { IPet } from "../../../model/pet-model";


    
    type TCurrentPetState = {
        pet: IPet | null;
        loading: boolean;
        error: boolean;
    };

    export const PetsDetail = () => {
        const params = useParams();
        const location = useLocation();

        const id = params.id;

        const pet: IPet = location.state;

        const [currentPetState, setCurrentPetState] = useState<TCurrentPetState> ({
            pet,
            loading: false,
            error: false
        });

        const fetchPetById = async () => {
            setCurrentPetState({
                ...currentPetState,
                loading: true,
            });

            try {
                const res = await axios.get (`${API_URL}/${id}`);

                setCurrentPetState({
                    ...currentPetState,
                    loading: false,
                    pet: res.data,
                });
            } catch (e) {
                setCurrentPetState({
                    ...currentPetState,
                    loading: false,
                    error: true,
                });
            }
        };
    
    useEffect(() => {
        !pet && fetchPetById();
    }, []);
    
    return (
        <div className="petsDetails">
            
            {currentPetState.loading && "Loading"}
            {currentPetState.error && " Error Loading "}
            {currentPetState.pet && 
            `${currentPetState.pet?._id}`} 
        </div>
    );
};
