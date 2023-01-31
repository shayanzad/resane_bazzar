import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;

  .main {
    overflow-x: hidden;
    max-width: 1180px;
    width: 100%;
    margin-bottom:400px;    
    padding:0;

    @media(max-width:1180px){
      padding: 0 40px;
    }

    @media(max-width:480px){
      padding: 0 20px;
    }
  }
`;
