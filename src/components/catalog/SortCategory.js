import React, { useState } from "react";

const SortCategory = () => {

    const [value, setValue] = useState('Популярные')

    return (
        <>
            <fieldset className="sort__category">
                <legend className="sort__title">Сортировка:</legend>
                <input className="sort__category-value" value={value} disabled/>
            </fieldset>
        </>
    );
};

export default SortCategory;
