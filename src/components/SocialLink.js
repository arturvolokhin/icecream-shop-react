const FooterSocialLink = ({ link, source }) => {
    return (
        <li className="social__item">
            <a className="social__link" href={`${link}`}>
                <img
                    className="social__image"
                    src={source}
                    alt={`Link to ${link}`}
                />
            </a>
        </li>
    );
};

export default FooterSocialLink;
