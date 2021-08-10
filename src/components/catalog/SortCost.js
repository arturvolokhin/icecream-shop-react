import "rc-slider/assets/index.css";
import Slider from "rc-slider";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const SortCost = ({ cost, setCost }) => {
    const handleChange = (value) => {
        setCost(value);
    };

    return (
        <>
            <fieldset className="sort__cost sort__field">
                <legend className="sort__title">
                    Цена: {cost[0]} руб - {cost[1]} руб
                </legend>
                <Range
                    defaultValue={[0, 450]}
                    allowCross={false}
                    min={0}
                    max={450}
                    onChange={handleChange}
                />
            </fieldset>
        </>
    );
};

export default SortCost;
