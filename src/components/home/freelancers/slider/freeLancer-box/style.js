import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 11.375rem;
  height: 18.9375rem;
  border-radius: 1rem;
  background-color: var(--gray0);
  transition: transform 0.5s;
  margin-left:10px;
  cursor: pointer;
.info{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
  .sub{
    color: var(--gray4);
    font-size: 12px;
  }
  h5{
    font-weight: 700;
font-size: 16px;
  }

  @media (max-width: 480px) {

  }
`;
