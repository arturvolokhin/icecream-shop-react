const Button = ({ text, classes, handleClick }) => {
    return (
        <button
            className={classes ? "button " + classes : "button"}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default Button;
