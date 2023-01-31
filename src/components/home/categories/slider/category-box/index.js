import React from "react";
import { StyledContainer } from "./style";
import DesignPosterSvg from "../../../../svg/categories/design-poster";
import TizerclipSvg from "../../../../svg/categories/tizerclip";
import InfographySvg from "../../../../svg/categories/infography";
function CategoryBox({ cat }) {
  const svgCreator = () => {
    switch (cat.name) {
      case "design":
        return <DesignPosterSvg id='svg' />;
      case "infography":
        return <InfographySvg />;
      case "clip":
        return <TizerclipSvg />;
    }
  };
  return (
    <StyledContainer>
        
      {svgCreator()}
      <span>{cat.text}</span>
    </StyledContainer>
  );
}

export default CategoryBox;
