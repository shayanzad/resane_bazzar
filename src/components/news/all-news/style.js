import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom:50px ;
  .allNewsList {
    display: flex;
    flex-wrap: wrap;
  }
  .allNewsList .newsItem{
    flex:33%;
    max-width:33%;
  }

  
  button {
    margin-right: 8px;
  }
  

  @media only screen and (min-width: 481px) and (max-width: 1024px)  {
    .allNewsList .newsItem{
      flex:50%;
      max-width:50%;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 480px)  {
    .allNewsList .newsItem{
      flex:100%;
      max-width:100%;
      
    }
  }

 
`;
