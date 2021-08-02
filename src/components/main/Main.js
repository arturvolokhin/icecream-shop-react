import React from "react";
import Promo from "./Promo";
import Offer from "./Offer";
import Bestsellers from "./Bestsellers";
import Description from "./Description";
import BlogArticle from "./BlogArticle";
import Subscription from "./Subscription";
import Location from "../map/Location";

const Main = () => {
    return (
        <main className="main">
            <Promo />
            <Offer />
            <Bestsellers />
            <Description />
            <BlogArticle />
            <Subscription />
            <Location />
        </main>
    );
};

export default Main;
