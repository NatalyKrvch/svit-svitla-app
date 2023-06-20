import { useMediaRules } from "../../MediaRules/MediaRules";
import { StyledHeader } from "./HeaderStyled";

function Header() {
  const { isMobile, isDesktop, isTablet } = useMediaRules();
  return (
    <>
      <StyledHeader></StyledHeader>
    </>
  );
}

export default Header;
