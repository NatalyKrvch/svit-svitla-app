import { useState } from "react";
import {
  StyledForm,
  ButtonEye,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  ButtonWrapper,
} from "./AuthorizatioonFormStyled";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/Auth/authOperations";
import MainButton from "../Buttons/MainButton/MainButton";
import TitleMain from "../TitleMain/TitleMain";


const AuthorizationForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();

  const handleChangeLogin = (evt) => {
    setLogin(evt.target.value);
  };

  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const handleTogglePassword = (evt) => {
    evt.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    dispatch(
      logIn({
        login,
        password,
      })
    );
    setLogin("");
    setPassword("");
  };

  const handleKeyPress = (evt) => {
    console.log(evt.key);
    if (evt.key === 'Enter' || evt.key === 'Done' || evt.key === 'Return') {
      onSubmitForm(evt);
    }
  };

  return (
    <>
      <TitleMain text="Авторизуйтесь"/>
      <StyledForm onSubmit={onSubmitForm}>
        <StyledInputWrapper>
          <StyledLabel htmlFor="login">Логін</StyledLabel>
          <StyledInput
            id="login"
            type="text"
            placeholder="e.g.lampalampa"
            required
            title="Мінімальна довжина 8 символів"
            minLength={8}
            maxLength={16}
            value={login}
            onChange={handleChangeLogin}
            onKeyDown={handleKeyPress}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="password">Пароль</StyledLabel>
          <StyledInput
            type={passwordVisible ? "text" : "password"}
            minLength={8}
            maxLength={16}
            title="Пароль може складатися тільки із латиниці, апострофа, пробілу, тире"
            id="password"
            required
            placeholder="eXaMple-Password"
            value={password}
            onChange={handleChangePassword}
            onKeyDown={handleKeyPress}
          />
          <ButtonEye onClick={handleTogglePassword}>
            {!passwordVisible && <BsEyeSlash size={"1.5em"} />}
            {passwordVisible && <BsEye size={"1.5em"} />}
          </ButtonEye>
        </StyledInputWrapper>
        <ButtonWrapper>
          <MainButton type="submit">Увійти</MainButton>
        </ButtonWrapper>
      </StyledForm>
    </>
  );
};

export default AuthorizationForm;
