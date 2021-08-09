const SortFillersItem = ({ handle, value, name }) => {
    return (
        <label className="sort__fillers-label">
            <input
                onChange={handle}
                className="sort__fillers-checkbox"
                type="checkbox"
                name="fillers"
                value={value}
            />
            <div className="sort__fillers-checkbox-custom" />
            {name}
        </label>
    );
};

export default SortFillersItem;
