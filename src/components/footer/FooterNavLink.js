const FooterNavLink = ({ link, text }) => {
    return (
        <li className="footer__nav-item">
            <a className="footer__nav-link" href={link}>
                {text}
            </a>
        </li>
    );
};

export default FooterNavLink;
