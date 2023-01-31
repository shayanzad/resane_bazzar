import styled from "styled-components";

export const StyledContainer=styled.div`

background:var(--gray0) !important;
border-radius:11px;
padding:32px 44px;
margin: 0 10px 50px 10px;
.quickLink p{
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: right;

}
.linkText span{
    margin:0px 12px;
    color:var(--primary) !important;
}
.linkText {
    display:flex;
    align-items: flex-start;
    margin:10px 0px ;
}
@media only screen and (min-width: 769px) and (max-width: 1024px)  {
    
  
   
}
@media only screen and (min-width: 481px) and (max-width: 768px)  {
    padding:32px 30px;
    margin: 0 0px 50px 0px;
 
}
@media only screen and (min-width: 0px) and (max-width: 480px)  {
    padding:32px 20px;
    margin: 0 0px 50px 0px;
}

`