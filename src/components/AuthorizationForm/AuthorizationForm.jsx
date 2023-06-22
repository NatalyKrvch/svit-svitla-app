import { useState } from "react";
import {
  StyledTitle,
  StyledForm,
  ButtonEye,
  StyledFragment,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  SubmitButton,
  TitleWrp,
} from "./AuthorizatioonFormStyled";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/Auth/authOperations";

const AuthorizationForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();

  const handleChangeLogin = (evt) => {
    setLogin(evt.target.value);
  }

  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
  }

  const handleTogglePassword = (evt) => {
    evt.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
     dispatch(logIn({
        login,
        password,
     }))
     setLogin('');
     setPassword('');
  }

  return (
    <StyledFragment>
      <TitleWrp>
        <StyledTitle>Авторизуйтесь</StyledTitle>
      </TitleWrp>
      <StyledForm onSubmit={onSubmitForm}>
        <StyledInputWrapper>
          <StyledLabel htmlFor="login">Логін</StyledLabel>
          <StyledInput
            id="login"
            type="text"
            placeholder="e.g.lampalampa"
            required
            minLength={8}
            maxLength={16}
            value={login}
            onChange={handleChangeLogin}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="password">Пароль</StyledLabel>
          <StyledInput
            type={passwordVisible ? "text" : "password"}
            minLength={8}
            maxLength={16}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Пароль може складатися тільки із латиниці, апострофа, пробілу, тире"
            id="password"
            required
            placeholder="все з маленької"
            value={password}
            onChange={handleChangePassword}
          />
          <ButtonEye onClick={handleTogglePassword}>
            {!passwordVisible && <BsEyeSlash size={"1.5em"} />}
            {passwordVisible && <BsEye size={"1.5em"} />}
          </ButtonEye>
        </StyledInputWrapper>
        <SubmitButton type="submit">Увійти</SubmitButton>
      </StyledForm>
    </StyledFragment>
  );
};

export default AuthorizationForm;
