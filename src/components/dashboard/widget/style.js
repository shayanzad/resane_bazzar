import styled from "styled-components";

export const StyledContainer = styled.div`
background:#fff;
border-radius: 11px;
padding:30px 32px 30px 32px;
justify-content: space-between;
margin-top:20px;
width:100%;
height:200px;

.widgetCounter{
    font-weight: 800;
    font-size: 34px;
    line-height: 150%;
    color: var(--gray4) !important;
}
.boxIcon{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.textBox{
    span{
        a{

            color: #7E5EED !important;
        }
        font-weight: 700;
        font-size: 12px;
        line-height: 150%;
        img{
            margin:0px 10px;
        }
    }
    h2{
        margin:34px 0px 8px 0px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 150%;
        text-align: right;
        color: color: var(--gray7) !important;;
    }
}
@media only screen and (min-width: 769px) and (max-width: 1024px)  {
 
}
@media only screen and (min-width: 481px) and (max-width: 768px)  {
    height:240px;
}
@media only screen and (min-width: 0px) and (max-width: 480px)  {
    height:240px;
}


`