const SortFillers = ({ fillers, setFillers }) => {

    const handleChange = ({target}) => {
        const arr = [...fillers];
        
        if (arr.length === 0){
            arr.push(target.value);
        } else {
            const index = arr.findIndex(filler => filler === target.value);
            index === -1 ? arr.push(target.value) :
            arr.splice(index, 1);
        }

        setFillers(arr);
    }

    return (
        <fieldset className="sort__fillers">
            <legend className="sort__title">Наполнители:</legend>

            <label className="sort__fillers-label">
                <input
                    onChange={handleChange}
                    className="sort__fillers-checkbox"
                    type="checkbox"
                    name="fillers"
                    value="chocolate"
                />
                <div className="sort__fillers-checkbox-custom" />
                Шоколадные
            </label>
            <label className="sort__fillers-label">
                <input
                    onChange={handleChange}
                    className="sort__fillers-checkbox"
                    type="checkbox"
                    name="fillers"
                    value="powder"
                />
                <div className="sort__fillers-checkbox-custom" />
                Сахарные присыпки
            </label>
            <label className="sort__fillers-label">
                <input
                    onChange={handleChange}
                    className="sort__fillers-checkbox"
                    type="checkbox"
                    name="fillers"
                    value="fruit"
                />
                <div className="sort__fillers-checkbox-custom" />
                Фрукты
            </label>
            <label className="sort__fillers-label">
                <input
                    onChange={handleChange}
                    className="sort__fillers-checkbox"
                    type="checkbox"
                    name="fillers"
                    value="syrup"
                />
                <div className="sort__fillers-checkbox-custom" />
                Сиропы
            </label>
            <label className="sort__fillers-label">
                <input
                    onChange={handleChange}
                    className="sort__fillers-checkbox"
                    type="checkbox"
                    name="course_name"
                    value="jam"
                />
                <div className="sort__fillers-checkbox-custom" />
                Джемы
            </label>
        </fieldset>
    );
};

export default SortFillers;
