import React from "react";
import { StyledContainer } from "./style";
import news1 from "../../../../../assets/images/news/news1.png";
import news2 from "../../../../../assets/images/news/news2.png";
function NewsBox({ news }) {
  const newsCreator = () => {
    switch (news.id) {
      case "1":
        return <img src={news1} />;
      case "2":
        return <img src={news2} />;
      case "3":
        return <img src={news1} />;
    }
  };
  return (
    <StyledContainer>
      <div className="news">
      {newsCreator()}
      </div>
        
     
      <h2>
        {news.title}
        </h2>
      <p>{news.text}</p>
    </StyledContainer>
  );
}

export default NewsBox;
