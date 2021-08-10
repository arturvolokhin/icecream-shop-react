import FooterNavLink from "./FooterNavLink";
import Logo from "../Logo";
import SocialLinks from "../SocialLinks";

const Footer = () => {
    const nav = {
        "Для поставщиков": "#",
        "Наши документы": "#",
        "О производстве": "#",
        "Экологические стандарты": "#",
    };

    return (
        <footer className="footer">
            <SocialLinks classes="footer__social"/>
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

        </footer>
    );
};

export default Footer;
