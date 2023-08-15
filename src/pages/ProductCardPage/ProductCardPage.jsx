import { useEffect, useState } from "react";
import ProductCharacteristics from "../../components/ProductsCharacteristics/ProductCharacteristics";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../redux/Product/productOperations";
import { getCurrentProduct, getLoadingProducts } from "../../redux/Product/productSelectors";
import Carousel from "../../components/Carousel/Carousel";
import {
  PageWrapper,
  StyledP,
  Title,
  TitleWrapper,
  ContentWrapper,
  CharacteristicsWrapper,
  StyledH1,
} from "./ProductCardPageStyled";
import ShareButton from "../../components/Buttons/ShareButton/ShareButton";
import Container from "../../components/Container/Container";
import { useMediaRules } from "../../hooks/useMediaRules";

const ProductCardPage = () => {
  const [currentURL, setCurrentURL] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentProduct = useSelector(getCurrentProduct);
  const { isDesktop } = useMediaRules();
  const isLoading = useSelector(getLoadingProducts);

  useEffect(() => {
    dispatch(getProductById({ id, navigate }));
    setCurrentURL(window.location.href);
  }, []);

  if (currentProduct === null) return;
 
  const allImgsURL = [
    currentProduct.productCoverURL,
    ...currentProduct.productPhotoURL,
  ];

  const productName = currentProduct.productName;
  const productCode = currentProduct.productCode;
  const textForShare = `${productName} у магазині Світ світла`;

  return (
    <Container>
     {!isLoading &&  <PageWrapper>
        <TitleWrapper>
          <Title>
            <StyledH1>{productName}</StyledH1>
            <StyledP>Артикул: {productCode}</StyledP>
          </Title>
          {!isDesktop && (
            <ShareButton
              title={productName}
              text={textForShare}
              url={currentURL}
            />
          )}
        </TitleWrapper>
        <ContentWrapper>
          <Carousel images={allImgsURL} />
          <CharacteristicsWrapper>
            <ProductCharacteristics
              price={currentProduct.productPrice}
              manufacturerCountry={currentProduct.productCountry}
              characteristicArray={currentProduct.additionalAttributes}
              productCategory={currentProduct.productCategory}
            />
          </CharacteristicsWrapper>
        </ContentWrapper>
      </PageWrapper>}
    </Container>
  );
};

export default ProductCardPage;
