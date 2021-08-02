import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const SortCost = () => {
    return (
        <>
            <fieldset className="sort__cost">
                <legend className="sort__title">Цена:</legend>
                <Range />
            </fieldset>
        </>
    );
};

export default SortCost;
