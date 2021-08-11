import logo from "../images/icons/logo.svg";
import { Link } from "react-router-dom";

const Logo = ({ handleClick }) => {
    return (
        <Link to="/" onClick={handleClick}>
            <img className="logo" src={logo} alt="logo" />
        </Link>
    );
};

export default Logo;
