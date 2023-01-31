import styled from "styled-components";

export const StyledContainer = styled.div`

  .boxNew{
    display: flex;
     
    width: 100%;
    // margin: 10px;
  }
 
  .boxNew .images{
    width: 180px;
    height:99px;
    border-radius: 16px;
    margin:0px 20px
  }
  .boxNew h2{
    font-size:16px;
    font-Weight:700;
  }
  .textBox{
    display:flex;
    flex-direction: column;
    width:100%;
    justify-content: center;
  }
 
    @media only screen and (min-width: 769px) and (max-width: 1024px)  {
      .boxNew .images{
        width: 113px;
        height:99px;
        border-radius: 16px;
        margin:0px 20px
      }
      .boxNew h2{
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
  
  
      }
    }
    @media only screen and (min-width: 0px) and (max-width: 768px)  {
      .boxNew .images{
        width: 113px;
        height:99px;
        border-radius: 16px;
        margin:0px 10px
      }
      .boxNew h2{
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
  
  
      }
    }
  
 
  


`;
