import styled from "styled-components";

export const StyledContainer=styled.div`

.widgetItem{
display: flex;
flex-wrap: wrap;
margin-top:20px ;
a{
   color:#7E5EED;
}
justify-content: space-between;
     .detailLink{
        flex:18%;
        max-width:18%; 
        
     }
}
@media only screen and (min-width: 769px) and (max-width: 1024px)  {
    .detailLink{
      flex:18% !important;
      max-width:18% !important; 
        margin-bottom:10px;
     }
  }
  @media only screen and (min-width: 481px) and (max-width: 768px)  {
    .detailLink{
        flex:23% !important;
        max-width:23% !important; 
        margin-bottom:10px;
        &:last-child {
         display:none;
      }
     }
  }
  @media only screen and (min-width: 0px) and (max-width: 480px)  {
    .detailLink{
        flex:23% !important;
        max-width:23% !important; 
        margin-bottom:10px;
        &:last-child {
         display:none;
      }
     }
  }
`