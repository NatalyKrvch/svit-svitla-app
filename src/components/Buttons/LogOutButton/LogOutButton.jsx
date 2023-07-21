import { LogOutButtonStyled } from "./LogOutButtonStyled";

function LogOutButton({ openModal }) {
  return (
    <LogOutButtonStyled type="button" onClick={openModal}>
      Вийти
    </LogOutButtonStyled>
  );
}

export default LogOutButton;
