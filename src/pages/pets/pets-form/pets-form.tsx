import axios from "axios";
import dayjs from "dayjs";
import { type } from "os";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../../contants";
import { IPet } from "../../../model/pet-model"
import { defaultPet } from "../../../utils/pet.utils";

export const PetsForm = () => {
    const navigate = useNavigate();
    const {
        register,
        watch,
        handleSubmit,
        setValue,
        formState: {isValid, errors},
    } = useForm({
        mode: "onChange",
        defaultValues: defaultPet,
    });

    const watchType = watch("type");
    const watchImage = watch("imgUrl");
    const watchPedigree = watch("pedigree");
    
    
  
    useEffect(() => {
        setValue("pedigree", true, { shouldValidate: true});
    }, [watchPedigree]);

    useEffect(() => {
        setValue("pedigree", false, { shouldValidate: true});
    }, [watchPedigree]);
    
  
    const onSubmit = async (data:IPet ) => {
        const res = await axios.post(`${API_URL}`, data);
              
        console.log(res)
        console.log(data);
        
    };


    const now = dayjs().format("YYYY-MM-DD");

    useEffect(() => {
        //setValue("breed", null, { shouldValidate: true});
        console.log(watchType);
    }, [watchType]);


    
    return (
        <div className="pet-Form">
            <h1>Add a new Pets</h1>

            <form>

                <div className="rowForm">
                    <select 
                    {...register("type", {
                        required: {value: true, message:"Field required"}
                    })}
                    >
                        <option value="">Breed</option>
                        <option value="DOG">DOG</option>
                        <option value="CAT">CAT</option>
                    </select>
                </div>

                {watchType && (
                    <div className="rowForm">
                        <select
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
        <label htmlFor="name">Insert Name</label>
        <input id="name"
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
        <label htmlFor="data">Insert your pet birthdate </label>
        <input 
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
       <label htmlFor="image">Insert image url</label>
    <input
    id="image"
    {...register("imgUrl", {
    required: { value: true, message: "Field required" },
     })}
     placeholder="Image"
     />
       {errors.imgUrl && errors.imgUrl?.message}
    </div>

     <div className="row">
     {watchImage && (
     <img className="preview-image" src={watchImage} alt="" />
    )}
    </div>

    <div>
    <label htmlFor="pedigree">Does your pet have a pedigree ?</label>

        <input    
        id="pedigree"
        type="hidden" 
        {...register("pedigree")}
        
        />
    <button type="button" className="btnPedigreeTrue" onClick={ () => {setValue("pedigree", true , {shouldValidate: true})  }}>Yes</button>
    <button type="button" className="btnPedigreeFalse" onClick={ () => {setValue("pedigree", false , {shouldValidate: true})  }}>No</button>
    </div>

    <div>
        <input 
        type="text" className="petStory"
        id="description"
        {...register("description", {
        required: { value: true, message: "Field required" },
         })}
         placeholder="description"
         />
           {errors.description && errors.description.message}
        
    </div>
    
  

     <button className="btnSend" disabled={!isValid} onClick={handleSubmit(onSubmit)}>
    Send
    </button>

  </form>
</div>
    )
}


