import styled from "styled-components";

export const StyledContainer = styled.div`
display:flex;
padding:0px 0px 50px 0px;
.keyWords{
    padding:0px 0px 10px 0px;
    span{
        margin:0px 0px 0px 20px;
        font-weight: 400;
        font-size: 14px;
        line-height: 200%;
        color: var(--gray4) !important;
    }
}
.newsInfoText{
    h2{
        font-style: normal;
        font-weight: 800;
        font-size: 34px;
        line-height: 150%;
        text-align: right;
        color: #1D1929;
        margin:0 0 35px 0 ;
    }
}
.newsInfoText{
    display: flex;
    flex:55%;
    flex-direction: column;
    justify-content: start;
    margin:25px 20px 0px 20px;
}
.newsInfoImage{
    img{
        width: 100%;
        border-radius: 16px;
       }
    flex:45%;
}
@media only screen and (min-width: 769px) and (max-width: 1024px)  {
    
  
   
  }
@media only screen and (min-width: 481px) and (max-width: 768px)  {
    flex-direction: column;
    .newsInfoImage{
        
        flex:100%;
    }
    .newsInfoText{
        h2{
            font-size: 24px;
            margin:0 0 25px 0 ;
        }
    }
   
  }
  @media only screen and (min-width: 0px) and (max-width: 480px)  {
    flex-direction: column;
    
    .newsInfoText{
        h2{
            font-size: 24px;
            margin:0 0 25px 0 ;
        }
    }
  }

`