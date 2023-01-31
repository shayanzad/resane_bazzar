import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: var(--gray10);
    font-weight: 700;
    font-size: 16px;
  }

  button {
    color: var(--gray10) !important;
  }

  .content {
    width: 100%;
    background-color: var(--pure-white);
    height: auto;
    margin-top: 20px;
    border-radius: 11px;
    padding: 32px 64px;

    .flex-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      margin: 20px 0;
    }

    .text-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .uploades {
      margin: 25px;
      cursor: pointer;
      max-width: 280px;

    }
    .ant-badge{
      margin: 5px;
    }

    .loading{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
    }

  }

  input,
  button {
    width: 350px;
  }

  @media screen and (max-width: 780px) {
    .content {
      padding: 5px;

      .flex-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
    }

    input,
    textarea,
    button {
      width: 320px;
    }
  }
`;
