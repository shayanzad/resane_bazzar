import styled from "styled-components";

export const StyledContainer=styled.div`
    /* height: 100%; */
    height: 100%;
    display: flex;
    flex-direction: column;
.messageList{
    /* position: relative;
    height: 100%; */
    padding-top: 10px;
    max-height: 500px;
    overflow-y: scroll;
    box-sizing: border-box;
    &::-webkit-scrollbar{
        width: 5px !important;
        background-color: var(--gray2);
        
    }
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.0); 
        /* background-color: none; */
        /* color: none; */
        border-radius: 10px;
        background: #f1f1f1; 
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #f1f1f1; 
        height: 30px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }
    .user_user{
        margin-left: auto;
        margin-right: 5px;
        background-color :#F2EFFD;
    }
    .admin_user{
        margin-right: auto;
        margin-left: 10px;
        background-color: var(--gray0);
    }
    .messages{
        width: fit-content;
        max-width: 300px;
        margin-bottom: 30px;
        box-sizing: border-box;
        
        padding: 20px;
        border-radius: 11px;
        display: flex;
        flex-direction: column;
        p{
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 20px;
        }
        .date{
            font-size: 12px;
            color: var(--gray4);
            text-align: end;
        }
        /* margin: 0px 5px 20px 5px; */

    }
    .inpotMessageComponent{
        /* position: absolute;
        bottom: 10px; */
        width: 100%;
    }
}
`