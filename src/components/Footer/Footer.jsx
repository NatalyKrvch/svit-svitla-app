//import { useMediaRules } from "../../hooks/useMediaRules";

import {
  StyledFooter,
  FooterWrapper,
  LogoWrapper,
  InformationContainer,
  TextWrapper,
  StyledSpan,
  StyledAdress,
  StyledLink,
  InstaWrapper,
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
              <p>+38 063 477 98 88</p>
            </TextWrapper>
            <TextWrapper>
              <StyledSpan>Працюємо:</StyledSpan>
              <time>10:00 - 18:00 (без вихідних)</time>
            </TextWrapper>
            <TextWrapper>
              <StyledLink to="/authors">Автори веб-сервісу</StyledLink>
            </TextWrapper>
          </InformationContainer>
          <InstaWrapper>
            <img src="src/images/Logo/Insta_btn.svg" alt="Instagram" />
          </InstaWrapper>
        </FooterWrapper>
      </StyledFooter>
    </>
  );
}

export default Footer;
