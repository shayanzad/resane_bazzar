import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;

  h2 {
    color: var(--gray10);
    font-weight: 700;
    font-size: 14px;
  }

  p {
    color: var(--gray6);
    font-weight: 600;
    font-size: 12px;
  }

  .userinfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 5px;
  }

  .avatar {
    position: relative;
    top: 5px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
    }

    .userinfo {
      justify-content: center;
      align-items: center;
      margin-top: 6px;
      margin-right: 0;
    }
  }
`;
