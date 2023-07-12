import { StyledUl, StyledLink } from "./MenuHeaderStyled";
import menuConfig from "../menuConfig.json";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/Auth/authOperations";

function MenuHeader(props) {
  MenuHeader.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };

  const { isLoggedIn } = props;
  const menuData = isLoggedIn ? menuConfig.adminMenu : menuConfig.userMenu;

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <StyledUl>
        {menuData.map((item, index) => (
          <li key={index}>
            <StyledLink to={item.url}>{item.title}</StyledLink>
          </li>
        ))}
      </StyledUl>
      {isLoggedIn && (
        <button type="button" onClick={handleLogOut}>
          Вийти
        </button>
      )}
    </>
  );
}

export default MenuHeader;
