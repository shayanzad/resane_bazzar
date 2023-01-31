import styled from "styled-components";

export const StyledContainer=styled.div`
margin-top:120px;
  .title {
    display: flex;
    align-items: baseline;
  }

  .comments{
    .comment{
      display: flex ;
    justify-content: space-between;
    margin-top: 48px;
    width: 100%;
    }

  }

  .info{
    max-width:65%;
    min-width:350px;
    width: auto;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px)  {
 
  }
  @media only screen and (min-width: 481px) and (max-width: 768px)  {
    .comment{
      display: flex ;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 480px)  {
    .comment{
      display: flex ;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  
`