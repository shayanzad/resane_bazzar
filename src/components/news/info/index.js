import MainPage from "../../hoc/mainPage";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { StyledContainer } from "./style";
import HeaderInfo from "./header/index";
import QuickLink from "./quick-link/index";
import InstagramIcon from '../../svg/icons/instagram'
import TelegramIcon from '../../svg/icons/telegram'
import LinkdinIcon from '../../svg/icons/linkdin'
import AllNews from '../all-news/index'
import img6 from '../../../assets/images/news/img6.png'
import { Progress } from 'antd';




const Info = () => {
    const params = useParams()
    const [newsInfo, setNewsInfo] = useState({ id: params.id, title: `نسبت طلایی و عدد فی در طراحی لوگو چیست؟`, tags: ['مقاله'], minute: 6, date: '۰۸ دی ۱۴۰۰', links: [{ id: 1, title: "نسبت طلایی چیست و چه ارتباطی با طراحی لوگو دارد؟" }, { id: 2, title: "کاربرد عدد فی در طراحی لوگو چیست؟" }, { id: 3, title: "نتیجه گیری" }],keyWords:["طراحی لوگو","عدد پی"] })
    const [news, setnews] = useState([
        { id: 1, text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`, title: `۱۱ قانون طلایی طراحان حرفه ای لوگو`, tags: ['مقاله'], minute: 6, date: '۰۸ دی ۱۴۰۰', imgFile: '../../../../../src/assets/images/news/img3.png' },
        { id: 2, text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`, title: `رسانه‌ها چگونه مخاطب را اقناع می‌کنند؟`, tags: ['رسانه های دیجیتال'], minute: 6, date: '۰۸ دی ۱۴۰۰', imgFile: '../../../../../src/assets/images/news/img3.png' },
        { id: 3, text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`, title: `قلب تپنده هر سازمانی "روابط عمومی" است`, tags: ['طراحی لوگو'], minute: 6, date: '۰۸ دی ۱۴۰۰', imgFile: '../../../../../src/assets/images/news/img3.png' },
    ]);
    return (
        <MainPage>
            <StyledContainer>
                <div className="quickParent">
                    <div className="socialBox">
                        <div className="socialBoxIcons" >
                           <a href="#"> <InstagramIcon /></a>
                           <a href="#">  <TelegramIcon /></a>
                           <a href="#"> <LinkdinIcon /></a>
                           
                            
                        </div>
                        <div className="crycleProgress">
                        <Progress type="circle" percent={23} width={80} strokeWidth={3} strokeColor="#7E5EED" />
                        </div>
                    </div>
                    <div className="newsInfoBox">
                    <HeaderInfo newsInfo={newsInfo} />
            <QuickLink links={newsInfo.links} />
            <div className="textEditorQuick">
              <p>
                نسبت طلایی از جمله قاعده هایی است که در فعالیت های هنری، معماری،
                سازه های مهندسی، طبیعت و حتی در خلقت انسان مورد استفاده قرار
                گرفته است. بسیاری از مهندسان حتی بدون اطلاع از این قاعده بصورت
                غریزی از آن در ساختمان سازی و معماری بنا استفاده کرده اند. چرا
                که طراحی زیبایی های بصری با توجه به نسبت طلایی به صورت ذاتی در
                نگاه و دید انسان وجود دارد. ظریف گرافیک قصد دارد از مزایای
                بکارگیری نسبت طلایی در طراحی لوگو با شما صحبت کند تا با جزئیات
                این قانون شگفت انگیز بیشتر آشنا شوید.
              </p>
              <h4>نسبت طلایی چیست و چه ارتباطی با طراحی لوگو دارد؟</h4>
              <div className="discription">
                هرگاه در یک طرح هندسی، هنری و معماری نسبت قسمت بزرگتر به کوچکتر
                با مجموع آن ها به بخش بزرگتر برابر باشد Golden Ratio یا همان
                نسبت طلایی را به دست خواهیم آورد. این عدد به طور تقریبی 1.618
                است. خب اینبار ظریف گرافیک موضوع شگفت انگیز نسبت طلایی را در
                طراحی لوگو حرفه ای توجیه خواهد کرد که چرا از این قاعده بهتر است
                در لوگو استفاده شود؟ همانطور که گفته شد چشم انسان به طور غریزی
                با چیدمان و ترکیب نسبت طلایی آشنایی دارد، اما ممکن است اطلاعات
                علمی از آن نداشته باشد. بصورتی که در طول تاریخ و حتی قبل از
                میلاد معماری هایی مشاهده شده که با استفاده از قاعده نسبت طلایی
                اجرا شده اند که در آن زمان خبری از این دانش نبوده است.
              </div>
              <img src={img6} />
              <h4>نسبت طلایی چیست و چه ارتباطی با طراحی لوگو دارد؟</h4>
              <div className="discription">
                هرگاه در یک طرح هندسی، هنری و معماری نسبت قسمت بزرگتر به کوچکتر
                با مجموع آن ها به بخش بزرگتر برابر باشد Golden Ratio یا همان
                نسبت طلایی را به دست خواهیم آورد. این عدد به طور تقریبی 1.618
                است. خب اینبار ظریف گرافیک موضوع شگفت انگیز نسبت طلایی را در
                طراحی لوگو حرفه ای توجیه خواهد کرد که چرا از این قاعده بهتر است
                در لوگو استفاده شود؟ همانطور که گفته شد چشم انسان به طور غریزی
                با چیدمان و ترکیب نسبت طلایی آشنایی دارد، اما ممکن است اطلاعات
                علمی از آن نداشته باشد. بصورتی که در طول تاریخ و حتی قبل از
                میلاد معماری هایی مشاهده شده که با استفاده از قاعده نسبت طلایی
                اجرا شده اند که در آن زمان خبری از این دانش نبوده است.
              </div>
              <div className="discription">
                هرگاه در یک طرح هندسی، هنری و معماری نسبت قسمت بزرگتر به کوچکتر
                با مجموع آن ها به بخش بزرگتر برابر باشد Golden Ratio یا همان
                نسبت طلایی را به دست خواهیم آورد. این عدد به طور تقریبی 1.618
                است. خب اینبار ظریف گرافیک موضوع شگفت انگیز نسبت طلایی را در
                طراحی لوگو حرفه ای توجیه خواهد کرد که چرا از این قاعده بهتر است
                در لوگو استفاده شود؟ همانطور که گفته شد چشم انسان به طور غریزی
                با چیدمان و ترکیب نسبت طلایی آشنایی دارد، اما ممکن است اطلاعات
                علمی از آن نداشته باشد. بصورتی که در طول تاریخ و حتی قبل از
                میلاد معماری هایی مشاهده شده که با استفاده از قاعده نسبت طلایی
                اجرا شده اند که در آن زمان خبری از این دانش نبوده است.
              </div>
              <div className="discription">
                هرگاه در یک طرح هندسی، هنری و معماری نسبت قسمت بزرگتر به کوچکتر
                با مجموع آن ها به بخش بزرگتر برابر باشد Golden Ratio یا همان
                نسبت طلایی را به دست خواهیم آورد. این عدد به طور تقریبی 1.618
                است. خب اینبار ظریف گرافیک موضوع شگفت انگیز نسبت طلایی را در
                طراحی لوگو حرفه ای توجیه خواهد کرد که چرا از این قاعده بهتر است
                در لوگو استفاده شود؟ همانطور که گفته شد چشم انسان به طور غریزی
                با چیدمان و ترکیب نسبت طلایی آشنایی دارد، اما ممکن است اطلاعات
                علمی از آن نداشته باشد. بصورتی که در طول تاریخ و حتی قبل از
                میلاد معماری هایی مشاهده شده که با استفاده از قاعده نسبت طلایی
                اجرا شده اند که در آن زمان خبری از این دانش نبوده است.
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="socialBox desktop"></div>
          <div>
            <div className="divider"></div>
            <AllNews newsList={news} />
          </div>
        </div>
      </StyledContainer>
    </MainPage>
  );
};

export default Info;
