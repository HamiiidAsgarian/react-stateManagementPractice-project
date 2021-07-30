import React, { Component } from 'react';
import MyGarage from "./Components/MyGarage/MyGarage.jsx"
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
class MyGaragePage extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <Navbar />
                <MyGarage />
            </div>
        );
    }
}

export default MyGaragePage;