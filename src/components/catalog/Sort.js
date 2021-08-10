import React, { useState } from "react";
import Button from "../Button";
import SortCategory from "./SortCategory";
import SortCost from "./SortCost";
import SortFat from "./SortFat";
import SortFillers from "./SortFillers";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../redux/productsSlice";

const Sort = () => {
    const [category, setCategory] = useState("Выберите категорию");
    const [cost, setCost] = useState([0, 450]);
    const [fat, setFat] = useState(null);
    const [fillers, setFillers] = useState([]);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        const filterValues = {
            category: category,
            cost: cost,
            fat: fat,
            fillers: fillers,
        };

        dispatch(filterProducts(filterValues));
    };

    return (
        <form className="sort">
            <SortCategory category={category} setCategory={setCategory} />
            <SortCost cost={cost} setCost={setCost} />
            <SortFat setFat={setFat} />
            <SortFillers fillers={fillers} setFillers={setFillers} />
            <Button text={"Применить"} classes="sort__button" handleClick={handleClick} />
        </form>
    );
};

export default Sort;
