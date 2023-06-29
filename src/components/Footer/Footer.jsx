import { useMediaRules } from "../../hooks/useMediaRules";
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
import mobileLogo from "../../images/Logo/Mobile/Footer/logo-mob@1x.png";
import tabletLogo from "../../images/Logo/Tablet/Footer/logo-tablet@1x.png";
import desktopLogo from "../../images/Logo/Desktop/Footer/logo_desktop@1x.png";
import instagramLogo from "../../images/Logo/Insta_btn.svg";

const adress = (
  <>
    <StyledSpan>Адреса:</StyledSpan>
    <StyledAdress>м. Чернігів, пр. Миру, 194 корп. 12</StyledAdress>
  </>
);

const telephone = (
  <>
    <StyledSpan>Телефон:</StyledSpan>
    <p>+38 063 477 98 88</p>
  </>
);

const workingHours = (
  <>
    <StyledSpan>Працюємо:</StyledSpan>
    <time>10:00 - 18:00 (без вихідних)</time>
  </>
);

const handleClick = () => {
  window.open("https://www.instagram.com/", "_blank");
};

function Footer() {
  const { isMobile, isTablet, isDesktop } = useMediaRules();
  return (
    <>
      <StyledFooter>
        <FooterWrapper>
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
                <TextWrapper>{workingHours}</TextWrapper>
              </>
            )}
            {!isMobile && (
              <>
                <TextWrapper>
                  {adress}
                  {telephone}
                </TextWrapper>
                <TextWrapper>{workingHours}</TextWrapper>
              </>
            )}
            <TextWrapper>
              <StyledLink to="/authors">Автори веб-сервісу</StyledLink>
            </TextWrapper>
          </InformationContainer>
          <InstaWrapper onClick={handleClick}>
            <img src={instagramLogo} alt="Instagram" />
          </InstaWrapper>
        </FooterWrapper>
      </StyledFooter>
    </>
  );
}

export default Footer;
