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
        <p className="PetName">
          Name:
          {`${pet.name}`}
        </p>
        <p className="typePet">
          Type:
          {`${pet.type}`}{" "}
        </p>
        <p className="birthDatePet">
          Birthday:
          {`${pet.birthDate}`}
        </p>
        <p className="breedPet">
          Breed:
          {`${pet.breed} `}
        </p>
        <p className="pedigreePet">
          Pedigree:
          {`${pet.pedigree}`}
        </p>
        <p className="descriptionPet">
          Description:
          {`${pet.description}`}
        </p>

        <button type="button" className="btnEdit">
          <Link className="linkButton" to={`/pets/${pet._id}`} state={pet}>
            Detail
          </Link>
        </button>
      </div>
    </div>
  );
};
