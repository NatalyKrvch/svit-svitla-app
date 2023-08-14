import { StyledUl, StyledLink, MenuWrapper } from "./MenuHeaderStyled";
import menuConfig from "../menuConfig.json";
import PropTypes from "prop-types";
import LogOutButton from "../../Buttons/LogOutButton/LogOutButton";

function MenuHeader(props) {
  const { isLoggedIn, setLogoutModalOpen } = props;
  const menuData = isLoggedIn ? menuConfig.adminMenu : menuConfig.userMenu;

  const openModal = () => {
    console.log("OPEN Modal desck");
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
        {isLoggedIn && <LogOutButton openModal={openModal} />}
      </MenuWrapper>
    </>
  );
}

MenuHeader.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default MenuHeader;
