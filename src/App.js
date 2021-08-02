import React from "react";
import "./fonts/roboto/stylesheet.css";
import "./sass/main.sass";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Route exact path="/">
                <Main />
            </Route>
            <Footer />
        </div>
    );
};

export default App;
