const SortFat = () => {
    return (
        <>
            <fieldset className="sort__fat">
                <legend className="sort__title">Жирность:</legend>
                <label className="sort__fat-label">
                    <input className="sort__fat-radio" type="radio" name="fat" value="0" />
                    <div className="sort__fat-radio-custom"/>
                    0%
                </label>
                <label className="sort__fat-label">
                    <input className="sort__fat-radio" type="radio" name="fat" value="10" />
                    <div className="sort__fat-radio-custom"/>
                    До 10%
                </label>
                <label className="sort__fat-label">
                    <input className="sort__fat-radio" type="radio" name="fat" value="30" />
                    <div className="sort__fat-radio-custom"/>
                    До 30%
                </label>
                <label className="sort__fat-label">
                    <input className="sort__fat-radio" type="radio" name="fat" value="100" />
                    <div className="sort__fat-radio-custom"/>
                    Выше 30%
                </label>
            </fieldset>
        </>
    );
};

export default SortFat;
