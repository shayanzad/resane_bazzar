import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8.125rem;
  height: 8.125rem;
  border-radius: 1rem;
  background-color: var(--gray0);
  transition: transform 0.5s;
  &:hover{
    transform: scale(1.1);
    
    path{
        fill: var(--primary);
    }
  span{
    color: var(--primary);
  }
  }

  span{
    color: var(--gray10);
    margin-top:10px;
  }


  @media (max-width: 480px) {
    width: 10.125rem;
    height: 10.125rem;
    margin:10px ;
  }
`;
