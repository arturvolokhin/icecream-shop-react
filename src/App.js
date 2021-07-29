import React from "react";
import "./fonts/roboto/stylesheet.css";
import "./sass/main.sass";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
    return (
        
        <div className='wrapper'>
            <Header />
            <Main />
        </div>
        
    );
};

export default App;
