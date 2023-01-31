import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  p {
    color: var(--gray10);
    font-weight: 400;
    font-size: 14px;
    margin:0px
  }

  h2 {
    color: var(--primary);
    font-weight: 700;
    font-size: 16px;
    margin-top:5px
  }

  span {
    color: var(--gray10);
    font-weight: 700;
    font-size: 16px;
  }
`;
