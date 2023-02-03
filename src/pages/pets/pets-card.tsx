import { Link } from "react-router-dom";
import { IPet } from "../../model/pet-model";


type Props = {
    pet: IPet;
};

export const PetsCard = (props: Props) => {
    const { pet } = props;

    return (
        <div className={`pet-card`}>
            <div className="containerPreviw"></div>
            <div className="petsCard">
                <h1 className="idPet">{`${pet._id}`}</h1>
                <h2 className="PetName">{`${pet.name}`}</h2>
                <ul className="listaPet">
                    <li>
                    { `${pet.type}`}
                    </li>
                    <li>
                    {`${pet.birthDate}`}
                    </li>
                    <li>
                    {`${pet.breed} `}
                    </li>
                </ul>

                </div>

            <Link to={`/pets/${pet._id}`} state= {pet}></Link>
            
            <h1>Pets Card</h1>
        </div>
    )
}