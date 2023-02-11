import { Link } from "react-router-dom";
import { IPet } from "../../model/pet-model";

type Props = {
  pet: IPet;
};

export const PetsCard = (props: Props) => {
  const { pet } = props;

  return (
    <div className={`pet-card`}>
      <h1 className="nameTitle">{pet.name}</h1>
      <img id="imgPet" className="imgPet" src={pet.imgUrl} />

      <div className="dataForm">
        <b className="idPet">{`${pet._id}`}</b>
        <div className="infoPet">
          Name:
          <p> {`${pet.name}`} </p>
        </div>
        <div className="infoPet">
          Type:
          <p> {`${pet.type}`} </p>
        </div>
        <div className="infoPet">
          Birthday:
          <p> {`${pet.birthDate}`} </p>
        </div>
        <div className="infoPet">
          Breed:
          <p> {`  ${pet.breed} `} </p>
        </div>
        <div className="infoPet">
          Pedigree:
          <p> {`${pet.pedigree}`} </p>
        </div>
        <div className="descriptionPet">
          Description:
          <p>{`${pet.description}`} </p>
        </div>

        <button type="button" className="btnEdit">
          <Link className="linkButton" to={`/pets/${pet._id}`} state={pet}>
            Detail
          </Link>
        </button>
      </div>
    </div>
  );
};
