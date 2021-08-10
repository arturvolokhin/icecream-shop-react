import Close from "../Close";
import Links from "../header/Links";
import SocialLink from '../SocialLinks'

const MobileMenu = ({ setIsMenuActive }) => {
    return (
        <section className="mobile__menu">
            <Close handleClick={() => setIsMenuActive(false)} />
            <Links classLinks={"mobile__links"} classList={"mobile__list"} />
            <SocialLink classes="mobile__social"/>
        </section>
    );
};

export default MobileMenu;
