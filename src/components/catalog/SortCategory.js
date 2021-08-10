const SortCategory = ({ category, setCategory }) => {
    return (
        <>
            <fieldset className="sort__category sort__field">
                <legend className="sort__title">Сортировка:</legend>
                <input
                    className="sort__category-value"
                    value={category}
                    disabled
                />
                <ul className="sort__category-list">
                    <li
                        className="sort__category-item"
                        onClick={() => setCategory("Популярные")}
                    >
                        Популярные
                    </li>
                    <li
                        className="sort__category-item"
                        onClick={() => setCategory("Дешёвые")}
                    >
                        Дешёвые
                    </li>
                    <li
                        className="sort__category-item"
                        onClick={() => setCategory("Дорогие")}
                    >
                        Дорогие
                    </li>
                </ul>
            </fieldset>
        </>
    );
};

export default SortCategory;
