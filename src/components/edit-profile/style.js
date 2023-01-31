import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .content {
    width: 100%;
    background-color: var(--pure-white);
    height: auto;
    margin-top: 20px;
    border-radius: 11px;
    padding: 32px 64px;

    .flex-container {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }

    .text-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .flex-radio {
      display: flex;
      width: 44%;
      justify-content: flex-start;
    }
  }

  input,
  button {
    width: 340px;
  }

  .datePicker{
    width: 340px;
    border-radius: 16px;
    height: 54px;

  }

  @media screen and (max-width: 780px) {
    .content {
      padding: 5px;

      .flex-radio {
        display: flex;

        width: 100%;
        justify-content: center;
      }
    }

    input,
    textarea,
    button {
      width: 320px;
    }
  }
`;
