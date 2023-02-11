import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../../../contants";
import { IPet } from "../../../model/pet-model";

type TCurrentPetState = {
  pet: IPet;
  loading: boolean;
  error: boolean;
  deleting: boolean;
};

export const PetsDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const id = params.id;

  const pet: IPet = location.state;

  const [currentPetState, setCurrentPetState] = useState<TCurrentPetState>({
    pet,
    loading: false,
    error: false,
    deleting: false,
  });

  const fetchPetById = async () => {
    setCurrentPetState({
      ...currentPetState,
      loading: true,
    });

    try {
      const res = await axios.get(`${API_URL}/${id}`);

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

  const [deleteState, setDeleteState] = useState<boolean>(false);

  const removePet = async () => {
    setCurrentPetState({
      ...currentPetState,
      deleting: true,
    });
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      setCurrentPetState({
        ...currentPetState,
        error: false,
        deleting: false,
      });
      console.log(res);
      if (res.data === true) {
        navigate("/pets");
      }
    } catch (e) {
      setCurrentPetState({
        ...currentPetState,
        deleting: false,
        error: true,
      });
      console.log(e);
    }
  };

  return (
    <div className="petsDetails">
      <div className="divDetailOne">
        {currentPetState.loading && "Loading"}
        {currentPetState.error && " Error Loading "}
        {currentPetState.pet && (
          <div>
            {currentPetState.pet._id}
            <div className="divDetail">
              <label htmlFor="namePetDetail" className="labelDetail">
                Name
              </label>
              <p className="petDetail">{currentPetState.pet.name}</p>
            </div>
            <div className="divDetail">
              <img className="petDetailImg" src={currentPetState.pet.imgUrl} />
            </div>
            <div className="divDetail">
              <label htmlFor="typePetDetail" className="labelDetail">
                Type
              </label>
              <p className="petDetail">{currentPetState.pet.type}</p>
            </div>
            <div className="divDetail">
              <label htmlFor="breedPetDetail" className="labelDetail">
                Breed
              </label>
              <p className="petDetail">{currentPetState.pet.breed}</p>
            </div>
            <div className="divDetail">
              <label htmlFor="pedigreePetDetail" className="labelDetail">
                Pedigree
              </label>
              <p className="petDetail">{currentPetState.pet.pedigree}</p>
            </div>
            <div className="divDetail">
              <label htmlFor="descriptionPetDetail" className="labelDetail">
                Description
              </label>
              <p className="petDetail">{currentPetState.pet.description}</p>
            </div>

            <button
              type="button"
              className="btnEdit"
              onClick={() => navigate(`/pets/edit/${id}`)}
            >
              {" "}
              Edit
            </button>

            <button
              type="submit"
              className="btnDelete"
              onClick={() => setDeleteState(true)}
            >
              Delete
            </button>
            {deleteState && (
              <div className="QuestionDelite">
                <h2 className="questionDelet">Are you sure ?</h2>
                <button className="btnYES" onClick={removePet}>
                  {" "}
                  Yes{" "}
                </button>
                <button className="btnNO" onClick={() => setDeleteState(false)}>
                  {" "}
                  No{" "}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
