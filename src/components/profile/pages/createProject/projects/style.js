import styled from "styled-components";

export const StyledContainer = styled.div`

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
    width:unset;
    margin-right:auto;
    margin: 30px auto 20px 10px;

}
form{
    margin-top:20px;
    padding:20px 30px;
    
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


@media only screen and (min-width: 769px) and (max-width: 1024px)  {
    
}
@media only screen and (min-width: 481px) and (max-width: 768px)  {
   
    
}


@media only screen and (min-width: 0px) and (max-width: 480px)  {
    
   


}
`;
