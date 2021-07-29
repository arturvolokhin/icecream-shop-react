import React from "react";
import Promo from "./Promo";
import Offer from "./Offer";
import Bestsellers from "./Bestsellers";
import Description from "./Description";

const Main = () => {
    return (
        <section className="main">
            <Promo />
            <Offer />
            <Bestsellers />
            <Description />
        </section>
    );
};

export default Main;
