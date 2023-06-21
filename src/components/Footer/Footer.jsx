//import { useMediaRules } from "../../hooks/useMediaRules";

import {
  StyledFooter,
  FooterWrapper,
  LogoWrapper,
  InformationContainer,
  TextWrapper,
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
            <TextWrapper>Адреса:</TextWrapper>
            <TextWrapper>Телефон:</TextWrapper>
            <TextWrapper>Години роботи:</TextWrapper>
          </InformationContainer>
        </FooterWrapper>
      </StyledFooter>
    </>
  );
}

export default Footer;
