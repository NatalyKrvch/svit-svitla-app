import { useMediaRules } from "../../hooks/useMediaRules";
import { StyledHeader, HeaderWrapper, WrapperDiv } from "./HeaderStyled";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { isMobile, isDesktop, isTablet } = useMediaRules();
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <StyledHeader>
        <HeaderWrapper>
          <WrapperDiv onClick={handleLogoClick}>
            {isDesktop && (
              <img
                src="src/images/Logo/Desktop/Header/logo_des@1x.svg"
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
          {isMobile && (
            <>
              <WrapperDiv>
                <img src="src/images/Menu/Burger.svg" alt="Menu" />
              </WrapperDiv>
            </>
          )}
          {/* тут ще буде умовний рендеринг меню для планшета і десктопа */}
        </HeaderWrapper>
      </StyledHeader>
    </>
  );
}

export default Header;
