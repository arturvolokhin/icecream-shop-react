import Button from "../Button";
import SortCategory from "./SortCategory";
import SortCost from "./SortCost";
import SortFat from "./SortFat";
import SortFillers from "./SortFillers";

const Sort = () => {
    return (
        <form className="sort">
            <SortCategory />
            <SortCost />
            <SortFat />
            <SortFillers />
            <Button text={"Применить"} />
        </form>
    );
};

export default Sort;
