import { TbDownload } from "react-icons/tb";
import QRCode from "react-qr-code";
import {
  StyledArticle,
  StyledButton,
  StyledContainer,
  StyledProductName,
  StyledQrCodeWrp,
  StyledTextWrp,
  StyledTitle,
  StyledTitleWrp,
  StyledWrpUpQrCode,
} from "./QrCodeGenerationPageStyled";

import { useSelector } from "react-redux";
import { getCurrentProduct } from "../../redux/Product/productSelectors";
import { useMediaRules } from "../../hooks/useMediaRules";
import * as htmlToImage from "html-to-image";
import Container from "../../components/Container/Container";

const QrCodeGeneration = () => {
  const { productName, productCode, _id } = useSelector(getCurrentProduct);

  const { isMobile } = useMediaRules();

  const handleDownloadQrCode = async () => {
    const qrCodeWrapper = document.getElementById("qrCodeWrapper");

    htmlToImage
      .toPng(qrCodeWrapper)
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "qr_code.png";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(function (error) {
        console.error("Произошла ошибка при сохранении QR-кода:", error);
      });
  };

  return (
    <Container>
      <StyledContainer>
        <StyledTitleWrp>
          <StyledTitle>QR code товару</StyledTitle>
        </StyledTitleWrp>
        <StyledTextWrp>
          <div>
            <StyledProductName>{productName}</StyledProductName>
            <StyledArticle>{productCode}</StyledArticle>
          </div>

          <StyledButton onClick={handleDownloadQrCode}>
            <TbDownload size={"1.5em"} />
          </StyledButton>
        </StyledTextWrp>
        <StyledWrpUpQrCode>
          <StyledQrCodeWrp id="qrCodeWrapper">
            <QRCode
              id="qrCode"
              value={`https://green-coast-060de9f03.3.azurestaticapps.net/productcard/${_id}`}
              size={isMobile ? 128 : 624}
              fgColor="#000000"
              bgColor="#ffffff"
              level="L"
              renderas="svg"
            />
          </StyledQrCodeWrp>
        </StyledWrpUpQrCode>
      </StyledContainer>
    </Container>
  );
};

export default QrCodeGeneration;
