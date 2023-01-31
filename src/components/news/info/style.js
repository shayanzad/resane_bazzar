import styled from "styled-components";

export const StyledContainer=styled.div`
.quickParent{
    display:flex;

}

.relative{
    display: flex;
}
.newsInfoBox{
    flex:82%;
    max-width:82%;
    .textEditorQuick{
        p{
            font-weight: 700;
            font-size: 14px;
            line-height: 200%;
        }
        h4{
            font-weight: 700;
            font-size: 16px;
            line-height: 150%;
        }
        .discription{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 200%;
            margin:25px 0;
            
        }
        img{
            width:100%;
            margin:20px 0px;
        }
    }
}

.socialBox{
    flex:18%;
    max-width:18%;
}
.socialBoxIcons{
    width:80px;
    height:180px;
    border-radius:11px;
    background: #7E5EED;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.divider{
    margin:25px 0px;
    border: 1px dashed #D2D1D4;
}
.crycleProgress{
    width:80px;
    height:80px;
    margin-top:20px;
    
    // border:1px solid;
    // border-radius:50%;
}

@media only screen and (min-width: 769px) and (max-width: 1024px)  {
    .quickParent {
        .newsInfoBox{
            flex:100%;
            max-width:100%;
        }
        .socialBox{
            flex:unset;
            left: 50px;
            position: absolute;
            top: 10%;
        }
    }

   
  }
  @media only screen and (min-width: 481px) and (max-width: 768px)  {
    .quickParent {
        .socialBox{
            display:none;
        }
        .newsInfoBox{
            flex:100%;
            max-width:100%;
        }
    }

   
  }
  @media only screen and (min-width: 0px) and (max-width: 480px)  {
    margin-top: 80px;
    .quickParent {
        .socialBox{
            display:none;
        }
        .newsInfoBox{
            flex:100%;
            max-width:100%;
        }
    }
  }



`