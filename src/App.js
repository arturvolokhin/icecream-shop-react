import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./fonts/roboto/stylesheet.css";
import "./sass/main.sass";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Cart from "./components/cart/Cart";
import Notification from "./components/Notification";
import MobileActions from "./components/mobile/MobileActions";
import MobileMenu from "./components/mobile/MobileMenu";
import Preloader from "./components/Preloader";

const App = () => {
    const notification = useSelector(
        ({ notification }) => notification.isActive
    );

    const [isMenuActive, setIsMenuActive] = useState(false);
    const [load, setLoad] = useState(false);
    const [time, setTime] = useState(false);

    //UseEffect использован для симуляции медленного интернет-соединения.
    useEffect(() => {
        setTimeout(() => {
            setTime(true);
        }, 2000);
    });
    //Прелоадер будет крутиться до тех пор, пока не загрузится дом.
    //Или не пройдёт симуляция.
    window.onload = () => setLoad(true);

    return (
        <>
            {!load || !time ? <Preloader /> :
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
                <MobileMenu
                    setIsMenuActive={setIsMenuActive}
                    isMenuActive={isMenuActive}
                />
                <Footer />
            </div>}
        </>
    );
};

export default App;
