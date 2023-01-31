import styled from "styled-components";

export const StyledContainer = styled.div`
display:flex;
padding-bottom: 50px;

  flex-wrap: wrap;
  .parentBaner img{
    width:100%;
    // height:337px;
    border-radius: 16px;
}
width: 100%;
height: auto;
position: relative;
padding-bottom:50px ;
.parentBaner{
    flex: 50%;
    max-width: 50%;
}
.single-new{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 337px;
}
.banerBox{
    display:flex;
    flex-direction: column;

}
  
 .banerTextBox h2{
    font-size:16px;
    font-Weight:700;
  }
  .banerTextBox{
    display:flex;
    flex-direction: column;
    width:100%;
    margin:10px;
    justify-content: center;
  }

  .banerTextBox h2{
    font-size: 34px;
    font-weight: 800;
    line-height: 51px;
    letter-spacing: 0em;
    text-align: right;
  }
  .suggest{
    flex: 50%;
    max-width: 50%;
  }
  

    @media only screen and (min-width: 769px) and (max-width: 1024px)  {
        .suggest{
            flex: 50%;
            max-width: 50%;
          }
          .parentBaner{
            flex: 50%;
            max-width:50%;
            
          }
          .banerTextBox h2{
            font-size: 24px;
            line-height: 36px;
          }
    }


 

  @media only screen and (min-width: 0px) and (max-width: 768px)  {
    .suggest{
        flex: 100%;
        max-width: 100%;
      }
      .parentBaner{
        flex: 100%;
        max-width: 100%;
        margin: 0px 20px;
    }
    .banerTextBox h2{
        font-size: 24px;
        line-height: 36px;
      }
}




`