import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 50px;
  background-color: var(--gray0) !important;
  .panel {
    display: flex;
  }

  .main-page {
    width: 100%;
    max-width: 880px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }
  // .children {
  //   margin-top: 20px;
  // }
  .main {
    // overflow-x: hidden;
    max-width: 1180px;
    width: 100%;
    margin-bottom: 400px;
    padding: 0;


  }
  @media (max-width: 1024px) {
      padding: 0 40px;
      // .main-page {
      //   margin-right: 0;

      // }
    }
    @media (max-width: 768px) {
      padding: 0 40px;
      .main-page {
        margin-right: 0;

      }
    }

    @media (max-width: 480px) {
      padding: 0;
      .main-page {
        width: 100%;
        max-width: 880px;
        display: flex;
        flex-direction: column;
        margin-top: 70px;
        margin-right: 0;
      }

      .panel{
        padding: 10px;
      }
    }
`;
