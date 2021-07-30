import React, { Component } from 'react';
import "./Support.css"

import a from "../../Images/Support/a.png"
import b from "../../Images/Support/b.png"
import c from "../../Images/Support/c.png"
import d from "../../Images/Support/d.png"
import e from "../../Images/Support/e.png"
import f from "../../Images/Support/f.png"
import g from "../../Images/Support/g.png"
import h from "../../Images/Support/h.png"
import i from "../../Images/Support/i.png"
import j from "../../Images/Support/j.png"

import aa from "../../Images/Support/aa.png"
import bb from "../../Images/Support/bb.png"
import cc from "../../Images/Support/cc.png"
import dd from "../../Images/Support/dd.png"
import ee from "../../Images/Support/ee.png"
import ff from "../../Images/Support/ff.png"
import gg from "../../Images/Support/gg.png"
import hh from "../../Images/Support/hh.png"
import ii from "../../Images/Support/ii.png"
import jj from "../../Images/Support/jj.png"

class Support extends Component {
    state = {
        selectedOne: "A",
        A: {
            isSelected: false,
            R: a,
            W: aa,
            imgCurr: a,
            index: "A"
        },
        B: {
            isSelected: false,
            R: b,
            W: bb,
            imgCurr: b,
            index: "B"
        },
        C: {
            isSelected: false,
            R: c,
            W: cc,
            imgCurr: c,
            index: "C"
        },
        D: {
            isSelected: false,
            R: a,
            W: aa,
            imgCurr: a,
            index: "D"
        },
        E: {
            isSelected: false,
            R: a,
            W: aa,
            imgCurr: a,
            index: "E"
        },
        F: {
            isSelected: false,
            R: a,
            W: aa,
            imgCurr: a,
            index: "F"
        },
        G: {
            isSelected: false,
            R: a,
            W: aa,
            imgCurr: a,
            index: "G"
        },
        H: {
            isSelected: false,
            R: a,
            W: aa,
            imgCurr: a,
            index: "H"
        },
        I: {
            isSelected: false,
            R: a,
            W: aa,
            imgCurr: a,
            index: "I"
        },
        J: {
            isSelected: false,
            R: a,
            W: aa,
            imgCurr: a,
            index: "J"
        },

    }
    imageChangeHandler = (Who, is, not, selected) => {
        console.log(Who == selected)
        if (Who == selected) {
            this.setState({ selectedOne: selected, })
        }
        else if (Who != selected) {
            this.setState({ selectedOne: Who })
        }

        // this.setState({ selectedOne: Who })
        // console.log("selected one" + this.state.selectedOne)
        // console.log("wich option is selevted:  " + Who);
        // for (let i = 0; i < 6; i++) {
        //     if (Who == this.state[Object.keys(this.state)[i]].index) {
        //         this.setState({ ...this.state, [this.state[Object.keys(this.state)[i]].index]: { ...[this.state[Object.keys(this.state)[i]]], imgCurr: not, } })
        //         console.log(this.state[Object.keys(this.state)[i]])

        //         console.log("wich option is selevted:  " + this.state[Object.keys(this.state)[i]].index);

        //     }
        //     else if (Who != this.state[Object.keys(this.state)[i]].index) {
        //         this.setState({ [this.state[Object.keys(this.state)[i]].index]: { ...[this.state[Object.keys(this.state)[i]].index], imgCurr: is, } })
        //         console.log("wich option is selevted:  " + this.state[Object.keys(this.state)[i]].index);
        //     }
        // }
    }


    render() {
        const whoSelected = this.state.selectedOne;
        // console.log(whoSelected);
        /////////////////////////////////////////////////////////////////
        var one = (this.state.selectedOne == "A") ? aa : a;
        var two = (this.state.selectedOne == "B") ? bb : b;
        var three = (this.state.selectedOne == "C") ? cc : c;
        var four = (this.state.selectedOne == "D") ? dd : d;
        var five = (this.state.selectedOne == "E") ? ee : e;
        var six = (this.state.selectedOne == "F") ? ff : f;
        var seven = (this.state.selectedOne == "G") ? gg : g;
        var eight = (this.state.selectedOne == "H") ? hh : h;
        var nine = (this.state.selectedOne == "I") ? ii : i;
        var teen = (this.state.selectedOne == "J") ? jj : j;
        ///////////////////////////////////////////////////////////////////
        switch (this.state.selectedOne) {
            case "A": {
                var Informatio = (<div className="iformations">
                    <h2>ثبت آگهی</h2>
                    <div>
                        <p>چگونه روی «گاراژ» آگهی بگذارم؟</p>
                        <p>شرایط ثبت آگهی در «گاراژ» چیست؟</p>
                        <p>دسته‌بندی مناسب آگهی من چیست؟</p>
                        <p>عکس آگهی باید چه شرایطی داشته باشد؟</p>
                        <p>کد تأیید چیست؟</p>
                        <p>چت «گاراژ» چیست؟</p>
                    </div>
                </div>)
                break;
            }
            case "B": {
                var Informatio = <div className="iformations">
                    <h2>جستجو و فیلتر</h2>
                    <div>
                        <p>چگونه آگهی مورد نظر خود را پیدا کنم؟</p>
                        <p>فیلتر کردن یعنی چه؟</p>
                        <p>راهنمای خرید امن</p>
                    </div>
                </div>
                break;
            }
            case "C": {
                var Informatio = <div className="iformations">
                    <h2>گاراژ من</h2>
                    <div>
                        <p>چگونه به آگهی‌های خودم دسترسی پیدا کنم؟</p>
                        <p>چگونه یک آگهی را نشان کنم؟</p>
                        <p>بازدیدهای اخیر خود را در کجا مشاهده کنم؟</p>
                        <p>چگونه برای یک آگهی یادداشت شخصی بگذارم؟</p>
                    </div>
                </div>
                break;
            }
            case "D": {
                var Informatio = <div className="iformations">
                    <h2>آگهی‌های من</h2>
                    <div>
                        <p>چگونه پیش‌نمایشی از آگهی خود را مشاهده کنم؟</p>
                        <p>چگونه آگهی خود را ویرایش کنم؟</p>
                        <p>چگونه آگهی خود را ارتقا دهم؟</p>
                        <p>چگونه آمار بازدید آگهی خودم را مشاهده کنم؟</p>
                        <p>چگونه آگهی خود را ارتقا دهم؟</p>
                        <p>چگونه آگهی خود را حذف کنم؟</p>
                        <p>چرا آگهی من حذف شده است؟</p>

                    </div>
                </div>
                break;
            }
            case "F": {
                var Informatio = <div className="iformations">
                    <h2>گزارش تخلف</h2>
                    <div>
                        <p>می‌خواهم یک آگهی را گزارش کنم</p>
                        <p>اطلاعات مربوط به یک آگهی حذف شده را نیاز دارم</p>
                        <p>از من کلاهبرداری شده است</p>
                        <p>برای من ایجاد مزاحمت شده است</p>
                    </div>
                </div>
                break;
            }
            case "G": {
                var Informatio = <div className="iformations">
                    <h2>پرداخت</h2>
                    <div>
                        <p>می‌خواهم یک آگهی را گزارش کنم</p>
                        <p>چگونه می‌توانم در گاراژ پرداخت انجام دهم</p>
                        <p>اطلاعات مربوط به یک آگهی حذف شده را نیاز دارم</p>
                        <p>از من کلاهبرداری شده است</p>
                    </div>
                </div>
                break;
            }
            case "H": {
                var Informatio = <div className="iformations">
                    <h2>شرایط و قوانین</h2>
                    <div>
                        <p>قوانین ثبت آگهی در «گاراژ» چیست؟</p>
                        <p>عکس آگهی باید چه شرایطی داشته باشد؟</p>
                        <p>شرایط استفاده و مشاهده آگهی چیست؟</p>
                        <p>قوانین استفاده از چت «گاراژ» چیست؟</p>
                    </div>
                </div>
                break;
            }
            case "I": {
                var Informatio = <div className="iformations">
                    <h2>دلایل حذف آگهی</h2>
                    <div>
                        <p>چرا آگهی من حذف شده است؟</p>
                        <p>پرتکرارترین دلایل حذف آگهی کدامند؟</p>
                    </div>
                </div>
                break;
            }
            case "J": {
                var Informatio = <div className="iformations">
                    <h2>سوالات پرتکرار</h2>
                    <div>
                        <p>چگونه روی «گاراژ» آگهی بگذارم؟</p>
                        <p>چرا آگهی من حذف شده است؟</p>
                        <p>راهنمای خرید امن</p>
                        <p>چگونه آگهی خود را حذف کنم؟</p>
                        <p>قوانین ثبت آگهی در «گاراژ» چیست؟</p>
                    </div>
                </div>
                break;
            }
            case "E": {
                var Informatio = <div className="iformations">
                    <h2>آموزش ویدئویی</h2>
                    <div>
                        <p>ویدئو: چرا آگهی من حذف شده است؟</p>
                        <p>ویدئو: پرتکرارترین دلایل حذف آگهی کدامند؟</p>
                    </div>
                </div>
                break;
            }
        }
        return (
            <section className="Support-section">
                <div className="Support-holder">
                    <div className="Support-header">
                        <p>مرکز پشتیبانی</p>
                        <input type="text" placeholder="جستجو در سوالات" />
                    </div>
                    <div className="topics-holder">
                        <div onClick={() => this.imageChangeHandler("A", a, aa, whoSelected)}> <p>ثبت آگهی</p> <img src={one} alt="" /> </div>
                        <div onClick={() => this.imageChangeHandler("B", b, bb, whoSelected)}> <p>جستجو و فیلتر</p> <img src={two} /> </div>
                        <div onClick={() => this.imageChangeHandler("C", c, cc, whoSelected)}> <p>گاراژ من</p> <img src={three} alt="" /> </div>
                        <div onClick={() => this.imageChangeHandler("D", d, dd, whoSelected)}> <p>آگهی‌های من</p> <img src={four} alt="" /> </div>
                        <div onClick={() => this.imageChangeHandler("E", e, ee, whoSelected)}> <p>انتقاد و پیشنهاد</p> <img src={five} alt="" /> </div>
                        <div onClick={() => this.imageChangeHandler("F", f, ff, whoSelected)}> <p>گزارش تخلف</p> <img src={six} alt="" /> </div>
                        <div onClick={() => this.imageChangeHandler("G", g, gg, whoSelected)}> <p>پرداخت</p> <img src={seven} /> </div>
                        <div onClick={() => this.imageChangeHandler("H", h, hh, whoSelected)}> <p>شرایط و قوانین</p> <img src={eight} alt="" /> </div>
                        <div onClick={() => this.imageChangeHandler("I", i, ii, whoSelected)}> <p>دلایل حذف آگهی</p> <img src={nine} alt="" /> </div>
                        <div onClick={() => this.imageChangeHandler("J", j, jj, whoSelected)}> <p>سوالات پرتکرار</p> <img src={teen} alt="" /> </div>

                    </div>
                    {Informatio}
                    <div className="All-day-support">
                        <p>در تمامی ساعات شبانه‌روز و ایام هفته می‌توانید با ما در ارتباط باشید</p>
                        <div className="buttonassign Supportbtn"> ارتباط با پشتیبانی</div>
                    </div>


                    <div className="footer Sfooter">
                        گاراژ را در شبکه های اجتماعی دنیال کنید
                <div className="icons-holder">
                            <i className="icon-gplus"></i>
                            <i className="icon-instagram-1"></i>
                            <i className="icon-telegram"></i>
                            <i className="icon-facebook"></i>
                        </div>


                    </div>
                </div>
            </section >
        );
    }
}

export default Support;