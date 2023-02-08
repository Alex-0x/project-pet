import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { API_URL } from "../../contants";
import { IPet } from "../../model/pet-model";
import { defaultPet } from "../../utils/pet.utils";
import { Pets } from "./pets";


export const PetCardEdit = () => {
 const params = useParams();
 const id = params._id;
  
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


useEffect(() => {
 const search = async () => {
    const res = await axios.put(`${API_URL}`);
}
}
)


  return (
    <div className="detail">
      <div>
        <label htmlFor="NameEdit"> Name: </label> 
        <input type="text"
        placeholder= {defaultPet._id}
        />
      </div>
      <div>
       <label htmlFor="birthDateEdit"> BirthDate: </label>
       <input type="date" />
      </div>
      <div>
       <label htmlFor="typeEdit"> Type: </label>
       <input type="text" />
      </div>
      <div>
       <label htmlFor="breedEdit"> Breed: </label>
       <input type="text" />
      </div>
      <div>
       <label htmlFor="ImgUrlEdit"> Img: </label>
       <input type="text" />
      </div>
      <div>
       <label htmlFor="DescriptionEdit"> Description: </label>
       <input type="text" />
      </div>
      <div>
       <label htmlFor="PedigreeEdit"> Pedigree: </label>
       <input type="checkbox" />
      </div>

      <button>Edit</button>
    </div>
  );
};