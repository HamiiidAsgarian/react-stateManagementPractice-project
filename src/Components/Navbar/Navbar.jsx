import React, { Component } from 'react';
import './Navbar.css';
import Logo from "../../Images/Logo.png";
import data from "../../Images/Garage.json"

import { NavLink } from "react-router-dom";

import { connect } from "react-redux";


class Navbar extends Component {
    state = {}

    // handleMenuItemClick = (event) => {
    //     console.log(event.target.textContent);
    //     this.props.pageChange([event.target.textContent]);
    // };

    citiesOnchange = (event) => {
        this.props.CityChange(event.target.value);

    }
    render() {
        // console.log(this.props.city=="شیراز")
        const citiesList = data.شهرها.map((item) => {
            return (<option key={Math.random(10, 20)} value={item}>{item}</option>);
        });

        return (
            <nav>
                <div className="Nav">
                    <div className="navHolder">
                        <div className="Nav_Logo">
                            <div className="buttonState">

                                <select className="states" onChange={this.citiesOnchange}>
                                    {/* <option value="" selected disabled hidden >تهران</option> */}
                                    {/* <option defaultValue="تهران" selected disabled hidden >تهران</option> */}
                                    {citiesList}
                                </select>

                            </div>
                            <NavLink to="/"><img className="logo" src={Logo} alt="ss" /></NavLink>
                        </div>
                        <div className="Nav_info">
                            <NavLink to="/Register"><div className="buttonRegister"><p>ثبت آگهی</p></div></NavLink>
                            {/* <button className="buttonRegister"> ثبت آگهی </button> */}
                            <ul className="Nav_info_ul">
                                <NavLink to="/mygarage"><li><p>گاراژ من</p></li></NavLink>
                                <NavLink to="/AboutUs"><li><p>درباره ما</p></li></NavLink>
                                <NavLink to="/SupportPage"> <li><p>پشتیبانی و قوانین</p></li></NavLink>
                                <NavLink to="/ContactUs"><li><p>تماس با ما</p></li></NavLink>
                            </ul>

                        </div >

                    </div >
                </div>
            </nav >

        );
    }
}
const mapStateToProps = (state) => {

    return {
        city: state.city,
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        CityChange: (prop) => {
            dispatch({ type: "CITY_CHANGE", citys: prop })

        },
        // deleteFromBasket: (itemt) => {
        //     dispatch({ type: "BASKET_DEL", basketIt: itemt })
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Navbar);

//export default Navbar;