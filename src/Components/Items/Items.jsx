import React, { Component } from "react";
import "./items.css"
import Mazda from "../../Images/mazda.jpg"
import sangin from "../../Images/s.jpg"
import motor from "../../Images/m.jpg"
import bari from "../../Images/b.jpg"
import x from "../../Images/x.jpg"
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import InfoPage from "../../GoodInfoPage"

class Items extends Component {
    state = {}

    itemClickHandler = () => {
        // console.log(this.props)
        const thisP = this.props;
        this.props.goodId(thisP.ide, thisP.subject, thisP.mahal, thisP.price,
            thisP.shahr, thisP.berand, thisP.useLong, thisP.autoType
        );
    }
    render() {

        var img;
        if (this.props.autoIMG == "") { img = x }
        else if (this.props.autoType == "سواری") { img = Mazda }
        else if (this.props.autoType == "سنگین") { img = sangin }
        else if (this.props.autoType == "موتور") { img = motor }
        else if (this.props.autoType == "باری") { img = bari }
        return (

            <>
                <NavLink to="/Info">
                    <div className="items" onClick={this.itemClickHandler}>
                        <div className="item" >
                            <div className="imageSide">
                                <img src={img} alt="" />
                            </div>
                            <div className="infoSide">
                                <div><h5>{this.props.ide}</h5></div>
                                <div className="infoisde-bottom">
                                   
                                    <p>{this.props.shahr}-{this.props.mahal}</p>
                                    <p>{this.props.berand}</p>
                                    <p>{this.props.autoType}</p>

                                    <div className="infor_bott">
                                        <div><p> دقایق پیش</p></div>
                                        
                                        <div className="chat"><p>چت</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="item-Price"><p>قیمت: {this.props.price} تومان</p></div>
                    </div>
                </NavLink>
            </>

        );
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        goodId: (id, subject, mahal, price, shahr, berand, useLong, autoType) => {
            dispatch({ type: "GOODINFO_ID", goodId: { id, subject, mahal, price, shahr, berand, useLong, autoType } })
        }, id: 102
    }
}
export default connect(null, mapDispatchToProp)(Items);
// export default Items;
