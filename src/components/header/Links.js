import Logo from "../Logo";

const Links = () => {
    return (
        <div className="header__links">
            <Logo />
            <ul className="header__list">
                <li className="header__item">
                    <a className="header__item-link" href="https://github.com/">
                        Каталог
                    </a>
                </li>
                <li className="header__item">
                    <a className="header__item-link" href="https://github.com/">
                        Доставка и оплата
                    </a>
                </li>
                <li className="header__item">
                    <a className="header__item-link" href="https://github.com/">
                        О компании
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Links;
