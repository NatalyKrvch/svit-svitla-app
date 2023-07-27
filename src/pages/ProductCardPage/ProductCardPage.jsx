import { useEffect, useState } from "react";
import ProductCharacteristics from "../../components/ProductsCharacteristics/ProductCharacteristics";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/Product/productOperations";
import { getCurrentProduct } from "../../redux/Product/productSelectors";
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
import Wrapper from "../../components/Container/Container";

const ProductCardPage = () => {
  const [currentURL, setCurrentURL] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentProduct = useSelector(getCurrentProduct);
  useEffect(() => {
    console.log("USEEFFECT");
    dispatch(getProductById(id));
    setCurrentURL(window.location.href);
  }, []);
  if (currentProduct === null) return;
  const allImgsURL = [
    currentProduct.productCoverURL,
    ...currentProduct.productPhotoURL,
  ];
  const productName = currentProduct.productName;
  const productCode = currentProduct.productCode;
  console.log("productName", productName);
  console.log(typeof currentURL);

  return (
    <Wrapper>
      <PageWrapper>
        <TitleWrapper>
          <Title>
            <StyledH1>{productName}</StyledH1>
            <StyledP>Артикул: {productCode}</StyledP>
          </Title>
          <ShareButton title={productName} text="Поділитися" url={currentURL} />
        </TitleWrapper>
        <ContentWrapper>
          <Carousel images={allImgsURL} />
          <CharacteristicsWrapper>
            <ProductCharacteristics
              price={currentProduct.productPrice}
              manufacturerCountry={currentProduct.productCountry}
              characteristicArray={currentProduct.additionalAttributes}
            />
          </CharacteristicsWrapper>
        </ContentWrapper>
      </PageWrapper>
    </Wrapper>
  );
};

export default ProductCardPage;
