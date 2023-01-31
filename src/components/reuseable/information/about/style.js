import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  margin-top:20px;
  p {
    color: var(--gray6);
    font-size: 14px;
    max-width:50%;
  }
  .children{
    display: flex;
  justify-content: space-between;
  align-items: start;
  }

  tag{
    margin-top:20px;
  }
`;
