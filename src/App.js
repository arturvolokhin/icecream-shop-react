import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./fonts/roboto/stylesheet.css";
import "./sass/main.sass";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Cart from "./components/cart/Cart";
import Notification from "./components/Notification";
import { useSelector } from "react-redux";
import MobileActions from "./components/mobile/MobileActions";
import MobileMenu from "./components/mobile/MobileMenu";

const App = () => {
    const notification = useSelector(
        ({ notification }) => notification.isActive
    );

    const [isMenuActive, setIsMenuActive] = useState(false);

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
            {notification && <Notification />}
            <MobileActions setIsMenuActive={setIsMenuActive} />
            {isMenuActive && <MobileMenu setIsMenuActive={setIsMenuActive}/>}
            <Footer />
        </div>
    );
};

export default App;
