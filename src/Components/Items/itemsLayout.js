import React, { Component } from 'react'; //imrc
import "./items.css";
import Item from "./Items"
import JSON from "../../Images/Garage.json"
import { connect } from "react-redux";

class ItemsLayout extends Component {
    state = {}
    // filter: {
    //     city: "",
    //     brand: "",
    //     cata: "همه",
    //     modelDown: "",
    //     modelUp: "",
    //     neibor: "",
    //     price: "",
    //     pricedown: "",
    //     priceup: "",
    //     search: "",
    //     type: "",
    //     usedDown: "",
    //     usedUp: ""
    // },
    // itemHandler = () => {
    //     //  <InfoPage />
    //     // console.log("dfdfdf");

    // }
    render() {
        // const filll = JSON.data.filter((e) => {
        //     if (this.props.searchValue != "") { return (e.شهر == this.props.searchValue) }
        //     else if (this.props.searchValue == "") { return (e.شهر) }
        // })

        const city = JSON.data.filter((e) => {
            if (this.props.filterr.city != "") { return (e.شهر == this.props.filterr.city) }
            else if (this.props.filterr.city == "") { return (e.شهر) }
        })
        const neibor = city.filter((e) => {
            if (this.props.filterr.neibor != "همه") { return (e.محله == this.props.filterr.neibor) }
            else if (this.props.filterr.neibor == "همه") { return (e.محله) }

        })
        const brand = neibor.filter((e) => {
            if (this.props.filterr.brand != "همه") { return (e.برند == this.props.filterr.brand) }
            else if (this.props.filterr.brand == "همه") { return (e.برند) }

        })
        const cata = brand.filter((e) => {
            if (this.props.filterr.cata != "همه") { return (e.autoType == this.props.filterr.cata) }
            else if (this.props.filterr.cata == "همه") { return (e.autoType) }
        })

        const PriceDown = cata.filter((e) => {
            if (this.props.filterr.pricedown != "") { return (e.price >= this.props.filterr.pricedown) }
            else if (this.props.filterr.pricedown == "") { return (e.price) }
        })
        const priceup = PriceDown.filter((e) => {
            if (this.props.filterr.priceup != "") { return (e.price <= this.props.filterr.priceup) }
            else if (this.props.filterr.priceup == "") { return (e.price) }
        })
        const usedUp = priceup.filter((e) => {
            if (this.props.filterr.usedUp != "") { return (e.کارکرد <= this.props.filterr.usedUp) }
            else if (this.props.filterr.usedUp == "") { return (e.کارکرد) }
        })
        const usedDown = usedUp.filter((e) => {
            if (this.props.filterr.usedDown != "") { return (e.کارکرد >= this.props.filterr.usedDown) }
            else if (this.props.filterr.usedDown == "") { return (e.کارکرد) }
        })
        const search = usedDown.filter((e) => {
            if (this.props.filterr.search != "") {
                var a = this.props.filterr.search.length;
                
                var b = String(e.ide).slice(0,a);
                // console.log(b ,"    ", a)
                return (b==this.props.filterr.search)
            }
            else if (this.props.filterr.search == "") { return (e.ide) }
        })
        // const neibor = city.filter((e) => {
        //     if (this.props.filterr.neibor != "") { return (e.محله == this.props.filterr.neibor) }
        //     else if (this.props.filterr.neibor == "") { return (e.محله) }

        // })
        // const neibor = city.filter((e) => {
        //     if (this.props.filterr.neibor != "") { return (e.محله == this.props.filterr.neibor) }
        //     else if (this.props.filterr.neibor == "") { return (e.محله) }

        // })



        const dataItems = search.map((e) => { return <Item shahr={e.شهر} mahal={e.محله} berand={e.برند} autoType={e.autoType} autoIMG={e.url} price={e.price} ide={e.ide} useLong={e.کارکرد} subject={e.title} key={Math.random(10, 20)} /> })


        return (
            <section className="ItemsLayout" >
                {dataItems}
            </section>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        filterr: state.filter,
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        currCata: (prop) => {
            dispatch({ type: "CATA_CHANGE", currentSections: prop })

        },
    }
}
export default connect(mapStateToProps, null)(ItemsLayout);

//export default ItemsLayout;