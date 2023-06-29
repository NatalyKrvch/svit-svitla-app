import { MenuBurgerContainer } from "./MenuBurgerStyled";
import PropTypes from "prop-types";
import menuConfig from "../menuConfig.json";

function MenuBurger({ onClose, ...props }) {
  MenuBurger.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  const { isLoggedIn } = props;

  console.log("onClose", onClose);

  const menuData = isLoggedIn ? menuConfig.adminMenu : menuConfig.userMenu;

  console.log("menuData", menuData);

  return (
    <>
      <MenuBurgerContainer></MenuBurgerContainer>
    </>
  );
}
export default MenuBurger;
