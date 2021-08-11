import Logo from "../Logo";
import { Link } from "react-router-dom";

const Links = ({ classLinks, classList, handleClick }) => {
    return (
        <div
            className={classLinks ? "header__links " + classLinks : "header__links"}
        >
            <Logo handleClick={handleClick}/>
            <ul
                className={classList ? "header__list " + classList : "header__list"}
            >
                <Link
                    to="/catalog"
                    className="header__item-link"
                    onClick={handleClick}
                >
                    <li className="header__item">
                        <p className="header__item-text">Каталог</p>
                    </li>
                </Link>
                <li className="header__item" onClick={handleClick}>
                    <p className="header__item-text">Доставка и оплата</p>
                </li>
                <li className="header__item" onClick={handleClick}>
                    <p className="header__item-text">О компании</p>
                </li>
            </ul>
        </div>
    );
};

export default Links;
