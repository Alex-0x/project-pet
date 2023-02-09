import axios from "axios";
import dayjs from "dayjs";
import { type } from "os";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../../contants";
import { IPet } from "../../../model/pet-model"
import { defaultPet } from "../../../utils/pet.utils";
import { Pets } from "../pets";

type Nprops = {
    defaultValues: IPet;
   
};

type TPostPetlState = {
    saving: boolean;
    error: boolean;
}


export const PetsForm = (props : Nprops) => {
   const navigate = useNavigate();
    const {
        register,
        watch,
        handleSubmit,
        setValue,
        formState: {isValid, errors},
    } = useForm({
        mode: "onChange",
        defaultValues: props.defaultValues
    });
   
    const [petState, setPetState] = useState<TPostPetlState>({
        saving: false,
        error: false,
    });

    const watchType = watch("type");
    const watchImage = watch("imgUrl");

    
    useEffect(() => {
        setValue("pedigree", false, { shouldValidate: true});
        
     }, []);
         
    const onSubmit= async (data: IPet) => {
        console.log(data);
      
        setPetState({
            ...petState,
            saving: false,
        });
       
       try{
        
        const res = props.defaultValues._id

       ? await axios.put(`${API_URL}/${data._id}`, data) : await axios.post(`${API_URL}`, data);
        
    alert("You have created a new pet post")  

    setPetState({
        ...petState,
        saving: true, 
        error: false,
    });
    navigate(`/pets/${res.data._id}`);
    

       } catch (error) {
        setPetState({
            ...petState,
            saving: false,
            error: true,
        });
       }
            
};

    const now = dayjs().format("YYYY-MM-DD");

    useEffect(() => {
        setValue ("breed", null, {shouldValidate: true});
        

    }, [watchType]);


    

    
    return (
        <div className="pet-Form">
            <h1 className="titleForm">Add a new Pets</h1>

            <form className="formOne">

                <div className="row">
                    <label className="queryInput" htmlFor="select">Choose the type:</label>
                    <br />

                    <select className="selector" 
                    {...register("type", {
                        required: {value: true, message:"Field required"}
                    })}
                    >
                        <option value="">Type</option>
                        <option value="DOG">DOG</option>
                        <option value="CAT">CAT</option>
                    </select>
                </div>

                {watchType && (   

                    <div className="row">
                        <label className="queryInput" htmlFor="select2"
                        >Choose the breed:</label>

                        <br />
                        <select className="selector"
                        {...register("breed", {
                            required: {value: true, message:"Field required"},
                        })}
                        
                    >
                
                {watchType === "DOG" ? (
                    <>
                    <option value="">Breed</option>
                    <option value="Pitbull">Pitbull</option>
                    <option value="Jack Russel">Jack Russel</option>
                    </>
                ) : (
                    <>
                    <option value="">Breed</option>
                    <option value="Persian">Persian</option>
                    <option value="Siamese">Siamese</option>
                    </>
                )}
                </select>
        </div>
    )}

    <div className="row">
        <label className="queryInput" htmlFor="name">Insert pet name:</label>
        <br />
        <input 
        className="input" 
        id="name"
        {...register("name", {
            required:{value: true, message:"Field required"},
            minLength:{value: 1, message: "Min 1 character allowed"},
            maxLength: {value: 20, message: "Max 20 character allowed"},
        })}
        placeholder= "name"
            />
            {errors.name && errors.name?.message}
    </div>
    
    <div className="row">
        <label className="queryInput" htmlFor="data">Insert your pet birthdate: </label>
        <br />
        <input 
        className="input"
            id="birthdate"
            type="date"
            max = {now}
            {...register("birthDate", {
                required: {value: true, message: "field required" },
        })}
        placeholder= "Birthdate"
        />
        {errors.birthDate && errors.birthDate?.message}
    </div>

    <div className="row">
       <label className="queryInput" htmlFor="image">Insert image url :</label>
       <br />
    <input
    className="input"
    id="image"
    {...register("imgUrl", {
    required: { value: true, message: "Field required" },
     })}
     placeholder="Image"
     />
       {errors.imgUrl && errors.imgUrl?.message}
    
     {watchImage && (
     <img className="preview-image" src={watchImage} alt="" />
    )}
    </div>

    <div className="row">
    <label className="queryInput" htmlFor="pedigree">Does your pet have a pedigree ?</label>

        <input
        className="input"    
        id="pedigree"
        type="checkbox" 
        {...register("pedigree")}
        
        
        />
        <br />
    
    </div>

    <div className="row">
        <label className="queryInput" htmlFor="description">Insert a description about your pet :</label>
        <br />
        <input 
        className="inputDescription"
        type="text" 
        id="description"
        {...register("description", {
        required: { value: true, message: "Field required" },
         })}
         placeholder="description"
         />
           {errors.description && errors.description.message}
        
    </div>

        <div className="row">
            <button className="btnSendForm" disabled={!isValid} onClick={handleSubmit(onSubmit)}>
               Send
            </button>
        </div>

  </form>
</div>
    )
}


