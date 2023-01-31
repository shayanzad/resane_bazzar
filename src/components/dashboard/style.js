import styled from "styled-components";

export const StyledContainer=styled.div`
.breadcrumb{
    margin-bottom:20px;
}
.buttonAddMobile{
    display:none;
}
.buttonAddDesktop{
       display:inline;
   }
@media only screen and (min-width: 769px) and (max-width: 1024px)  {
 
  }
  @media only screen and (min-width: 481px) and (max-width: 768px)  {
    
  }
  @media only screen and (min-width: 0px) and (max-width: 480px)  {
   .buttonAddMobile{
    display:inline;
    margin:50px 0px 30px 0;
   }
   .buttonAddDesktop{
    display:none;
   }
  }
`