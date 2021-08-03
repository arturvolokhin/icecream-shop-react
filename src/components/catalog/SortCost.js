import React, { useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const SortCost = () => {
    const [value, setValue] = useState([0, 450]);

    const handleChange = (value) => {
        setValue(value);
    };

    return (
        <>
            <fieldset className="sort__cost">
                <legend className="sort__title">
                    Цена: {value[0]} руб - {value[1]} руб
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
