import React from "react";
import { Switch, Route } from "react-router-dom";
import "./fonts/roboto/stylesheet.css";
import "./sass/main.sass";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Cart from "./components/cart/Cart";

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
            <Cart /> 
            <Footer />
        </div>
    );
};

export default App;