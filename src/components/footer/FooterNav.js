import FooterNavLink from "./FooterNavLink";

const FooterNav = () => {

    const nav = {
        "Для поставщиков": "#",
        "Наши документы": "#",
        "О производстве": "#",
        "Экологические стандарты": "#",
    };

    return (
        <nav className="footer__nav">
                <ul className="footer__nav-links">
                    {Object.entries(nav).map(([key, value], index) => {
                        return (
                            <FooterNavLink
                                key={index}
                                link={value}
                                text={key}
                            />
                        );
                    })}
                </ul>
            </nav>
    )
}

export default FooterNav;