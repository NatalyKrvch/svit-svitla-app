import { StyledUl, StyledLink } from "./MenuHeaderStyled";
import menuConfig from "../menuConfig.json";
import PropTypes from "prop-types";

function MenuHeader(props) {
  MenuHeader.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };

  const { isLoggedIn } = props;
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
}

export default MenuHeader;
