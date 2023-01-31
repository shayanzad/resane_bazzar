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
    p{
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 200%;
    }
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
