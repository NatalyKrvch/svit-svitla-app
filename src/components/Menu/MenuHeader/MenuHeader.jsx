import { StyledUl, StyledLink, MenuWrapper } from "./MenuHeaderStyled";
import menuConfig from "../menuConfig.json";
import PropTypes from "prop-types";
import LogOutButton from "../../Buttons/LogOutButton/LogOutButton";

function MenuHeader({ isLoggedIn, setLogoutModalOpen }) {
  const menuData = isLoggedIn ? menuConfig.adminMenu : menuConfig.userMenu;

  const handleOpenModal = () => {
    setLogoutModalOpen(true);
  };

  return (
    <>
      <MenuWrapper>
        <StyledUl>
          {menuData.map((item, index) => (
            <li key={index}>
              <StyledLink to={item.url}>{item.title}</StyledLink>
            </li>
          ))}
        </StyledUl>
        {isLoggedIn && <LogOutButton openModal={handleOpenModal} />}
      </MenuWrapper>
    </>
  );
}

MenuHeader.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setLogoutModalOpen: PropTypes.func.isRequired,
};

export default MenuHeader;
