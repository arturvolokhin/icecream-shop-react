const Button = ({ text, classes, handleClick }) => {
    return <button className={"button " + classes} onClick={handleClick}>{text}</button>;
};

export default Button;
