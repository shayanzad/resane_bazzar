import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowLeftSvg from "../../../svg/icons/arrow-left";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { StyledContainer } from "./style";
import FreelancerBox from "./freeLancer-box";
import Button from "../../../uiKit/button";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Slider(props) {
  const [freelancersInfo, setFreelancersInfo] = useState([
    { rate: "3", title: "1", name: "حسین کاظمی", subId: "hossein98" },
    { rate: "4", title: "2", name: "مریم عظیمی", subId: "maryam009" },
    { rate: "5", title: "3", name: "علی عظیمی", subId: "ali12" },
    { rate: "2.8", title: "4", name: "حسین کاظمی", subId: "hossein98" },
    { rate: "5", title: "5", name: "مریم عظیمی", subId: "maryam009" },
    { rate: "4.3", title: "6", name: "علی عظیمی", subId: "ali12" },
    { rate: "4.9", title: "7", name: "حسین کاظمی", subId: "hossein98" },
    { rate: "3.8", title: "8", name: "مریم عظیمی", subId: "maryam009" },
    { rate: "4", title: "9", name: "علی عظیمی", subId: "ali12" },
  ]);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <StyledContainer>
      <div className="header ">
        <div>
          <div className="titr">
            <span className="titr">برترین فرلنسرها</span>
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
      </div>
      <Swiper
        slidesPerView={1}
        
        slidesPerGroup={1}
        breakpoints={{
          // when window width is >= 576px
          300: {
            slidesPerView:1.6,
            spaceBetween: 10,

          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3.5,
            spaceBetween: 20,

          },
          // when window width is >= 1024px
          1024: {
            spaceBetween: 20,
            slidesPerView: 4.5,
          },
          1280: {
            slidesPerGroup: 2,
            spaceBetween: 20,
            slidesPerView: 6,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        onSlideChange={(value) => setControlledSwiper(value)}
        onSwiper={(value) => setControlledSwiper(value)}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {freelancersInfo.map((free) => (
          <SwiperSlide key={free}>
            <Link>
              <FreelancerBox free={free} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledContainer>
  );
}

export default Slider;
