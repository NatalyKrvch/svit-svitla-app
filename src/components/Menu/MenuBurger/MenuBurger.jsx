import {
  MenuBurgerContainer,
  CrossWrapper,
  StyledUl,
  StyledLi,
  StyledLink,
} from "./MenuBurgerStyled";
import PropTypes from "prop-types";
import menuConfig from "../menuConfig.json";
import crossImg from "../../../images/Menu/close_24px.svg";
import LogOutButton from "../../Buttons/LogOutButton/LogOutButton";

function MenuBurger({ onClose, setLogoutModalOpen, isLoggedIn }) {
  const menuData = isLoggedIn ? menuConfig.adminMenu : menuConfig.userMenu;

  const handleOpenModal = () => {
    onClose();
    setLogoutModalOpen(true);
  };

  return (
    <>
      <MenuBurgerContainer>
        <CrossWrapper onClick={onClose}>
          <img src={crossImg} alt="close" />
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
        {isLoggedIn && <LogOutButton openModal={handleOpenModal} />}
      </MenuBurgerContainer>
    </>
  );
}

MenuBurger.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setLogoutModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MenuBurger;
