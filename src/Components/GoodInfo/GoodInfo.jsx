import "./GoodInfo.css"
import React, { Component } from 'react';
import mainPic from "../../Images/mesh2.jpg";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

import Mazda from "../../Images/mazda.jpg"
import sangin from "../../Images/s.jpg"
import motor from "../../Images/m.jpg"
import bari from "../../Images/b.jpg"
import x from "../../Images/x.jpg"

class GoodInfo extends Component {
    state = {
        currentImage: x,
    }
    pictureClickHandler = (e, ex) => {

        switch (e) {
            case ("A"):
                this.setState({ currentImage: ex })
                break
            case ("B"):
                this.setState({ currentImage: x })
                break
            case ("C"):
                this.setState({ currentImage: ex })
                break
        }
    }
    render() {
        var currimg;
        if (this.props.goodId.autoType == "") { currimg = x }
        else if (this.props.goodId.autoType == "سواری") { currimg = Mazda }
        else if (this.props.goodId.autoType == "سنگین") { currimg = sangin }
        else if (this.props.goodId.autoType == "موتور") { currimg = motor }
        else if (this.props.goodId.autoType == "باری") { currimg = bari }
        // console.log(this.props.goodId)
        return (
            <section className="GoodInfo-section">
                <div className="GoodInfo-container">
                    <div className="main-container">
                        <header className="direction-header">
                            <div className="direction-adress"><p>{" خودرو / " + this.props.goodId.autoType + "  /  " + this.props.goodId.berand + this.props.goodId.subject}</p></div>
                            <div className="back"> <NavLink to="/"><p style={{ cursor: "pointer" }}>بازگشت</p></NavLink></div>
                        </header>
                        <article className="Good_article">
                            <div className="goodInfo-details">
                                <div>
                                    <h3>{this.props.goodId.subject}</h3>
                                    {/* <h1>{this.props}</h1> */}
                                    <p>لحظاتی پیش</p>
                                    <div className="goodInfo-details_holder">
                                        <div className="goodInfo-details_call"> دریافت اطلاعات تماس </div>

                                        <div className="goodInfo-details_chat">شروع چت</div>

                                        <div className="goodInfo-details_mark">نشان کردن</div>
                                    </div>
                                </div>
                                <div className="info-paires-table">
                                    <div className="info-paires">
                                        <p>نوع خودرو</p>
                                        <p>{this.props.goodId.autoType}</p>
                                    </div>
                                    <div className="info-paires">
                                        <p>محل</p>
                                        <p>{this.props.goodId.shahr}/{this.props.goodId.mahal}</p>
                                    </div>
                                    <div className="info-paires">
                                        <p>نوع آگهی</p>
                                        <p>فروشی</p>
                                    </div>
                                    <div className="info-paires">
                                        <p>مدت کارکرد</p>
                                        <p>{this.props.goodId.useLong}</p>
                                    </div>

                                    <div className="info-paires">
                                        <p>برند</p>
                                        <p>{this.props.goodId.berand}</p>
                                    </div>
                                    <div className="info-paires">
                                        <p>قیمت</p>
                                        <p>{this.props.goodId.price}</p>
                                    </div>


                                </div>
                                <div className="info-exlaines">
                                    <p>دیکس فابریک رومانی کششی 36پره قیمت 6میلیون و پانصد ودیکس کمپرسی 28پره قیمت پنج میلیون و چهارصد</p>
                                </div>
                                <div className="info-related">
                                    <p>آگهی‌های بیشتر برای  </p>
                                    <p>قطعات یدکی و لوازم جانبی خودرو در گاراژ </p>
                                    <p>قطعات یدکی و لوازم جانبی خودرو در کرج هشتگرد </p>
                                </div>
                            </div>
                            <div className="goodInfo-images">
                                <div className="main-info-image"><img src={this.state.currentImage} alt="" /></div>
                                <div className="Tumbnile-info-images">
                                    <img onClick={() => this.pictureClickHandler("A", currimg)} src={currimg} alt="" />
                                    <img onClick={() => this.pictureClickHandler("B", currimg)} src={x} alt="" />
                                    <img onClick={() => this.pictureClickHandler("C", currimg)} src={currimg} alt="" />
                                </div>
                                <div className="good-share">
                                    <p>لینک به‌اشتراک‌گذاری</p>
                                    <p>https://divar.ir/v/AXoaWzTw</p>
                                </div>

                                <div className="info-warnings">
                                    <p>گاراژ هیچ‌گونه منفعت و مسئولیتی در قبال معامله شما ندارد.</p>
                                    <p>با مطالعه‌ی <span style={{ color: "red", cursor: "pointer" }}>راهنمای خرید امن</span>، آسوده‌تر معامله کنید.</p>
                                </div>
                                <div className="report">
                                    <p>گزارش مشکل آگهی</p>
                                </div>

                            </div>
                        </article>


                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        goodId: state.goodId,
    }
}
// export default GoodInfo;
export default connect(mapStateToProps, null)(GoodInfo);