const SortFat = () => {
    return (
        <>
            <fieldset className="sort__fat">
                <legend className="sort__title">Жирность:</legend>
                <label>
                    <input className="sort__fat-radio" type="radio" name="fat" value="0" />
                    0%
                </label>
                <label>
                    <input className="sort__fat-radio" type="radio" name="fat" value="10" />
                    До 10%
                </label>
                <label>
                    <input className="sort__fat-radio" type="radio" name="fat" value="30" />
                    До 30%
                </label>
                <label>
                    <input className="sort__fat-radio" type="radio" name="fat" value="100" />
                    Выше 30%
                </label>
            </fieldset>
        </>
    );
};

export default SortFat;
