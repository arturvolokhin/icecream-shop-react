const Close = ({ handleClick, classes }) => {
    return (
        <div
            className={classes ? "close " + classes : "close"}
            onClick={handleClick}
        ></div>
    );
};

export default Close;
