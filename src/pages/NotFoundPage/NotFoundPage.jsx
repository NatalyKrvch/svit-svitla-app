import { PageWrapper, ImgStyled } from "./NotFoundPageStyled";
import { useMediaRules } from "../../hooks/useMediaRules";
import lampMobile from "../../images/lampNotFoundMobile.svg";
import lampTablet from "../../images/lampNotFoundTablet.svg";
import lampDesctop from "../../images/lampNotFoundDesctop.svg";

function NotFound() {
  const { isMobile, isTablet, isDesctop } = useMediaRules;

  return (
    <>
      <PageWrapper>
        {isMobile && <ImgStyled src={lampMobile}></ImgStyled>}
        {isTablet && <ImgStyled src={lampTablet}></ImgStyled>}
        {isDesctop && <ImgStyled src={lampDesctop}></ImgStyled>}
      </PageWrapper>
    </>
  );
}

export default NotFound;
