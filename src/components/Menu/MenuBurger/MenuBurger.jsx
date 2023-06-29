import {
  MenuBurgerContainer,
  CrossWrapper,
  StyledUl,
  StyledLi,
  StyledLink,
} from "./MenuBurgerStyled";
import PropTypes from "prop-types";
import menuConfig from "../menuConfig.json";

function MenuBurger({ onClose, ...props }) {
  MenuBurger.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  const { isLoggedIn } = props;

  const menuData = isLoggedIn ? menuConfig.adminMenu : menuConfig.userMenu;

  return (
    <>
      <MenuBurgerContainer>
        <CrossWrapper onClick={onClose}>
          <img src="src/images/Menu/close_24px.svg" />
        </CrossWrapper>
        <StyledUl>
          {menuData.map((item, index) => (
            <StyledLi key={index}>
              <StyledLink to={item.url} onClick={onClose}>
                {item.title}
              </StyledLink>
            </StyledLi>
          ))}
        </StyledUl>
      </MenuBurgerContainer>
    </>
  );
}
export default MenuBurger;
