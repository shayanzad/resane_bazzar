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
        .user{
            display: flex;
            align-items: center;
            background-color: var(--gray0);
            padding: 10px 15px;
            border-radius: 11px;
            justify-content: space-between;
            margin-bottom: 20px;
            .userBox{
                display: flex;
                align-items: center;
                
            }
            p{
                font-weight: 700;
                font-size: 14px;
                line-height: 200%;
                margin:0px;
            }
            

}
}

.nextBox{
    background-color: #fff;
    padding:20px 30px;
    width:50%;
    margin-right:auto;
    margin: 30px auto 20px 10px;

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
    .nextBox{
        width:65%;
        margin: 30px auto 20px 0px;

       
        
    
    }
   
}

}
@media only screen and (min-width: 0px) and (max-width: 480px)  {
    .nextBox{
        width:100%;
    margin: 30px auto 20px 0px;
       
        
    
    }
   
}

}
`;
