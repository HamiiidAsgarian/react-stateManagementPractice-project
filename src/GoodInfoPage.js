import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import "./Images/Icons/css/fontello.css";
import InfoPage from "../src/Components/GoodInfo/GoodInfo.jsx"


import Registration from "./Components/Registration/Registration";

class Layout extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <Navbar />
                <InfoPage />
            </div>
        );
    }
}

export default Layout;