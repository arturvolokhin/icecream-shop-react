import React from "react";
import Promo from "./Promo";
import Offer from "./Offer";
import Bestsellers from "./Bestsellers";

const Main = () => {
    return (
        <section className="main">
            <Promo />
            <Offer />
            <Bestsellers />
        </section>
    );
};

export default Main;
