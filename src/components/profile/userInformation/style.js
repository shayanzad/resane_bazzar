import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content:space-around;
  margin-top:100px;
  .box {
    display: flex;
    flex-direction: column;

    h2 {
      color: var(--gray10);
      font-weight: 800;
      font-size: 24px;
    }

    h3 {
      color: var(--gray10);

      font-weight: 700;
      font-size: 16px;
    }

    p {
      color: var(--gray10);
      font-weight: 400;
      font-size: 14px;
    }

    span {
      color: var(--gray5);
      font-weight: 600;
      font-size: 12px;
    }
  }

  @media(max-width:480px){
    justify-content:center;
    flex-direction: column;
  }
`;
