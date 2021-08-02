const SortFillers = () => {
    return (
        <fieldset className="sort__fillers">
            <legend className="sort__title">Наполнители:</legend>

            <label>
                <input
                    className="sort__fillers-checkbox"
                    type="checkbox"
                    name="fillers"
                    value="chocolate"
                />
                Шоколадные
            </label>
            <label>
                <input
                    className="sort__fillers-checkbox"
                    type="checkbox"
                    name="fillers"
                    value="sugar"
                />
                Сахарные присыпки
            </label>
            <label>
                <input
                    className="sort__fillers-checkbox"
                    type="checkbox"
                    name="fillers"
                    value="fruit"
                />
                Фрукты
            </label>
            <label>
                <input
                    className="sort__fillers-checkbox"
                    type="checkbox"
                    name="fillers"
                    value="syrup"
                />
                Сиропы
            </label>
            <label>
                <input
                    className="sort__fillers-checkbox"
                    type="checkbox"
                    name="course_name"
                    value="jam"
                />
                Джемы
            </label>
        </fieldset>
    );
};

export default SortFillers;
