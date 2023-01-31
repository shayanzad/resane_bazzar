import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  div,
  form {
    width: 400px;
  }

  p {
    font-size: 12px;
    color: var(--gray6);
    text-align: right;
    margin-bottom: 24px;
  }
  span {
    margin: 0 4px;
  }
  h2 {
    color: var(--gray10);
    font-size: 24px;
  }

  a {
    font-size: 12px;
    color: var(--primary);
    margin-right: 4px;
  }

  .resend {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    p {
      color: var(--pink10);
    }
  }

  .change-number{
    text-align: center;
    margin-top:16px;
  }

  
  @media (max-width: 480px) {
    div,
    form {
      width: 350px;

      p,
      h2 {
        text-align: center;
      }
      .responsive {
        position: absolute;
        bottom: 0;
      }
    }
  }
`;
