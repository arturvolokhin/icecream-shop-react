import Links from "./Links";
import Buttons from "./Buttons";

const Header = () => {
    return (
        <header className="header">
            <Links />
            <Buttons />
            <div className="header__info">
                <p className="header__info-time">С 10 до 20, ежедневно</p>
                <a className="header__info-call" href="tel:88124502525">8 812 450-25-25</a>
            </div>
        </header>
    );
};

export default Header;
