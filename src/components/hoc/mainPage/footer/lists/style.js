import Styled from "styled-components";
export const StyledContainer = Styled.div`
display:flex;
justify-content:center;
align-items:center;

span{
    margin:0 32px ;
    font-style: normal;
font-weight: 700;
font-size: 14px;
}

a{
    color:var(--pure-white)

}

@media(max-width:480px){
    span{
        margin:0 15px;
        font-style: normal;
    font-weight: 700;
    font-size: 14px;
    }
}
@media(max-width:834px){
    span{
        margin:0 14px;
        font-style: normal;
    font-weight: 700;
    font-size: 14px;
    }
}
`;
