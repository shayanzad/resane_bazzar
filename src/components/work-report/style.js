import styled from "styled-components";

export const StyledContainer = styled.div`

.reportMain{
    display: flex;
    .rightMAin{
        flex: 60%;
        max-width: 60%;

    }
    .widgetsReport{
        margin: 0px 15px;
        flex: 40%;
        max-width: 40%;
        .widget{
            text-align: center;
            margin: 0px 5px;
            padding: 10px;
            display: flex;
            background-color: var(--gray0);
            border-radius: 11px;
            cursor: pointer;
            min-height: 90px;
            width: 100%;
            -webkit-transition: all 0.15s;
            transition: all 0.15s;
            flex-wrap: nowrap;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            align-items: center;
                    span{

                        color: var(--gray4);
                        font-size: 12px; 
                    }

                
                    background-color: var(--gray0);
                    border-radius: 11px;
                    cursor: pointer;
                    min-height: 90px;
                    width: 100%;
                    transition: all 0.15s ;
                    &:hover{
                        background-color: var(--primary);
                        span{

                            color: white;
                        }
                        p{
                            color: white;

                        }

                    }
                    
                
            }
        .widgetsTop{
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            
            
        }
        .widgetsBottom{
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            
            
        }
        .widgetsCenter{
            margin: 15px 0px;
            
            text-align: end;
            padding: 10px;
            background-color: var(--gray0);
            border-radius: 11px;
            cursor: pointer;
            min-height: 90px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            transition: all 0.15s ;
            span{
                font-size: 12px;
                color: var(--gray4);

            }
            
        }
    }
    .buttonGroupBox{
        display: flex;
        align-items: center;
        button{
            margin-bottom: 15px;
            font-size: 12px;
            width: fit-content;
        }
    }
    .chartReportBox{
        background-color: var(--gray0);
        width: 100%;
        min-height: 300px;
        border-radius: 11px;
    }
}












@media only screen and (min-width: 781px) and (max-width: 1024px)  {
    
  }
  @media only screen and (min-width: 0px) and (max-width: 1024px)  {
    .reportMain{
    display: flex;
    flex-direction: column;
    .rightMAin{
        flex: 100%;
        max-width: 100%;

    }
    .widgetsReport{
        margin-top: 20px;
        flex: 100%;
        max-width: 100%;
    }
}

  }
  @media only screen and (min-width: 0px) and (max-width: 480px)  {
   

  }

`