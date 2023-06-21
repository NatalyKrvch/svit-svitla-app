import { useMediaRules } from "../../hooks/useMediaRules";
import {
  StyledHeader,
  HeaderWrapper,
  LogoWrapper,
  Image,
  BurgerWrapper,
} from "./HeaderStyled";

function Header() {
  const { isMobile, isDesktop, isTablet } = useMediaRules();
  return (
    <>
      <StyledHeader>
        <HeaderWrapper>
          <LogoWrapper>
            {isDesktop && (
              <Image
                src="src/images/Logo/Desktop/Header/logo_des@1x.svg"
                alt="Logo"
              />
            )}
            {isTablet && (
              <Image
                src="src/images/Logo/Tablet/Header/logo_tab@1x.svg"
                alt="Logo"
              />
            )}
            {isMobile && (
              <Image
                src="src/images/Logo/Mobile/Header/logo_mob@1x.svg"
                alt="Logo"
              />
            )}
          </LogoWrapper>
          {isMobile && (
            <>
              <BurgerWrapper>
                <Image src="src/images/Menu/Burger.svg" alt="Menu" />
              </BurgerWrapper>
            </>
          )}
          {/* тут ще буде умовний рендеринг меню для планшета і десктопа */}
        </HeaderWrapper>
      </StyledHeader>
    </>
  );
}

export default Header;
