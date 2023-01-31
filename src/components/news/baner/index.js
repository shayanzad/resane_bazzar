import React, { useState } from "react";
import { StyledContainer } from "./style";

import banerPost from "../../../../src/assets/images/news/banerPost.png";
import SingleNew from "./single-new/index";
import NewsDetail from "../news-detail/index";

import { Link } from "react-router-dom";
const Baner = () => {
  const [baner, setBaner] = useState({
    id: 1,
    title: "گام به گام با طراحی پوستر خلاقانه در رسانه بازار",
    tags: ["مقاله"],
    minute: 6,
    date: "۰۸ دی ۱۴۰۰",
  });
  const [news, setnews] = useState([
    {
      id: "1",
      text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,
      title: `۱۱ قانون طلایی طراحان حرفه ای لوگو`,
      tags: ["مقاله"],
      minute: 6,
      date: "۰۸ دی ۱۴۰۰",
    },
    {
      id: "2",
      text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,
      title: `رایج ترین جملاتی که به طراحان گفته می شود و درد دل آنها`,
      tags: ["رسانه های دیجیتال"],
      minute: 6,
      date: "۰۸ دی ۱۴۰۰",
    },
    {
      id: "3",
      text: `متاورس" زندگی آینده ما را شکل می‌دهد و با وجود اینکه شاید به دلیل نداشتن شناخت کافی از آن ترسناک به نظر برسد اما پذیرفتن آن اجتناب‌ناپذیر است.`,
      title: `قلب تپنده هر سازمانی "روابط عمومی" است`,
      tags: ["طراحی لوگو"],
      minute: 6,
      date: "۰۸ دی ۱۴۰۰",
    },
  ]);
  return (
    <StyledContainer>
      <div className="parentBaner">
        <Link to={`/news/${baner.id}`}>
          <img src={banerPost} />
          <div className="banerTextBox">
            <h2>{baner.title}</h2>
            <NewsDetail itemData={baner} />
          </div>
        </Link>
      </div>
      <div className="suggest">
        <div className="single-new">
          {news.map((newsd) => (
            <div key={newsd}>
              <Link to={`/news/${newsd.id}`}>
                <SingleNew news={newsd} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </StyledContainer>
  );
};
export default Baner;
