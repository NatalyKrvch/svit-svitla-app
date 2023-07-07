import { useRef } from "react";
import {
  FakeButton,
  FakeInputText,
  FakeInputWrp,
  StyledContainer,
  StyledDiv,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledTitle,
} from "./PaymentDetailsPageStyled";
import { BiPlusCircle } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";

const PaymentDetails = () => {

  const inputRef = useRef(null);

  const copyText = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value)
        .then(() => {
          console.log('Скопійовано у буфер обміну');
        })
        .catch((error) => {
          console.error('Не вдалося скопіювати текст: ', error);
        });
    }
  };

  return (
    <StyledContainer>
      <StyledTitle>Реквізити для оплати</StyledTitle>
      <StyledDiv>
        <StyledInputWrapper>
          <StyledLabel htmlFor="name">IBAN</StyledLabel>
          <StyledInput
            id="name"
            type="text"
            value={"UA393287040000026002054312944"}
            readOnly
            ref={inputRef}
          />
          <FakeButton onClick={copyText}>
            <FiCopy size={"1.5em"} />
          </FakeButton>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="name">Банк</StyledLabel>
          <StyledInput
            id="name"
            type="text"
            value={`АТ КБ "ПРИВАТБАНК" (МФО 328704)`}
            readOnly
            ref={inputRef}
          />
            <FakeButton onClick={copyText}>
            <FiCopy size={"1.5em"} />
          </FakeButton>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="name">ЕДРПОУ</StyledLabel>
          <StyledInput id="name" type="text" value={"38935167"} readOnly   ref={inputRef}/>
          <FakeButton>
            <FiCopy size={"1.5em"} />
          </FakeButton>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="name">ФОП</StyledLabel>
          <StyledInput id="name" type="text" value={`Ім'я Прізвище`} readOnly  ref={inputRef}/>
          <FakeButton onClick={copyText}>
            <FiCopy size={"1.5em"} />
          </FakeButton>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="name">ІПН</StyledLabel>
          <StyledInput id="name" type="text" value={"389351615535"} readOnly  ref={inputRef} />
          <FakeButton>
            <FiCopy size={"1.5em"} />
          </FakeButton>
        </StyledInputWrapper>
        <FakeInputWrp>
          <FakeInputText>Додати інформацію</FakeInputText>
          <FakeButton  onClick={copyText}>
            <BiPlusCircle size={"1.5em"} />
          </FakeButton>
        </FakeInputWrp>
      </StyledDiv>
    </StyledContainer>
  );
};

export default PaymentDetails;
