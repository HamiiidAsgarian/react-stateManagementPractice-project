import React, { Component } from "react";
import "./Filters.css";
import data from "../../Images/Garage.json"
import { connect } from "react-redux";
import { stat } from "fs";

class Filters extends Component {

    componentDidUpdate() {
        var currentSectionUP = this.props.currentSection;
    }
    state = {
        pricrRangeClass: "off"
    }
    /////////////////////////////////////////////////////// handlers
    sectionChangeHandler = (e) => {
        this.props.currCata(e.target.value);
    }
    searchValueHandler = (e) => {
        this.props.SeaValue(e.target.value);
    }
    neiburhoodHandler = (e) => {
        this.props.neiburhoodValue(e.target.value)
    }

    PaymentHandler = (e) => {
        this.props.paymentValuee(e.target.value)
    }
    paymnetCSShandler = (e) => {
        if (this.props.paymentValue != "مقطوع") {
            this.setState({ pricrRangeClass: "off" })
            this.props.priceDownValue("");
            this.props.priceUpValue("");
        } else {
            this.setState({ pricrRangeClass: "Price-range" })
        }
    }

    priceDownValueHandler = (e) => {
        this.props.priceDownValue(e.target.value)
    }
    priceUpValueHandler = (e) => {
        this.props.priceUpValue(e.target.value)
    }
    BrandValueHandler = (e) => {
        this.props.BrandValue(e.target.value)
    }
    demandTypeHandler = (e) => {
        this.props.demanValue(e.target.value)
    }
    ModelUpRageHandler = (e) => {
        this.props.ModelUpRage(e.target.value)
    }
    ModelDownRageHandler = (e) => {
        this.props.ModelDownRage(e.target.value)
    }

    UsedUpRageHandler = (e) => {

        this.props.UsedUpRage(e.target.value)
    }
    UsedDownRageHandler = (e) => {

        this.props.UsedDownRage(e.target.value)
    }

    // (search, cata, neibor, price, priceup, pricedown, brand, type, modelUp, modelDown, usedUp, usedDown, )
    searchHandler = () => {
        const thisP = this.props;
        this.props.submitSearch(thisP.city, thisP.searchValue, thisP.currentSection,
            thisP.neighborValue, thisP.paymentValue, thisP.priceDownValuee, thisP.priceUpValuee,
            thisP.brandValuee, thisP.demandValue, thisP.modelUpValue,
            thisP.modelDownValue, thisP.usedUpValue, thisP.usedDownValue
        );
    }

    // {
    //     if (this.props.paymentValue != "مقطوع") {
    //         this.state.pricrRangeClass = "off"
    //         this.setState({pricrRangeClass : "off"})
    //         this.props.priceDownValue("");
    //         this.props.priceUpValue("");
    //         console.log("aaa")
    //     } else {
    //         this.setState({pricrRangeClass : "Price-range"})
    //         console.log("bbb")
    //     }
    // }


    ///////////////////////////////////////////////////////

    render() {
        /////////////////////////////////////////////////////////

        var brandClass;
        var pricrRangeClass;

        // console.log("SearchValue: " + this.props.searchValue)
        // console.log("CurrentSection: " + this.props.currentSection)
        // console.log("neighborValue: " + this.props.neighborValue)


        // console.log("paymentValue: " + this.props.paymentValue)
        // console.log("DownPrice: " + this.props.priceDownValuee)
        // console.log("UpPrice: " + this.props.priceUpValuee)
        // console.log("brandValue: " + this.props.brandValuee)
        // console.log("demandValue: " + this.props.demandValue)

        // console.log("modelUpValue: " + this.props.modelUpValue)
        // console.log("modelDownValue: " + this.props.modelDownValue)

        // console.log("usedUpValue: " + this.props.usedUpValue)
        // console.log("usedDownValue: " + this.props.usedDownValue)

        // console.log("filter : ", this.props.filterr)

        // console.log('_________-------Store------', this.props.filterr);





        ////////////////////////////////////////////////////////////////// brand Diable/Enable calss Change
        if (this.props.currentSection == "موتور" || this.props.currentSection == "سنگین") {
            brandClass = "off"
        } else { brandClass = "brand-filter" }
        ////////////////////////////////////////////////////////////////// PriceRange Diable/Enable calss Change
        // if (this.props.paymentValue != "مقطوع") {
        //     pricrRangeClass = "off"
        //     // this.props.priceDownValue("");
        //     // this.props.priceUpValue("");
        // } else {
        //     pricrRangeClass = "Price-range"
        // }

        ///////////////////////////////////////////////////////// list items from JSON

        const cataList = data.autoType.map((item, index) => {
            return (<option key={index}>{item} </option>);
        });
        const price = data.paymentMode.map((item, index) => {
            return (<option key={index}>{item} </option>);
        });
        const brand = data.برند.map((item, index) => {
            return (<option key={index} value={item}>{item}</option>);
        });
        ///////////////////////////////////////////////////// creating neiburhood by City

        var b = this.props.city;
        const neiburhood = data[b].map((item, index) => {
            return (<option key={index} value={item}>{item}</option>)
        });
        //////////////////////////////////////////////////////
        return (
            <section>
                <form name="myForm" action="/action_page.php" method="post">
                    <div className="Filters-section">
                        <div className="Filters-section_Cataes">
                            <select placeholder="aaaaaaaaa" className="search" onChange={(e) => this.neiburhoodHandler(e)}>
                                {/* <option value="همه" selected disabled hidden>{" انتخاب کنید " + this.props.city}</option> */}
                                {neiburhood}
                            </select>
                            <select className="search" onChange={(e) => this.sectionChangeHandler(e)}>
                                {/* <option selected={this.props.currentSection} value={this.props.currentSection} >{this.props.currentSection} </option> */}
                                {cataList}
                            </select>
                            <input className="search" placeholder={" جستجو در " + this.props.currentSection} type="text" onChange={this.searchValueHandler} />
                            {/* <div className="cata">aa</div>
                            <div className="location">bb</div> */}
                        </div>

                        <div className="Filters-section_Ranges">
                            <div className="priceFilter" onClick={(e) => this.paymnetCSShandler(e)}>
                                <label className="label" htmlFor=""> قیمت :</label><br />
                                <select className="search Small" onChange={(e) => this.PaymentHandler(e)}>
                                    {/* <option value="" selected disabled hidden>قیمت</option> */}
                                    {price}
                                </select>
                                <div className={this.state.pricrRangeClass}>
                                    <input className="search Small50" onChange={(e) => this.priceUpValueHandler(e)} placeholder="از" type="number" />
                                    <input className="search Small50" onChange={(e) => this.priceDownValueHandler(e)} placeholder="تا" type="number" />
                                </div>

                            </div>

                            <div className={brandClass}>
                                <label className="label" htmlFor=""> برند :</label><br />
                                <select className="search Small" onChange={(e) => this.BrandValueHandler(e)}>
                                    {/* <option value="" selected disabled hidden>برند</option> */}
                                    {brand}
                                </select>
                            </div>



                            <div className="type-filter" onChange={(e) => this.demandTypeHandler(e)}>
                                <label className="label" htmlFor="">نوع : </label>
                                <div action="">
                                    <label htmlFor=""> <input type="radio" name="نوع" value="فروشی" /> فروشی<br /></label>
                                    <label htmlFor=""> <input type="radio" name="نوع" value="کرایه" /> کرایه<br /></label>
                                    <label htmlFor=""> <input type="radio" name="نوع" value="فرقی نمی کند" /> فرقی نمی کند<br /></label>
                                </div>

                            </div>
                            <div className="Model-Filter">
                                <label className="label" htmlFor="">سال : </label>
                                <div className="Model-range">
                                    <select className="search mediumButt" onChange={(e) => { this.ModelDownRageHandler(e) }}>
                                        <option value="1397">1397</option>
                                        <option value="1396">1396</option>
                                        <option value="1395">1395</option>
                                        <option value="...">...</option>
                                    </select>
                                    <p>تا</p>
                                    <select className="search mediumButt" onChange={(e) => { this.ModelUpRageHandler(e) }}>
                                        <option value="1397">1397</option>
                                        <option value="1396">1396</option>
                                        <option value="1395">1395</option>
                                        <option value="...">...</option>
                                    </select>
                                </div>

                            </div>

                            <div className="usage-filter">
                                <label className="label" htmlFor="">کارکرد : </label>
                                <div className="usage-range" >
                                    <input onChange={(e) => this.UsedUpRageHandler(e)} className="search Small50" placeholder="تا" type="number" />
                                    <input onChange={(e) => this.UsedDownRageHandler(e)} className="search Small50" placeholder="از" type="number" />
                                </div>


                            </div>
                        </div>

                        <div className="Filters-section_Cheks">
                            <div className="checBoxes">
                                <p htmlFor=""><input type="checkbox" name="vehicle" value="Bike" /> عکس دار</p>
                                <p><input type="checkbox" name="vehicle" value="Car" /> فوری</p>
                            </div>
                            <div className="buttonassign" onClick={this.searchHandler}>جستجو</div>
                        </div>

                    </div>
                </form>
            </section>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        city: state.city,
        currentSection: state.currentSection,
        searchValue: state.searchValue,
        demandValue: state.demandValue,
        neighborValue: state.neighborValue,
        paymentValue: state.paymentValue,

        priceDownValuee: state.priceDownValue,
        priceUpValuee: state.priceUpValue,

        brandValuee: state.brandvalue,

        modelDownValue: state.modelDownValue,
        modelUpValue: state.modelUpValue,

        usedDownValue: state.usedDownValue,
        usedUpValue: state.usedUpValue,

        filterr: state.filter,


    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        SeaValue: (prop) => {
            dispatch({ type: "SEARCH_VALUE", searchValue: prop })
        },
        currCata: (prop) => {
            dispatch({ type: "CATA_CHANGE", currentSections: prop })
        },
        demanValue: (prop) => {
            dispatch({ type: "DEMAND_VALUE", demanValue: prop })
        },
        neiburhoodValue: (prop) => {
            dispatch({ type: "NEIGHBOR_VALUE", neighborValue: prop })
        },
        paymentValuee: (prop) => {
            dispatch({ type: "PAYMENT_VALUE", paymentVale: prop })
        },
        priceUpValue: (prop) => {
            dispatch({ type: "PRICE_UP_VALUE", PriceUpVale: prop })
        },
        priceDownValue: (prop) => {
            dispatch({ type: "PRICE_DOWN_VALUE", PriceDownVale: prop })
        },
        BrandValue: (prop) => {
            dispatch({ type: "BRAND_VALUE", brandval: prop })
        },
        ModelDownRage: (prop) => {
            dispatch({ type: "MODEL_DOWN_RANGE", DownModel: prop })
        },
        ModelUpRage: (prop) => {
            dispatch({ type: "MODEL_UP_RANGE", UpModel: prop })
        },
        UsedUpRage: (prop) => {
            dispatch({ type: "USED_UP_RANGE", UpUsed: prop })
        },
        UsedDownRage: (prop) => {
            dispatch({ type: "USED_DOWN_RANGE", DownUsed: prop })
        },

        submitSearch: (city, search, cata, neibor, price, priceup, pricedown, brand, type, modelUp, modelDown, usedUp, usedDown, ) => {
            dispatch({
                type: "SUBMIT_CHANGE", filterSub: { city, search, cata, neibor, price, priceup, pricedown, brand, type, modelUp, modelDown, usedUp, usedDown }
            })
        },
        // submitSearch: (prop) => {
        //     dispatch({ type: "SUBMIT_CHANGE", searchFilter: prop })
        // },

    }
}
//export default Filters;
export default connect(mapStateToProps, mapDispatchToProp)(Filters);