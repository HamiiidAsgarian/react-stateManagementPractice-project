import React, { Component } from 'react';
import "./ContactUs.css"
class ContactUs extends Component {
    state = {}
    render() {
        return (
            <section className="ContactUs-section">
                <div className="ContactUs-holder">
                    <h1>تماس با ما</h1>
                    <p>
                        اگر پیشنهاد یا انتقادی دارید یا می‌خواهید ما را از وجود مشکلی در سیستم آگاه کنید، با گاراژ صحبت کنید. برای اینکار می‌توانید از صفحه‌ی پشتیبانی و قوانین گاراژ استفاده کنید.
                    </p>
                    <p>برای حذف آگهی‌هایی که با شماره‌ی موبایل یا ایمیل شما ثبت شده است، به صفحه‌ی مدیریت آگهی مراجعه کنید. همچنین در صورت ایجاد مزاحمت برای شما، می‌توانید با مراجعه به سایت پلیس فتا به آدرس http://www.cyberpolice.ir از اطلاعات تماس پلیس فتای محل سکونت خود آگاه شوید و موضوع را از آن طریق پیگیری کنید.</p>
                    <p>.تیم‌های فنی ما در آدرس زیر اقامت دارند، ولی متأسفانه توان میزبانی مراجعان حضوری را نداریم.</p>
                    <p>آدرس پستی: تهران، سعادت‌آباد، خیابان فرهنگ، کوچه پیوند ۲، پلاک ۸.، طبقه سوم</p>
                    <p>
                        صندوق پستی: ۴۸۳۱۱-۱۹۹۷۷ <br /> شماره تماس پشتیبانی: ۸۴۲۱۱۵۱۱-۰۲۱ <br /> شماره تماس واحد اداری: ۸۸۶۵۲۱۳۷-۰۲۱

                    </p>
                    <p>
                        فرصت‌های شغلی <br />
                        امتحان کنید، یاد بگیرید و بهتر شوید. به ما بپیوندید
                    </p>
                </div>
            </section>
        );
    }
}

export default ContactUs;