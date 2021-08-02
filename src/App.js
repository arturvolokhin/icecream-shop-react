import React from "react";
import { Switch, Route } from "react-router-dom";
import "./fonts/roboto/stylesheet.css";
import "./sass/main.sass";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/catalog">
                    <Catalog />
                </Route>    
            </Switch>
            <Footer />
        </div>
    );
};

export default App;