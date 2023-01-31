import React from "react";
import { useSelector } from "react-redux";
import { StyledContainer } from "./style";
import Navbar from "./navbar";
function LoginPage({ children }) {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    <StyledContainer>
      <div className="main">

      <Navbar />
      <>
        {children}
      </>
      </div>
      
    </StyledContainer>
  );
}

export default LoginPage;
