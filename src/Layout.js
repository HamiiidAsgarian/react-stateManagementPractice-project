import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import SideCata from "./Components/SideCata/SideCata";
import "./Images/Icons/css/fontello.css";
import Filters from "./Components/Filters/Filters.jsx";
import Items from "./Components/Items/itemsLayout";

// import Registration from "./Components/Registration/Registration";

class Layout extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <Navbar />
                <section className="main_page">
                    <SideCata />
                    <Filters />
                    <Items />
                </section>
            </div>
        );
    }
}

export default Layout;