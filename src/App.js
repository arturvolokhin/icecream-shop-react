import React from "react";
import { Switch, Route } from "react-router-dom";
import "./fonts/roboto/stylesheet.css";
import "./sass/main.sass";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Cart from "./components/cart/Cart";
import Notification from "./components/Notification";
import Authorization from "./components/authorization/Authorization";
import Registration from "./components/authorization/Registration";
import { useSelector } from "react-redux";

const App = () => {
    const notification = useSelector(
        ({ notification }) => notification.isActive
    );

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
                <Route exact path="/auth">
                    <Authorization />
                </Route>
                <Route exact path="/reg">
                    <Registration />
                </Route>
            </Switch>
            <Cart />
            {notification && <Notification />}
            <Footer />
        </div>
    );
};

export default App;
