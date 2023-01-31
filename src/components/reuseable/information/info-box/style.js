import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .info {
    margin-right: 25px;
  }

  .info span {
    margin-right: 5px;
  }

  span {
    color: var(--gray6);
    font-size: 12px;
    position: relative;
    top: -8px;
  }

  h2 {
    color: var(--gray10);
    font-size: 18px;
    font-weight: 700;
  }

  p {
    margin-right: 45px;
  }

  svg {
    position: relative;
    top: 10px;
  }
  .hasSvg {
    display: flex;
    justify-content: center;
  }

  .inner {
    margin-right: 8px;
  }

  .rating {
    display: flex;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    .info {
      margin-right: 0;
      text-align: center;
    }

    .h2 {
      margin-right: 0;
    }

    .rating {
      display: flex;
      width:100%;
      justify-content: space-around;
    }
    p {
    margin-right: 0;
  }


  }
`;
