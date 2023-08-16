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
  const ibanRef = useRef(null);
  const bankRef = useRef(null);
  const edrpouRef = useRef(null);
  const fopRef = useRef(null);
  const ipnRef = useRef(null);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { isMobile , isTablet } = useMediaRules();
  const ibanText = `UA3932870400000260020\n54312944`;
  const bankText = `АТ КБ "ПРИВАТБАНК"\n(МФО 328704)`;

  const copyText = (ref) => {
    if (ref.current) {
      ref.current.select();
      navigator.clipboard
        .writeText(ref.current.value)
        .then(() => {
          Notiflix.Notify.success("Скопійовано у буфер обміну");
        })
        .catch((error) => {
          Notiflix.Notify.failure("Не вдалося скопіювати текст: ", error);
        });
    }
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
              <StyledSpanIban ref={ibanRef} isLoggedIn={isLoggedIn}>
                {ibanText}
              </StyledSpanIban>
            ) : (
              <StyledInputIban
                // id="name"
                // type="text"
                // value={"UA393287040000026002054312944"}
                // readOnly
                ref={ibanRef}
                isLoggedIn={isLoggedIn}
              >{"UA393287040000026002054312944"}</StyledInputIban>
            )}
            {!isLoggedIn && (
              <FakeButton onClick={() => copyText(ibanRef)}>
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
              <StyledSpan ref={bankRef} isLoggedIn={isLoggedIn}>
                {bankText}
              </StyledSpan>
            ) : (
              <StyledInput
                // id="name"
                // type="text"
                // value={`АТ КБ "ПРИВАТБАНК"(МФО 328704)`}
                // readOnly
                ref={bankRef}
                isLoggedIn={isLoggedIn}
              >{`АТ КБ "ПРИВАТБАНК"(МФО 328704)`}</StyledInput>
            )}
            {!isLoggedIn && (
              <FakeButton onClick={() => copyText(bankRef)}>
                <FiCopy size={"1.5em"} />
              </FakeButton>
            )}
          </StyledInputWrapper>
          <StyledInputWrapper isLoggedIn={isLoggedIn} isMobile={isMobile} isTablet={isTablet}>
            <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>
              ЕДРПОУ
            </StyledLabel>
            <StyledInput
              // id="name"
              // type="text"
              // value={"38935167"}
              // readOnly
              ref={edrpouRef}
              isLoggedIn={isLoggedIn}
            >{"38935167"}</StyledInput>
            {!isLoggedIn && (
              <FakeButton onClick={() => copyText(edrpouRef)}>
                <FiCopy size={"1.5em"} />
              </FakeButton>
            )}
          </StyledInputWrapper>
          <StyledInputWrapper isLoggedIn={isLoggedIn} isMobile={isMobile} isTablet={isTablet}>
            <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>
              ФОП
            </StyledLabel>
            <StyledInput
              // id="name"
              // type="text"
              // value={`Ім'я Прізвище`}
              // readOnly
              ref={fopRef}
              isLoggedIn={isLoggedIn}
            >{`Ім'я Прізвище`}</StyledInput>
            {!isLoggedIn && (
              <FakeButton onClick={() => copyText(fopRef)}>
                <FiCopy size={"1.5em"} />
              </FakeButton>
            )}
          </StyledInputWrapper>
          <StyledInputWrapper isLoggedIn={isLoggedIn} isMobile={isMobile} isTablet={isTablet}>
            <StyledLabel htmlFor="name" isLoggedIn={isLoggedIn}>
              ІПН
            </StyledLabel>
            <StyledInput
              // id="name"
              // type="text"
              // value={"389351615535"}
              // readOnly
              ref={ipnRef}
              isLoggedIn={isLoggedIn}
            >{"389351615535"}</StyledInput>
            {!isLoggedIn && (
              <FakeButton onClick={() => copyText(ipnRef)}>
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
