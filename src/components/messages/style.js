import styled from "styled-components";

export const StyledContainer=styled.div`
/* display:flex;
justify-content:center;
align-content:center;
align-items:center;
flex-direction:column; */
display: flex;
flex-direction: column;
.messages{
    display: flex;
    .messageItem{
        &:first-child{
            margin-left: 10px;
            flex: 40%;
            max-width: 40%;
        }
        &:last-child{
            margin-right: 10px;
            flex: 60%;
            max-width: 60%; 
        }
        
    }
}
@media only screen and (min-width: 781px) and (max-width: 1024px)  {
    .messages{
        flex-direction: column;
        .messageItem{
            &:first-child{
                margin-left: 0px;
                flex: 100%;
                max-width: 100%;
            }
            &:last-child{
                margin-right: 0px;
                flex: 100%;
                max-width: 100%; 
            }
            
        }
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 780px)  {
    .messages{
        flex-direction: column;
        .messageItem{
            &:first-child{
                margin-left: 0px;
                flex: 100%;
                max-width: 100%;
            }
            &:last-child{
                margin-right: 0px;
                flex: 100%;
                max-width: 100%; 
            }
            
        }
    }

  }
  @media only screen and (min-width: 0px) and (max-width: 480px)  {
    .messages{
        flex-direction: column;
        .messageItem{
            &:first-child{
                margin-left: 0px;
                flex: 100%;
                max-width: 100%;
            }
            &:last-child{
                margin-right: 0px;
                flex: 100%;
                max-width: 100%; 
            }
            
        }
    }

  }

`