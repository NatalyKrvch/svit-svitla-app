import { useMediaRules } from "../../hooks/useMediaRules";
import { useState } from "react";
import { StyledHeader, HeaderWrapper, WrapperDiv } from "./HeaderStyled";
import { useNavigate } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { useSelector } from "react-redux";
import MenuHeader from "../Menu/MenuHeader/MenuHeader";
import MenuBurger from "../Menu/MenuBurger/MenuBurger";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isMobile, isDesktop, isTablet } = useMediaRules();

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };

  const isLoggedIn = useSelector(getIsLoggedIn);

  const toggleBurgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <StyledHeader>
        <HeaderWrapper>
          <WrapperDiv onClick={handleLogoClick}>
            {isDesktop && (
              <img
                src="scr/images/Logo/Desktop/Header/logo_des@1x.svg"
                alt="Logo"
              />
            )}
            {isTablet && (
              <img
                src="src/images/Logo/Tablet/Header/logo_tab@1x.svg"
                alt="Logo"
              />
            )}
            {isMobile && (
              <img
                src="src/images/Logo/Mobile/Header/logo_mob@1x.svg"
                alt="Logo"
              />
            )}
          </WrapperDiv>
          {!isMobile && <MenuHeader isLoggedIn={isLoggedIn} />}
          {isMobile && (
            <>
              <WrapperDiv onClick={toggleBurgerMenu}>
                <img src="src/images/Menu/Burger.svg" alt="Menu" />
              </WrapperDiv>
            </>
          )}
        </HeaderWrapper>
      </StyledHeader>
      {isMenuOpen && (
        <MenuBurger isLoggedIn={isLoggedIn} onClose={toggleBurgerMenu} />
      )}
    </>
  );
}

export default Header;
