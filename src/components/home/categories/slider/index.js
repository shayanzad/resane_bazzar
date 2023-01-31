import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowLeftSvg from "../../../svg/icons/arrow-left";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { StyledContainer } from "./style";
import CategoryBox from "./category-box";
import Button from "../../../uiKit/button";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Slider(props) {
  const [categoriesInfo, setCategoriesInfo] = useState([
    { name: "design", text: "طراحی پوستر" },
    { name: "infography", text: "اینفوگرافی" },
    { name: "clip", text: "تیزر و کلیپ" },
    { name: "design", text: "طراحی پوستر" },
    { name: "infography", text: "اینفوگرافی" },
    { name: "clip", text: "تیزر و کلیپ" },
    { name: "design", text: "طراحی پوستر" },
    { name: "infography", text: "اینفوگرافی" },
    { name: "clip", text: "تیزر و کلیپ" },
    { name: "design", text: "طراحی پوستر" },
    { name: "infography", text: "اینفوگرافی" },
    { name: "clip", text: "تیزر و کلیپ" },
    { name: "design", text: "طراحی پوستر" },
    { name: "infography", text: "اینفوگرافی" },
    { name: "clip", text: "تیزر و کلیپ" },
    { name: "design", text: "طراحی پوستر" },
    { name: "infography", text: "اینفوگرافی" },
    { name: "clip", text: "تیزر و کلیپ" },
  ]);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <StyledContainer>
        
      <div className="header ">
        <div>
          <div className="titr">
            <span className="titr">دسته بندی ها</span>
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
      <div className="mobile responsive">
        {categoriesInfo.map((cat) => (
          <CategoryBox cat={cat} />
        ))}

      </div>
      <br/>
        <p className="more mobile">
          بیشتر
        </p>
      <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            breakpoints={{
          // when window width is >= 576px
              300: {
                slidesPerView: 2,
              },
          // when window width is >= 768px
              768: {
                slidesPerView: 4,
              },
          // when window width is >= 1024px
              1024: {
                spaceBetween: 10,
                slidesPerView:6,
              },
              1280: {
                slidesPerGroup: 2,
                slidesPerView: 8,
              },
            }}
        loop={true}
        loopFillGroupWithBlank={true}
        onSlideChange={(value) => setControlledSwiper(value)}
        onSwiper={(value) => setControlledSwiper(value)}
        modules={[Navigation,Pagination]}
        className="mySwiper"
      >
        {categoriesInfo.map((cat) => (
          <SwiperSlide key={cat}>
            <Link>
            <CategoryBox cat={cat} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
     

    </StyledContainer>
  );
}

export default Slider;
