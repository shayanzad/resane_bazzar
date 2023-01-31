import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .sample {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 16rem;
    height: 16rem;
    border-radius: 1rem;
    background-color: var(--gray0);
    transition: transform 0.5s;
  }
  .user {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-top: 1rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }
  div > span.sub {
    color: var(--gray4) !important;
    font-size: 12px;
    text-align: right;
  }

  h5 {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    .sample {
      max-width: 16.125rem;
      max-height: 16.125rem;
    }
  }
`;
