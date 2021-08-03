import Products from "./Products";
import Sort from "./Sort";

const Catalog = () => {
    return (
        <main className="catalog">
            <h1 className="catalog__title">Каталог мороженого</h1>
            <Sort />
            <Products />
        </main>
    );
};

export default Catalog;
