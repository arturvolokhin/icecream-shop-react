import SocialLinks from "../SocialLinks";
import FooterNav from "./FooterNav";

const Footer = () => {
    return (
        <footer className="footer">
            <SocialLinks classes="footer__social" />
            <FooterNav />
        </footer>
    );
};

export default Footer;
