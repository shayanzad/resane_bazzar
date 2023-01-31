import Styled from "styled-components";

export const StyledContainer = Styled.div`
position: absolute;
left: 0;
bottom: 0;
width: 100%;
height:260px;
background-color: var(--Space-Cadet);
z-index:6;
.container{
    display:flex;
    justify-content: space-around;
    align-items:baseline;
    flex-wrap:wrap;
    padding-top:50px;
}

@media(max-width:480px){
    height:358px;
    .container{
    height:320px;
        font-size:14px;
        align-items:center;
        flex-direction:column;
        justify-content:space-between;
    }


}
`;
