const FooterSocialLink = ({ link, source }) => {
    return (
        <li className="footer__social-item">
            <a className="footer__social-link" href={`${link}`}>
                <img
                    className="footer__social-image"
                    src={source}
                    alt={`Link to ${link}`}
                />
            </a>
        </li>
    );
};

export default FooterSocialLink;
