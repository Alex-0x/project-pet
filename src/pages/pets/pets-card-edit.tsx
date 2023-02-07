import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../contants";
import { IPet } from "../../model/pet-model";

export const PetCardEdit = () => {
 const params = useParams();
 const id = params._id;
  


useEffect(() => {
 const search = async () => {
    const res = await axios.put(`${API_URL}`);
}
}
)


  return (
    <div className="detail">
      <div>
        Id: <b>{}</b>
      </div>
      <div>
        BirthDate: <b>{}</b>
      </div>
      <div>
       Breed: <b>{}</b>
      </div>
      <div>
       Description: <b>{}</b>
      </div>
      <div>
       Image: <b>{}</b>
      </div>
      <div>
        Name: <b>{}</b>
      </div>
      <div>
        Pedigree: <b>{}</b>
      </div>
      <div>
        Type: <b>{}</b>
      </div>

      <button>Edit</button>
    </div>
  );
};