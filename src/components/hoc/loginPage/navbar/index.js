import { NavLink } from "react-router-dom";

import LogoSvg from "../../../svg/logo/pink";

import { StyledContainer } from "./style";

const Navbar = ({ children }) => {
  debugger;

  return (
    <StyledContainer>
      <>
        <div className="deskNav ">
          <ul>
            <li>
              <NavLink to="/">
                <LogoSvg />
              </NavLink>
            </li>
          </ul>
        </div>
      </>
    </StyledContainer>
  );
};

export default Navbar;
