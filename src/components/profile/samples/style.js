import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 80px;
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
  }
  .title {
    display: flex;
    align-items: baseline;
  }
  .card {
    width: 280px;
    height: 280px;
    border-radius: 16px;
    margin-left: 10px;
    margin-top: 20px;
  }

  h2 {
    font-weight: 800;
    font-size: 24px;
  }
`;
