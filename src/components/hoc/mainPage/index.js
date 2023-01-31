import React from "react";
import { useSelector } from "react-redux";
import { StyledContainer } from "./style";
import Footer from "./footer";
import Navbar from "./navbar";
function MainPage({ children }) {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    <StyledContainer>
      <div className="main">

      <Navbar />
      <>
        {isLoading ? <p>loading....</p> : <div className="mainContentChildren">{children}</div>}
      </>
      </div>
      <Footer />
    </StyledContainer>
  );
}

export default MainPage;
