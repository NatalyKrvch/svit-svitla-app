import { useMediaRules } from "../../hooks/useMediaRules";
import {
  StyledFooter,
  LogoWrapper,
  InformationContainer,
  TextWrapper,
  StyledSpan,
  StyledA,
  StyledLink,
  StyledInstaA,
  GridContainer,
} from "./FooterStyled";
import mobileLogo from "../../images/Logo/Mobile/Footer/logo-mob@1x.svg";
import tabletLogo from "../../images/Logo/Tablet/Footer/logo-tablet@1x.svg";
import desktopLogo from "../../images/Logo/Desktop/Footer/logo_desktop@1x.svg";
import instagramLogo from "../../images/Logo/Insta_btn.svg";

const adress = (
  <>
    <StyledSpan>Адреса:</StyledSpan>
    <StyledA href="https://goo.gl/maps/61MJb9vJXFnWGjra9" target="_blank">
      м. Чернігів, Торговий парк Remzavod
    </StyledA>
  </>
);

const telephone = (
  <>
    <StyledSpan>Телефон:</StyledSpan>
    <StyledA href="tel:+380634779888">+38 063 477 98 88</StyledA>
  </>
);

const email = (
  <>
    <StyledSpan>E-mail:</StyledSpan>
    <StyledA href="mailto:svit.svitla.cn@gmail.com">
      svit.svitla.cn@gmail.com
    </StyledA>
  </>
);

const workingHours = (
  <>
    <StyledSpan>Працюємо:</StyledSpan>
    <time>Пн-пт 10:00 - 19:00</time>
  </>
);

function Footer() {
  const { isMobile, isTablet, isDesktop } = useMediaRules();
  return (
    <>
      <StyledFooter>
        <LogoWrapper>
          {isMobile && <img src={mobileLogo} alt="logo" />}
          {isTablet && <img src={tabletLogo} alt="logo" />}
          {isDesktop && <img src={desktopLogo} alt="logo" />}
        </LogoWrapper>
        <InformationContainer>
          {isMobile && (
            <>
              <TextWrapper>{adress}</TextWrapper>
              <TextWrapper>{telephone}</TextWrapper>
              <TextWrapper>{email}</TextWrapper>
              <TextWrapper>{workingHours}</TextWrapper>
            </>
          )}
          {!isMobile && (
            <GridContainer>
              <TextWrapper>{adress}</TextWrapper>
              <TextWrapper>{telephone}</TextWrapper>
              <TextWrapper>{workingHours}</TextWrapper>
              <TextWrapper>{email}</TextWrapper>
            </GridContainer>
          )}
          <TextWrapper>
            <StyledLink to="/authors">Автори веб-сервісу</StyledLink>
          </TextWrapper>
        </InformationContainer>
        <StyledInstaA href="https://www.instagram.com/" target="_blank">
          <img src={instagramLogo} alt="Instagram" />
        </StyledInstaA>
      </StyledFooter>
    </>
  );
}

export default Footer;
