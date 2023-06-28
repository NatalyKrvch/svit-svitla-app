import { MenuBurgerContainer } from "./MenuBurgerStyled";
import PropTypes from "prop-types";
import menuConfig from "../menuConfig.json";

function MenuBurger(props) {
  MenuBurger.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };
  const { isLoggedIn } = props;

  const menuData = isLoggedIn ? menuConfig.adminMenu : menuConfig.userMenu;

  return (
    <>
      <MenuBurgerContainer></MenuBurgerContainer>
    </>
  );
}
export default MenuBurger;
