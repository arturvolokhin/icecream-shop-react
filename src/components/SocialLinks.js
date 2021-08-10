import SocialLink from "./SocialLink";
import twitter from "../images/icons/footer/twitter.svg";
import instagram from "../images/icons/footer/instagram.svg";
import facebook from "../images/icons/footer/facebook.svg";
import vk from "../images/icons/footer/vk.svg";

const social = {
    "twitter.com": twitter,
    "instagram.com": instagram,
    "facebook.com": facebook,
    "vk.com": vk,
};

const SocialLinks = ({ classes }) => {
    return (
        <ul className={classes ? "social " + classes : "social"}>
            {Object.entries(social).map(([key, value], index) => {
                return <SocialLink key={index} link={key} source={value} />;
            })}
        </ul>
    );
};

export default SocialLinks;
