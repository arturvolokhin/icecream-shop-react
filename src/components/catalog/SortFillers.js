import SortFillersItem from "./SortFillersItem";

const SortFillers = ({ fillers, setFillers }) => {
    const data = [
        { value: "chocolate", name: "Шоколадные" },
        { value: "powder", name: "Сахарные присыпки" },
        { value: "fruit", name: "Фрукты" },
        { value: "syrup", name: "Сиропы" },
        { value: "jam", name: "Джемы" },
    ];

    const handleChange = ({ target }) => {
        const arr = [...fillers];

        if (arr.length === 0) {
            arr.push(target.value);
        } else {
            const index = arr.findIndex((filler) => filler === target.value);
            index === -1 ? arr.push(target.value) : arr.splice(index, 1);
        }

        setFillers(arr);
    };

    return (
        <fieldset className="sort__fillers sort__field">
            <legend className="sort__title">Наполнители:</legend>
            {data.map((item, index) => {
                return (
                    <SortFillersItem
                        key={index}
                        handle={handleChange}
                        value={item.value}
                        name={item.name}
                    />
                );
            })}
        </fieldset>
    );
};

export default SortFillers;
