import styled from "styled-components";

export const StyledContainer=styled.div`
display:flex;
width:100%;
justify-content:space-between;
padding:50px 100px;

div{
   display:flex;
   flex-direction:column;
    align-items:center;
    justify-content:center;
}
p{
    width:60%;
    text-align:center;
    color:var(--gray6);
    margin-top:24px;
}

@media(max-width:480px){
   display:flex;
   flex-direction:column;
   padding:25px;
   p{
    width:100%;
    margin-bottom:30px;
   }
}

@media(max-width:833px){
    padding:50px;
    p{
        width:100%;
        
       }
}
`