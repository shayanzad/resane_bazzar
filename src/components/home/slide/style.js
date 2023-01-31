import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 400px;
  overflow: auto;
  background: var(--gray0);
  padding: 15px;
  border-radius: 16px;
  margin-bottom: 60px;
  padding:20px 100px; 
  button {
    max-width: 120px;
    height: 56px;
    margin-left:16px;
  }
   p {
    max-width: 80% ;
    text-align: right;
    
  }

  h1{
    font-size:34px;
    text-align:right;
  }

  button.text {
    color: var(--primary);
  }

  .btn {
    display: flex;
    
  }

  @media (max-width: 780px) {
    padding:20px; 
    
    .responsive{
      width:317px;
    }
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    max-width: 350px;
    min-height: 536px;
    width: 100%;
    padding:15px; 
    margin-top:100px;
    p {
      max-width: 100%;
      text-align: center;
      
    }
    h1{
      font-size:24px;
      text-align:center;
    }

    .btn {
      display: flex;
      justify-content:center;
    }

    .responsive{
      width:300px;
    }
  
  
  }
`;
