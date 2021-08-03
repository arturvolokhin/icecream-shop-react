import React, { useState } from "react";

const SortCategory = () => {

    const [value, setValue] = useState('Выберите категорию')

    return (
        <>
            <fieldset className="sort__category">
                <legend className="sort__title">Сортировка:</legend>
                <input className="sort__category-value" value={value} disabled/>
                <ul className="sort__category-list">
                    <li className="sort__category-item" onClick={() => setValue('Популярные')}>Популярные</li>
                    <li className="sort__category-item" onClick={() => setValue('Дешёвые')}>Дешёвые</li>
                    <li className="sort__category-item" onClick={() => setValue('Дорогие')}>Дорогие</li>
                </ul>
            </fieldset>
        </>
    );
};

export default SortCategory;
