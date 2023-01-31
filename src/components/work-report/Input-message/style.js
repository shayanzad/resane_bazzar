import styled from "styled-components";

export const StyledContainer=styled.div`

.inputmessageCom{
    position: relative;
    input{
        &::placeholder{
            font-size: 14px;
            font-weight: 600;
        }
    }
    .sendIcon{

        transform: rotate(180deg);
        width: 20px;
        position: absolute;
        left: 13px;
        top: 6px;
        cursor: pointer;
        .anticon-send {
            width: 100% !important;
            svg{
                fill: rgba(165, 163, 169, 1);
            }
        }
    }
}
`