import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;  
  padding: 0 20px;
  width: 100%;
  
  .news {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 380px;
    height: 230px;
    border-radius: 1rem;
    background-color: var(--gray0);
    transition: transform 0.5s;    
  }

  @media(max-width:780px){
    .news{
      width: 16.5rem;
    height: 10rem;
    }
  }

  h2{
    font-size: 16px;
    text-align: right;
    padding-right: 5px;
    margin-top: 24px;
    font-weight: 800;
  }

  p{
    text-align: right;
    padding-right: 5px;
    font-weight: 500;
  }


`;
