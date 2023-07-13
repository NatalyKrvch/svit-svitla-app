import { useDispatch } from "react-redux";
import { logout } from "../../../redux/Auth/authOperations";
import { LogOutButtonStyled } from "./LogOutButtonStyled";

function LogOutButton() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <LogOutButtonStyled type="button" onClick={handleLogOut}>
      Вийти
    </LogOutButtonStyled>
  );
}

export default LogOutButton;
