import styled from "styled-components";

export const StyledContainer=styled.div`
.tags{
    border-radius: 1rem;
    font-Weight:600;
  }
.footerBox{
    display: flex;
  flex-wrap: wrap;
  }
  .footerBox .child2{
    display:flex;
    width: 200px;
  }
  .sub {
    color: var(--gray4) !important;
    font-size: 12px;
    text-align: right;
    display: flex;
    align-items: center;
    font-family: 'Peyda';
    font-style: normal;
    font-weight: 600;
    line-height: 150%;

    font-feature-settings: 'liga' off;

  }
    
  .sub .icon{
    margin:0px 10px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px)  {
    .footerBox{
        display: flex;
        flex-wrap: wrap;
      }
  }
  @media only screen and (min-width: 0px) and (max-width: 768px)  {
    .footerBox{
        display: flex;
        flex-wrap: wrap;
      }
      .tags{
        margin-bottom:10px;
      }
  }


    

  


`