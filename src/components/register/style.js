import styled from "styled-components";

export const StyledContainer=styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 100%;
justify-content: center;
align-items: center;
margin-top: 100px;
div,form{
    width:400px;
   
}

p{
    font-size: 12px;
    color: var(--gray6);
    text-align: right;
    margin-bottom: 24px;
}

h2{
    color: var(--gray10);
    font-size: 24px;
}

a{
    font-size: 12px;
    color: var(--primary);
    margin-right: 4px;
}

.code-text{
    text-align: center;
    margin-top: 12px;
    color: var(--gray6);
}

@media(max-width:480px){
    div,form{
    width:350px;

    p,h2{
        text-align: center;
    }
    .responsive{
        position: absolute;
        bottom: 0;
    }
}


}

`