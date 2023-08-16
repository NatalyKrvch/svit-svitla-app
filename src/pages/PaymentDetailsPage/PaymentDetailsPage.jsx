import { useRef } from "react";
import {
  FakeButton,
  StyledContainer,
  StyledDiv,
  StyledInput,
  StyledInputIban,
  StyledInputWrapper,
  StyledLabel,
  StyledSpan,
  StyledSpanIban,
  StyledTitle,
  StyledTitleWrp,
} from "./PaymentDetailsPageStyled";
import { FiCopy } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import Notiflix from "notiflix";
import { useMediaRules } from "../../hooks/useMediaRules";
import Container from "../../components/Container/Container";

const PaymentDetails = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { isMobile , isTablet } = useMediaRules();
  const ibanText = `UA3932870400000260020\n54312944`;
  const bankText = `АТ КБ "ПРИВАТБАНК"\n(МФО 328704)`;

  const copyText = (text) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          Notiflix.Notify.success("Скопійовано у буфер обміну");
        })
        .catch((error) => {
          Notiflix.Notify.failure("Не вдалося скопіювати текст: ", error);
        });
    };
  

  return (
    <Container>
      <StyledContainer>
        <StyledTitleWrp isLoggedIn={isLoggedIn}>
          <StyledTitle>Реквізити для оплати</StyledTitle>
        </StyledTitleWrp>
        <StyledDiv>
          <StyledInputWrapper isLoggedIn={isLoggedIn} isMobile={isMobile} isTablet={isTablet}>
            <StyledLabel
              htmlFor="name"
              isLoggedIn={isLoggedIn}
              isMobile={isMobile}
            >
              IBAN
            </StyledLabel>
            {!isLoggedIn && isMobile ? (
              <StyledSpanIban isLoggedIn={isLoggedIn}>
                {ibanText}
              </StyledSpanIban>
            ) : (
              <StyledInputIban
                isLoggedIn={isLoggedIn}
              >{"UA393287040000026002054312944"}</StyledInputIban>
            )}
            {!isLoggedIn && (
              <FakeButton onClick={() => copyText( "UA393287040000026002054312944")}>
                <FiCopy size={"1.5em"} />
              </FakeButton>
            )}
          </StyledInputWrapper>
          <StyledInputWrapper isLoggedIn={isLoggedIn} isMobile={isMobile} isTablet={isTablet}>
            <StyledLabel
              htmlFor="name"
              isLoggedIn={isLoggedIn}
              isMobile={isMobile}
            >
              Банк
            </StyledLabel>
            {isMobile ? (
              <StyledSpan isLoggedIn={isLoggedIn}>
                {bankText}
              </StyledSpan>
            ) : (
              <StyledInput
                isLoggedIn={isLoggedIn}
              >{`АТ КБ "ПРИВАТБАНК"(МФО 328704)`}</StyledInput>
            )}
            {!isLoggedIn && (
              <FakeButton onClick={() => copyText(`АТ КБ "ПРИВАТБАНК"(МФО 328704)`)}>
                <FiCopy size={"1.5em"} />
              </FakeButton>
            )}
          </StyledInputWrapper>
          <StyledInputWrapper isLoggedIn={isLoggedIn} isMobile={isMobile} isTablet={isTablet}>
            <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>
              ЕДРПОУ
            </StyledLabel>
            <StyledInput
              isLoggedIn={isLoggedIn}
            >{"38935167"}</StyledInput>
            {!isLoggedIn && (
              <FakeButton onClick={() => copyText("38935167")}>
                <FiCopy size={"1.5em"} />
              </FakeButton>
            )}
          </StyledInputWrapper>
          <StyledInputWrapper isLoggedIn={isLoggedIn} isMobile={isMobile} isTablet={isTablet}>
            <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>
              ФОП
            </StyledLabel>
            <StyledInput
              isLoggedIn={isLoggedIn}
            >{`Ім'я Прізвище`}</StyledInput>
            {!isLoggedIn && (
              <FakeButton onClick={() => copyText(`Ім'я Прізвище`)}>
                <FiCopy size={"1.5em"} />
              </FakeButton>
            )}
          </StyledInputWrapper>
          <StyledInputWrapper isLoggedIn={isLoggedIn} isMobile={isMobile} isTablet={isTablet}>
            <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>
              ІПН
            </StyledLabel>
            <StyledInput
              isLoggedIn={isLoggedIn}
            >{"389351615535"}</StyledInput>
            {!isLoggedIn && (
              <FakeButton onClick={() => copyText("389351615535")}>
                <FiCopy size={"1.5em"} />
              </FakeButton>
            )}
          </StyledInputWrapper>
        </StyledDiv>
      </StyledContainer>
    </Container>
  );
};

export default PaymentDetails;
