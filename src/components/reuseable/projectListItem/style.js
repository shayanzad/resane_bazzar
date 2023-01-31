import styled from "styled-components";

export const StyledContainer=styled.div`
border-radius:11px;
.rightBox{
    display:flex;

}
background:#fff;
padding:28px;
justify-content: space-between;
display: flex;
width:100%;

align-items: flex-start;
.textBox{
    max-width:70%;
    a{
        color:#7E5EED;
        font-weight: 700;
        font-size: 12px;
        line-height: 150%;
        img{
            margin:0px 5px;
        }
     }
    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 200%;
    }
    h2{
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;

    }
}
.imageBox{
    width:128px;
    height:128px;
    background:red;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray0) !important;
    border-radius:11px;
    margin-left:24px;
}
.imageBox2{
    img{
        width:100%;
    }
    display:none;
    width:40px;
    height:40px;
}
.detailBox{
    text-align: end;
    width: 120px;
    p{
        font-weight: 700;
        font-size: 14px;
        line-height: 200%;
        color: var(--gray6);

    }
    span{
        font-weight: 600;
        font-size: 12px;
        line-height: 150%;
        color: var(--gray4);
    }
}


@media only screen and (min-width: 769px) and (max-width: 1024px)  {
    .imageBox2{
        display:none;
    }
}
@media only screen and (min-width: 481px) and (max-width: 768px)  {
    flex-direction: column;
    .imageBox{
        display:none;
    }
    .imageBox2{
        display:inline;
    }
    .textBox{
        max-width:100%;
        .headerbox{
            display:flex;
            align-items: center;
        }
    }
    .detailBox{
        margin-top:24px;
        p{
            padding:0px;
            margin-bottom:0px;
            margin-left:10px;
        }
        width: 100%;
        display:flex;
        align-items: center;
    }
  
}
@media only screen and (min-width: 0px) and (max-width: 480px)  {
    flex-direction: column;
    .imageBox{
        display:none;
    }
    .imageBox2{
        display:inline;
    }
    
    .textBox{
        max-width:100%;
        .headerbox{
            display:flex;
            align-items: center;
        }
    }
    .detailBox{
        margin-top:24px;
        p{
            padding:0px;
            margin-bottom:0px;
            margin-left:10px;
        }
        width: 100%;
        display:flex;
        align-items: center;
    }

}
`