import React from "react";
import Promo from "./Promo";
import Offer from "./Offer";
import Bestsellers from "./Bestsellers";
import Description from "./Description";
import BlogArticle from "./BlogArticle";
import Subscription from "./Subscription";

const Main = () => {
    return (
        <section className="main">
            <Promo />
            <Offer />
            <Bestsellers />
            <Description />
            <BlogArticle />
            <Subscription />
        </section>
    );
};

export default Main;
