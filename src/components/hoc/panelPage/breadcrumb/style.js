import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 11px;
  height: 80px;
  background-color: var(--pure-white);
  padding: 22px 32px;
  font-weight: 800;
  font-size: 24px;
  color: var(--gray10);
  justify-content: space-between;
  align-items: center;
  margin-bottom:20px;
  .children {
    display: flex;
    flex: 50%;
    max-width: 50%;
    justify-content: end;
    align-items: center;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
  }
  @media only screen and (min-width: 0px) and (max-width: 480px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
`;
