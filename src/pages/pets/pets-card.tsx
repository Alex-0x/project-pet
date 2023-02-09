import { Link } from "react-router-dom";
import { isButtonElement } from "react-router-dom/dist/dom";
import { IPet } from "../../model/pet-model";


type Props = {
    pet: IPet;
    
};

export const PetsCard = (props: Props) => {
    const { pet } = props;

    return (
        <div className={`pet-card`}>
                    
            <h1 className="nameTitle">{pet.name}</h1>
            <img id="imgPet" className="imgPet" src={pet.imgUrl}/>
  
            <div className="dataForm">
                <b className="idPet">{`${pet._id}`}</b>
                <p className="PetName">Name:<br/> {`${pet.name}`}</p>
                <p className="typePet">Type: <br/>{ `${pet.type}`} </p>
                <p className="birthDatePet">Birthday:<br/>{`${pet.birthDate}`}</p>   
                <p className="breedPet">Breed:<br/>{`${pet.breed} `}</p>
                <p className="pedigreePet">Pedigree:<br/>{`${pet.pedigree}`}</p>
                <p className="descriptionPet">Description:<br/>{`${pet.description}`}</p> 
                
                <button type="button" className="btnEdit"><Link className="linkButton" to={`/pets/${pet._id}`} state= {pet}>Detail</Link></button> 
            </div>
                
        </div>
    )
}