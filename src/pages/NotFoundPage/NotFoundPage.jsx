import {
  PageWrapper,
  ImgStyled,
  ImgWrapper,
  YellowContainer,
  HeadP,
  SubheadP,
  ButtonWrapper,
} from "./NotFoundPageStyled";
import { useMediaRules } from "../../hooks/useMediaRules";
import lampMobile from "../../images/lampNotFoundMobile.svg";
import lampTablet from "../../images/lampNotFoundTablet.svg";
import lampDesktop from "../../images/lampNotFoundDesctop.svg";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const { isMobile, isTablet, isDesktop } = useMediaRules();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <PageWrapper>
        <ImgWrapper>
          {isMobile && <ImgStyled src={lampMobile}></ImgStyled>}
          {isTablet && <ImgStyled src={lampTablet}></ImgStyled>}
          {isDesktop && <ImgStyled src={lampDesktop}></ImgStyled>}
        </ImgWrapper>
        <YellowContainer>
          <HeadP>
            Наша Лампа намагалась знайти цю сторінку, але в неї нічого не
            вийшло😭
          </HeadP>
          <SubheadP>Спробуйте подивитися всі наші товари</SubheadP>
          <ButtonWrapper>
            <MainButton
              onClick={() => {
                handleButtonClick();
              }}
            >
              Дивитися каталог товарів
            </MainButton>
          </ButtonWrapper>
        </YellowContainer>
      </PageWrapper>
    </>
  );
}

export default NotFound;
