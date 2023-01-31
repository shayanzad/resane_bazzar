import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  .userInfo {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  hr {
    border-top: 3px dotted var(--gray2) !important;
    margin-right: 25px !important;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -60px;
    hr {
      margin-right: 0 !important;
    }
  }
`;
