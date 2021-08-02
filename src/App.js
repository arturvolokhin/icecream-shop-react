import React from "react";
import "./fonts/roboto/stylesheet.css";
import "./sass/main.sass";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Location from "./components/map/Location";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Main />
            <Location />
            <Footer />
        </div>
    );
};

export default App;
