import React from "react";
import { StyledContainer } from "./style";
import NewsDetail from '../../news-detail/index'
import news1 from "../../../../../src/assets/images/news/news1.png";
import news2 from "../../../../../src/assets/images/news/news2.png";
function NewsBox({ news }) {
  const newsCreator = () => {
    switch (news.id) {
      case 1:
        return <img src={news1} className="images" />;
      case 2:
        return <img src={news2} className="images" />;
      case 3:
        return <img src={news1} className="images" />;
      case 4:
        return <img src={news2} className="images" />;
    }
  };
  return (
    <StyledContainer>
      <div className="boxNew">
        <div >
          {newsCreator()}
        </div>
        <h2>{news.title}</h2>
        <p>{news.text}</p>
        <NewsDetail itemData={news}/>

      </div>

    </StyledContainer>
  );
}

export default NewsBox;
