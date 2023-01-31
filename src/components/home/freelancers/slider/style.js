import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  padding-bottom:50px ;
  
  .swiper {
    width: 100%;
    height: 100%;
    
    @media (max-width: 480px) {

    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .controller {
    display: flex;

    @media (max-width: 480px) {
      display: none;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .titr {
    display: flex;
    justify-content: flex-start;

    align-items: baseline;
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  span.titr {
    font-size: 24px;
    font-weight: 800;
    color: var(--gray10);
  }

  span.link {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    color: var(--primary);
    margin-right: 16px;
  }

  button {
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    .responsive {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
    }
  }
`;
