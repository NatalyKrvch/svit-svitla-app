//import { useMediaRules } from "../../hooks/useMediaRules";

import {
  StyledFooter,
  FooterWrapper,
  LogoWrapper,
  InformationContainer,
  TextWrapper,
  StyledSpan,
  StyledAdress,
} from "./FooterStyled";

function Footer() {
  //const { isMobile, isDesktop, isTablet } = useMediaRules();
  return (
    <>
      <StyledFooter>
        <FooterWrapper>
          <LogoWrapper>
            <img src="src/images/Logo/logo.svg" alt="logo" />
          </LogoWrapper>
          <InformationContainer>
            <TextWrapper>
              <StyledSpan>Адреса:</StyledSpan>
              <StyledAdress>м. Чернігів, пр. Миру, 194 корп. 12 </StyledAdress>
            </TextWrapper>
            <TextWrapper>
              <StyledSpan>Телефон:</StyledSpan>
              <StyledAdress>+38 063 477 98 88</StyledAdress>
            </TextWrapper>
            <TextWrapper>
              <StyledSpan>Працюємо:</StyledSpan>
              <StyledAdress>10:00 - 18:00 (без вихідних)</StyledAdress>
            </TextWrapper>

            {/* <TextWrapper>
              <TextWrapper>Адреса:</TextWrapper>
              <TextWrapper>м. Чернігів, пр. Миру, 194 корп. 12</TextWrapper>
            </TextWrapper>
            <TextWrapper>
              <TextWrapper>Телефон:</TextWrapper>
              <TextWrapper>+38 063 477 98 88</TextWrapper>
            </TextWrapper>
            <TextWrapper>
              <TextWrapper>Працюємо:</TextWrapper>
              <TextWrapper>10:00 - 18:00 (без вихідних)</TextWrapper>
            </TextWrapper>
            <TextWrapper>
              <TextWrapper>Автори веб-сервісу</TextWrapper>
            </TextWrapper> */}
          </InformationContainer>
        </FooterWrapper>
      </StyledFooter>
    </>
  );
}

export default Footer;
