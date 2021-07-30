import React, { Component } from 'react';
import "./MyGarage.css"
import { timeout } from 'q';
class MyGArage extends Component {
    state = {
        options: <span style={{ display: "inline" }}>آگهی های من</span> ,
        chosenA: "Under",
        chosenB: null,
        chosenC: null,
    }

    optionClickHandler = (e) => {
        switch (e) {
            case ("a"):
                this.setState({ options: <span style={{ display: "inline" }}>آگهی های من</span> })
                console.log(this.state.options)
                this.setState({
                    chosenA: "Under",
                    chosenB: null,
                    chosenC: null,
                })
                break;
            case ("b"):
                this.setState({ options: <span style={{ display: "inline" }}>آگهی های نشان شده</span> })
                console.log(this.state.options)
                this.setState({
                    chosenA: null,
                    chosenB: "Under",
                    chosenC: null,
                })
                break;
            case ("c"):
                this.setState({ options: <span style={{ display: "inline" }}> بازدید های اخیر</span> })
                console.log(this.state.options)
                this.setState({
                    chosenA: null,
                    chosenB: null,
                    chosenC: "Under",
                })
                break;
        }
    }
    render() {
        return (
            <section className="mygarage-section">
                <div className="mygarage-holder">
                    <div className="myGarage-options">
                        <div className={"myGarage-option"+" "+this.state.chosenA} onClick={() => this.optionClickHandler("a")} > <p>آگهی های من</p></div>
                    <div className={"myGarage-option"+" "+this.state.chosenB} onClick={() => this.optionClickHandler("b")}><p>آگهی های نشان شده</p></div>
                    <div className={"myGarage-option"+" "+this.state.chosenC} onClick={() => this.optionClickHandler("c")}><p>بازدید های اخیر</p></div>
                </div>
                <div className="Mygarage-content">
                    <p>برای مشاهده و مدیریت <span >{this.state.options}</span> حساب کاربری خود شوید</p>
                    <div className="buttonassign">
                        ثبت نام
                        </div>

                </div>
                </div>
            </section >


        );
    }
}

export default MyGArage;