import CatalogProducts from "./CatalogProducts";
import Sort from "./Sort";

const Catalog = () => {
    return (
        <main className="catalog">
            <h1 className="catalog__title">Каталог мороженого</h1>
            <Sort />
            <CatalogProducts />
        </main>
    );
};

export default Catalog;
