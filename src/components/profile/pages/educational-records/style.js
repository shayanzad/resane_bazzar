import styled from "styled-components";

export const StyledContainer = styled.div`
.ant-picker.datePicker.ant-picker-rtl{
    width: 100%;
}
.nextBox{
    background-color: #fff;
    padding:20px 30px;
    width:50%;
    margin-right:auto;
    margin: 30px auto 20px 10px;

}
.formBox{
    padding:20px 30px;
    background:#fff;
    margin-top:20px;
    border-radius:11px;
    display:flex;
   
    .form{
        flex:48%;
        max-width:48%;
        margin:10px 15px;
        .title{
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 150%;
            margin-bottom:20px;
        }
        button{
            border-radius: 11px;
            display: flex;
            align-items: center;
            span{
                margin-right: 5px;
            }
        }
    }

}
.progressBox{
    width:100%;
    display: flex;
    flex-direction: column;
    p{
        text-align: end;
        margin:0px;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 150%;
        color:var(--gray6)
    }
}

@media only screen and (min-width: 769px) and (max-width: 1024px)  {
    
}
@media only screen and (min-width: 481px) and (max-width: 768px)  {
    .nextBox{
        width:65%;
        margin: 30px auto 20px 0px;

       
        
    
    }
    .formBox{
        display: flex;
        flex-direction: column;
        .form{
            &:first-child{
                margin-bottom: 50px;
            }
        flex:100%;
        max-width:100%;
        margin:10px 15px;
        .title{
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 150%;
            margin-bottom:20px;
        }
    }
}

}
@media only screen and (min-width: 0px) and (max-width: 480px)  {
    .nextBox{
        width:100%;
    margin: 30px auto 20px 0px;
       
        
    
    }
    .formBox{
        display: flex;
        flex-direction: column;
        .form{
            &:first-child{
                margin-bottom: 50px;
            }
        flex:100%;
        max-width:100%;
        margin:10px 15px;
        .title{
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 150%;
            margin-bottom:20px;
        }
    }
}

}
`;
