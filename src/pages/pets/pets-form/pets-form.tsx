import dayjs from "dayjs";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IPet } from "../../../model/pet-model"
import { defaultPet } from "../../../utils/pet.utils";



export const PetsForm = () => {
    
    const {
        register,
        watch,
        handleSubmit,
        setValue,
        formState: {isValid},
    } = useForm({
        mode: "onChange",
        defaultValues: defaultPet,
    });

    const watchAnimal = watch("breed");
    
    const onSubmit = (data:IPet ) => {
        console.log(data);
    };

    const now = dayjs().format("YYYY-MM-DD");

    useEffect(() => {
        setValue("type", null, { shouldValidate: true});
    }, [watchAnimal]);
    
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

                {watchAnimal && (
                    <div className="rowForm">
                        <select
                        {...register("breed", {
                            required: {value: true, message:"Field required"},
                        })}
                    >
                
                {watchAnimal === "DOG" ? (
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
        </form>
    </div>
    )
}