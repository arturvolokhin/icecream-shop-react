import Close from "../Close";
import Links from "../header/Links";
import SocialLink from "../SocialLinks";

const MobileMenu = ({ setIsMenuActive, isMenuActive }) => {

    const handleClick = () => {
        isMenuActive && setIsMenuActive(false);
    }

    return (
        <section className="mobile__menu">
            <Close handleClick={handleClick} />
            <Links
                classLinks={"mobile__links"}
                classList={"mobile__list"}
                handleClick={handleClick}
                isMenuActive={isMenuActive}
            />
            <SocialLink classes="mobile__social" />
        </section>
    );
};

export default MobileMenu;
