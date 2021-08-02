import twitter from "../../images/icons/footer/twitter.svg";
import instagram from "../../images/icons/footer/instagram.svg";
import facebook from "../../images/icons/footer/facebook.svg";
import vk from "../../images/icons/footer/vk.svg";
import FooterSocialLink from "./FooterSocialLink";
import FooterNavLink from "./FooterNavLink";
import Logo from "../Logo";

const Footer = () => {
    const social = {
        "twitter.com": twitter,
        "instagram.com": instagram,
        "facebook.com": facebook,
        "vk.com": vk,
    };

    const nav = {
        "Для поставщиков": "#",
        "Наши документы": "#",
        "О производстве": "#",
        "Экологические стандарты": "#",
    };

    return (
        <footer className="footer">
            <ul className="footer__social">
                {Object.entries(social).map(([key, value], index) => {
                    return (
                        <FooterSocialLink
                            key={index}
                            link={key}
                            source={value}
                        />
                    );
                })}
            </ul>

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

            <Logo />
        </footer>
    );
};

export default Footer;
