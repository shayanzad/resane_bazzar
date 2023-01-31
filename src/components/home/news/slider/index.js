import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowLeftSvg from "../../../svg/icons/arrow-left";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { StyledContainer } from "./style";
import NewsBox from "./news-box";
import Button from "../../../uiKit/button";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Slider(props) {
  const [newsInfo, setNewsInfo] = useState([
    {id:"1",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده`},
    {id:"2",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده` },
    {id:"3",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده` },
    {id:"1",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده` },
    {id:"2",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده` },
    {id:"3",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده` },
    {id:"1",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده` },
    {id:"2",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده`},
    {id:"3",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده` },
    {id:"1",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده`},
    {id:"2",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده` },
    {id:"3",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده`},
    {id:"1",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده` },
    {id:"2",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده`},
    {id:"1",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده`},
    {id:"2",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده`},
    {id:"1",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده`},
    {id:"2",text:`متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,title:`متاورس" فرصتی برای رسیدن به زندگی آینده` },
  ]);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <StyledContainer>
        
      <div className="header ">
        <div>
          <div className="titr">
            <span className="titr">
              اخبار و اطلاعیه‌ها
            </span>
            <Link to="/news">
              <span className="link">
                مشاهده همه
                <ArrowLeftSvg />
              </span>
            </Link>
          </div>
        </div>
        <div className="controller">
          <Button
            width="42px"
            type="text"
            className="next"
            onClick={() => controlledSwiper.slidePrev()}
          >
            <ArrowRightOutlined />
          </Button>
          <Button
            width="42px"
            type="text"
            className="next"
            onClick={() => controlledSwiper.slideNext()}
          >
            <ArrowLeftOutlined />
          </Button>
        </div>

      </div>
      <Swiper
              slidesPerView={1}
              
              slidesPerGroup={1}
              breakpoints={{
            // when window width is >= 576px
                300: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,

                },
            // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,

                },
            // when window width is >= 1024px
                1024: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                },
                1280: {
                  spaceBetween: 20,                  
                  slidesPerView: 3,
                },
              }}
        loop={true}
        loopFillGroupWithBlank={true}
        onSlideChange={(value) => setControlledSwiper(value)}
        onSwiper={(value) => setControlledSwiper(value)}
        modules={[Navigation,Pagination]}
        className="mySwiper"
      >
        {newsInfo.map((news) => (
          <SwiperSlide key={news}>
            <Link to={`/news/${news.id}`}>
            <NewsBox news={news} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
     

    </StyledContainer>
  );
}

export default Slider;
