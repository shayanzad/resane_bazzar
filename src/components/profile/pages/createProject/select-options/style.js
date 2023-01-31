import styled from "styled-components";

export const StyledContainer = styled.div`
.dddddd{
    border-radius: 11px !important;
}
.tags{

&.active{
    background:var(--purple10);
    color:#fff;
}
font-size: 16px;
padding:8px;
margin:10px;
cursor:pointer;
-webkit-user-select: none; /* Safari */
-ms-user-select: none; /* IE 10 and IE 11 */
user-select: none; /* Standard syntax */
}
.createProjectParent{
    min-height: 60vh;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
        .title{
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 150%;
            margin-bottom:20px;
        }
        .optionsBody{

            padding:20px 30px;
        }
        .options{
            margin: 30px 0 20px auto;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            
        }
}
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
form{
    margin-top:20px;
    padding:20px 30px;
    
}
.formBoxd{
    
    background:#fff;
    
    border-radius:11px;
    display:flex;
   
    .form{
        flex:48%;
        max-width:48%;
        margin:10px 15px;
       
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
.textDescription{
    padding-top: 10px;
    font-size: 12px;
    color: var(--gray6);
    font-weight: 600;
}
.descriptionBox{
    margin:10px 15px !important;
  
        
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
    .formBoxd{
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
    .formBoxd{
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
