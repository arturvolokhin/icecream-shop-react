import Button from "../Button";

const OfferItem = ({ title, description, buttonText, classes }) => {
    return (
        <div className={"offer__item " + classes}>
            <h3 className="offer__item-title">{title}</h3>
            <p className="offer__item-description">{description}</p>
            <div className="offer__item-button">
                <Button text={buttonText} />
            </div>
        </div>
    );
};

export default OfferItem;
