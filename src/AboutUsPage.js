import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import "./Images/Icons/css/fontello.css";


import Registration from "./Components/Registration/Registration";

class AboutUsPage extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <Navbar />
                <AboutUs/>
            </div>
        );
    }
}

export default AboutUsPage;