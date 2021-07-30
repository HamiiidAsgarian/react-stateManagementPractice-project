import React, { Component } from 'react';
import "../Registration/Registration.css"

import MapboxGl from 'mapbox-gl';
import pin from "../../Images/1.png"


class Registratin extends Component {

    componentDidMount() {
        MapboxGl.accessToken = 'pk.eyJ1IjoiaGFtaWlpZCIsImEiOiJjanU4M2g3aDkwM2V1NDNwZWwybHpmczJ3In0.oc7OyQgOV0oPjHQ8AD7s5g'
        var map = new MapboxGl.Map({
            container: this.container,
            style: 'mapbox://styles/mapbox/streets-v11',
            width: 400,
            height: 400,
            center: [51.388973, 35.765118],
            latitude: 35.689198,
            longitude: 51.388973,
            zoom: 11
        })

        map.on('load', function () {
            map.loadImage(pin, function (error, image) {
                if (error) throw error;
                map.addImage('cat', image);
                map.addLayer({
                    "id": "points",
                    "type": "symbol",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": [{
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [51.388973, 35.765118]
                                }
                            }]
                        }
                    },
                    "layout": {
                        "icon-image": "cat",
                        "icon-size": 0.25
                    }
                });
            });
        });
    }
    state = {
        viewport: {
            width: 400,
            height: 400,
            // latitude: 37.7577,
            // longitude: -122.4376,
            zoom: 8
        }
    };

    render() {











        return (
            <section className="registratin_section" >
                <div className="registratin_Container" >
                    <p className="reg_title">ثبت رایگان آگهی</p>
                    <div className="Regis_Cata">
                        <p> تغییر دسته بندی</p>
                        <p>سواری</p>
                    </div>
                    <div className="Regis_info" >
                        <div>
                            <div className="reg_loc">
                                <div>
                                    <p className="para">شهر</p>
                                    <input className="select_med"></input>
                                </div>
                                <div>
                                    <p className="para">محدوده آگهی</p>
                                    <input className="select_med"></input>
                                </div>
                            </div>
                            <div className="map">
                                <p className="para">نقشه</p>
                                <div >
                                    <div ref={(x) => { this.container = x }} className="map_frame">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pic">
                            <p>عکس آگهی</p>
                            <p>افزودنِ عکس بازدید آگهی شما را تا سه برابر افزایش می‌دهد</p>
                            <div className="image_upload"><div className="img_up"> آپلود تصویر </div></div>
                        </div>
                        <div className="Reg_inputs">
                            <div className="reg_brand">
                                <p>برند</p>
                                <select className="select_big"></select>
                            </div>
                            <div className="reg_brand">
                                <p>سال ساخت</p>
                                <select className="select_big"></select>
                            </div>
                            <div className="reg_brand">
                                <p>کارکرد</p>
                                <input className="select_big"></input>
                            </div>
                            <div className="reg_brand">
                                <p>قیمت</p>
                                <input className="select_big"></input>
                            </div>
                            <div className="reg_trasfer_Con">
                                <div className="reg_trasfer">
                                    <p>مایلم معاوضه کنم</p>
                                    <input type="checkbox" id="root_exchange"></input>
                                </div>
                            </div>
                            <div className="reg_brand">
                                <p>رنگ</p>
                                <select className="select_big"></select>
                            </div>
                            <div>
                                <form action="">
                                    <p>نوع آگهی</p>
                                    <div className="reg_saleType_Con">
                                        <div className="reg_trasfer">
                                            <p>فروشی</p>
                                            <input type="radio" name="gender" id="root_exchange"></input>
                                        </div>
                                        <div className="reg_trasfer">
                                            <p>اجاره ای</p>
                                            <input type="radio" name="gender" id="root_exchange"></input>
                                        </div>
                                        <div className="reg_trasfer">
                                            <p>درخواستی</p>
                                            <input type="radio" name="gender" id="root_exchange"></input>
                                        </div>
                                    </div>
                                    <div className="reg_brand">
                                        <p>شماره موبایل</p>
                                        <p>کد تأیید به شماره موبایل شما ارسال خواهد شد. تماس و چت نیز با این شماره انجام می‌شود</p>
                                        <input className="select_big"></input>
                                    </div>
                                    <div className="reg_brand">
                                        <p>ایمیل</p>
                                        <p>آدرس ایمیل اختیاری‌ست. لینک «مدیریت آگهی» به ایمیل شما ارسال می‌شود</p>
                                        <input className="select_big"></input>
                                    </div>

                                    <div className="reg_brand">
                                        <p>عنوان آگهی</p>
                                        <p>در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید</p>
                                        <input className="select_big"></input>
                                    </div>

                                    <div className="reg_brand">
                                        <p>توضیحات آگهی</p>
                                        <p>جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید تا شانس موفقیت آگهی شما بیشتر شود</p>
                                        <input className="select_big" ></input>
                                    </div>

                                    <div className="reg_brand">
                                        <p>توضیحات آگهی</p>
                                        <p>جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید تا شانس موفقیت آگهی شما بیشتر شود</p>
                                        <div className="textarea_Holder">
                                            <textarea className="select_big_big" name="" id="" cols="30" rows="10"></textarea>
                                        </div>


                                    </div>


                                </form>
                                <div className="buttonassign">
                                    ارسال آگهی
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>


        );
    }
}

export default Registratin;