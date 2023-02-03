import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <Link className="link" to="/"> Homepage</Link>
            <Link className="link" to="/pets"> Pets</Link>
            <Link className="link" to="/pets/new"> Add pets</Link>
            
        </div>
    )
}