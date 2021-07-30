import React, { Component } from 'react';
import './SideCata.css';
import data from "../../Images/Garage.json"
import { connect } from "react-redux";
// import divar from "../../Images/bazaar.png"


class SideCata extends Component {
    state = {}

    sectionChangeHandler = (e, data) => {
        this.props.currCata(data);
    }
    render() {
        const catagories = data.autoType.map((item) => {
            return (<li key={Math.random(10, 20)} onClick={(e) => this.sectionChangeHandler(e, item)} >{item}</li>);

        });
        return (
            <aside>
                <div className="aside">
                    <ul className="catagory">
                        <li value={this.props.currentSection} onClick={(e) => this.sectionChangeHandler(e, this.props.currentSection)}> {this.props.currentSection} </li>
                        {catagories}
                    </ul>
                    <div className="divar" />
                    <div className="sib" />




                </div>
            </aside>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        currentSection: state.currentSection,
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        currCata: (prop) => {
            dispatch({ type: "CATA_CHANGE", currentSections: prop })

        },
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(SideCata);
//export default SideCata;