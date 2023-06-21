//import { useMediaRules } from "../../hooks/useMediaRules";
import { StyledHeader, HeaderWrapper, LogoWrapper } from "./HeaderStyled";

function Header() {
  // const { isMobile, isDesktop, isTablet } = useMediaRules();
  return (
    <>
      <StyledHeader>
        <HeaderWrapper>
          <LogoWrapper />
          {/* тут ще буде умовний рендеринг меню в залежності від розміру екрану */}
        </HeaderWrapper>
      </StyledHeader>
    </>
  );
}

export default Header;
