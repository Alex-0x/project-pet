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
   // const navigate = useNavigate();
    const {
        register,
        watch,
        handleSubmit,
        setValue,
        reset,
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
        
    }, []);

    useEffect(() => {
        setValue("pedigree", false, { shouldValidate: true});
        
     }, []);
    
  
    const onSubmit = async (data:IPet ) => {
        const res = await axios.post(`${API_URL}`, data);
    alert("You have created a new pet post")      
        console.log(res)
        console.log(data);
    reset(defaultPet);
           
    };
//pedigree btn
    const [newPedigree, setNewPedigree] = useState<any>({
       btnTrue: true,
       btnFalse: false,
    })
//pedigree btn
    const handleInput = (event: any) => {
        setNewPedigree({
            ...newPedigree,
            [event.target.name]: event.target.value,
            
        });
    }


    const now = dayjs().format("YYYY-MM-DD");

    useEffect(() => {
        //setValue("breed", null, { shouldValidate: true});
        console.log(watchType);
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
                        <option value="">Breed</option>
                        <option value="DOG">DOG</option>
                        <option value="CAT">CAT</option>
                    </select>
                </div>

                {watchType && (
                    
                    <div className="row">
                        <label className="queryInput" htmlFor="select2">Choose the breed:</label>
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
    <button 
             id="btnTrue"
                name="btnTrue"
                     type="button" 
                     className="btnPedigreeTrue" 
                     onChange={(event) =>setNewPedigree(event)}
                 value={newPedigree.pedigree}
             onClick={ () => {setValue("pedigree", true ,
             {shouldValidate: true})  
            }}>Yes
    </button>

    <button
             id="btnFalse"
                 name="btnFalse"
                    type="button" 
                     className="btnPedigreeFalse" 
                     onChange={(event) =>setNewPedigree(event)}
                     value= {newPedigree.pedigree}
                     onClick={ () => 
                 {setValue("pedigree", false ,
             {shouldValidate: true})  
         }}>No
    </button>
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


