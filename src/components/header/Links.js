import Logo from "../Logo";
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <div className="header__links">
            <Logo />
            <ul className="header__list">
                <Link to="/catalog" className="header__item-link">
                    <li className="header__item">
                        <p className="header__item-text">Каталог</p>
                    </li>
                </Link>
                <li className="header__item">
                    <p className="header__item-text">Доставка и оплата</p>
                </li>
                <li className="header__item">
                    <p className="header__item-text">О компании</p>
                </li>
            </ul>
        </div>
    );
};

export default Links;
