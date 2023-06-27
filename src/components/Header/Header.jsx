import { useMediaRules } from "../../hooks/useMediaRules";
import {
  StyledHeader,
  HeaderWrapper,
  WrapperDiv,
  StyledUl,
  StyledLink,
} from "./HeaderStyled";
import { useNavigate } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { useSelector } from "react-redux";
import menuConfig from "./menuConfig.json";

function Header() {
  const { isMobile, isDesktop, isTablet } = useMediaRules();

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };

  const isLoggedIn = useSelector(getIsLoggedIn);

  const navigationMenu = () => {
    const menuData = isLoggedIn ? menuConfig.adminMenu : menuConfig.userMenu;

    return (
      <>
        <StyledUl>
          {menuData.map((item, index) => (
            <li key={index}>
              <StyledLink to={item.url}>{item.title}</StyledLink>
            </li>
          ))}
        </StyledUl>
      </>
    );
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
          {!isMobile && navigationMenu()}
          {isMobile && (
            <>
              <WrapperDiv>
                <img src="src/images/Menu/Burger.svg" alt="Menu" />
              </WrapperDiv>
            </>
          )}
        </HeaderWrapper>
      </StyledHeader>
    </>
  );
}

export default Header;
