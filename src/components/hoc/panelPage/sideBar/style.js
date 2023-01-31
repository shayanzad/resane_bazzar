import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 280px;
  
  min-height: 684px;
  background-color: var(--pure-white);
  border-radius: 11px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    list-style: none;
  }

  li {
    margin-top: 32px;
  }
  a {
    color: var(--gray6);
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
  }

  svg {
    margin-left: 8px;
  }
  a{
    padding: 4px;
  }
  a:hover{
    color: var(--gray9);
  }

  .active {
  border:1px solid var(--primary);
  border-radius: 10px;
  
}

  .icon-color{
    color:var(--gray2);
  }

  hr {
    border-top: 3px dotted var(--gray2) !important;    
  }

  .rate{
    display: flex;
    justify-content: space-between;
    margin-top:8px;

    .bold{
      font-weight: bold;
      font-size: 18px;
    }
  }

  @media(max-width:780px ){
    width: 200px;
  }
`;
