import styled from "styled-components";

export const StyledContainer = styled.div`
background:#fff;
border-radius: 11px;
display: flex;
width:100%;
justify-content: start;
align-items: center;

height:80px;
.boxIcon{
    display: flex;
    margin:10px 10px 7px 10px;
    justify-content: space-around;
    align-items: center;
    background:${props=>props.color};
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

h2{ 
    margin:0px;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    text-align: right;
    color: var(--gray7) !important;
}

@media only screen and (min-width: 769px) and (max-width: 1024px)  {
    flex-direction: column;
    height:100px;
    h2{ 
      
      font-size: 12px;
      
  }
    
  }
  @media only screen and (min-width: 481px) and (max-width: 768px)  {
    flex-direction: column;
    height:100px;
    h2{ 
      
      font-size: 12px;
      
  }
  }
  @media only screen and (min-width: 0px) and (max-width: 480px)  {
    flex-direction: column;
    height:100px;
    h2{ 
      
      font-size: 12px;
      
  }
  

  }



`