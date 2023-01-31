import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowLeftSvg from "../../../svg/icons/arrow-left";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { StyledContainer } from "./style";
import SampleBox from "./sample-box";
import Button from "../../../uiKit/button";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Slider(props) {
  const [samplesInfo, setSamplesInfo] = useState([
    { title: "1", name: "حسین کاظمی" ,  subId:'hossein98' },
    { title: "2", name: "مریم عظیمی" ,  subId:'maryam009' },
    { title: "3", name: "علی عظیمی" ,  subId:'ali12' },
    { title: "1", name: "حسین کاظمی" ,  subId:'hossein98' },
    { title: "2", name: "مریم عظیمی" ,  subId:'maryam009' },
    { title: "3", name: "علی عظیمی" ,  subId:'ali12' },
    { title: "1", name: "حسین کاظمی" ,  subId:'hossein98' },
    { title: "2", name: "مریم عظیمی" ,  subId:'maryam009' },
    { title: "3", name: "علی عظیمی" ,  subId:'ali12' },
 
  ]);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <StyledContainer>
        
      <div className="header ">
        <div>
          <div className="titr">
            <span className="titr">نمونه کارها</span>
            <Link>
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
        {/* <div className="mobile responsive">
        {samplesInfo.map((sample) => (
          <SampleBox sample={sample} />
        ))}
      </div> */}
      </div>
      <Swiper
            slidesPerView={1}
            
            slidesPerGroup={1}
            breakpoints={{
          // when window width is >= 576px
              300: {
                spaceBetween: 20,
                slidesPerView: 1.3,
              },
          // when window width is >= 768px
              768: {
                spaceBetween: 20,
                slidesPerView: 2.5,
              },
          // when window width is >= 1024px
              1024: {
                spaceBetween: 20,
                slidesPerView: 3.5,
              },
              1280: {
                spaceBetween: 20,
                slidesPerGroup: 2,
                slidesPerView: 4,
              },
            }}
        loop={true}
        loopFillGroupWithBlank={true}
        onSlideChange={(value) => setControlledSwiper(value)}
        onSwiper={(value) => setControlledSwiper(value)}
        modules={[Navigation,Pagination]}
        className="mySwiper"
      >
        {samplesInfo.map((sample) => (
          <SwiperSlide key={sample}>
            <Link>
            <SampleBox sample={sample} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
     

    </StyledContainer>
  );
}

export default Slider;
