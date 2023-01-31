import styled from "styled-components";

export const StyledContainer=styled.div`

.widgetItem{
display: flex;
flex-wrap: wrap;
justify-content: space-between;
     .dd{
        flex:32%;
        max-width:32%; 
       
     }
}
@media only screen and (min-width: 769px) and (max-width: 1024px)  {
    .dd{
        flex:48% !important;
        max-width:48% !important; 
       
     }
  }
  @media only screen and (min-width: 481px) and (max-width: 768px)  {
    .dd{
      flex:48% !important;
      max-width:48% !important;  
       
     }
  }
  @media only screen and (min-width: 0px) and (max-width: 480px)  {
    .dd{
        flex:100% !important;
        max-width:100% !important; 
     }
  }
`