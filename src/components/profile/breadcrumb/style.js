import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 11px;
  height: 80px;   
  background-color: var(--pure-white);
  padding: 22px 32px;
  font-weight: 800; 
  font-size: 24px;   
  color: var(--gray10);
  justify-content: space-between;
  align-items:center;
  .children{
    display:flex;
    flex:40%;
    max-width:40%;
    justify-content:end;
    align-items: center;
  }
  
  @media only screen and (min-width: 769px) and (max-width: 1024px)  {
    .title{
      font-size:22px;
    } 
    .children{
      display:flex;
      flex:30%;
      max-width:30%;
      justify-content:end;
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 768px)  {
   
    display: flex;
    justify-content: center;
    flex-direction: column-reverse; 
    text-align: center;
  height: unset;
  .children{
    display:flex;
    flex:100%;
    max-width:100%;
    justify-content:end;
    width:100%;

  }
  .title{
    margin:32px 0 0px 0;
    font-size:20px;
  } 

  }
  @media only screen and (min-width: 0px) and (max-width: 480px)  {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse; 
    text-align: center;
    height: unset;
    .title{
      margin:32px 0 0px 0;
      font-size:20px;
    }
    .children{
      display:flex;
      flex:100%;
      max-width:100%;
      justify-content:end;
      width:100%;
    }

  }
`;
