import { useEffect } from "react";
import ProductCharacteristics from "../../components/ProductsCharacteristics/ProductCharacteristics";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/Product/productOperations";
import { getCurrentProduct } from "../../redux/Product/productSelectors";
import { useMediaRules } from "../../hooks/useMediaRules";
// import { BiShareAlt } from 'react-icons/bi';
import Carousel from "../../components/Carousel/Carousel";
import {
  CoverImgContainer,
  Image,
  ImageWrapper,
  ImagesContainer,
  LowerImageContainer,
  LowerImagesWrapper,
  PageWrapper,
  RestImgsContainer,
  StyledH2,
  StyledP,
} from "./ProductCardPageStyled";

const ProductCardPage = () => {
  const { isMobile } = useMediaRules();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  const currentProduct = useSelector(getCurrentProduct);
  console.log(currentProduct);

  const coverImgURL = currentProduct.productCoverURL;
  const restImgsURL = currentProduct.productPhotoURL;
  const allImgsURL = [coverImgURL, ...restImgsURL];
  const productName = currentProduct.productName;
  const productCode = currentProduct.productCode;

  return (
    <>
      <PageWrapper>
        {isMobile && <StyledH2>{productName}</StyledH2>}
        <StyledP>Артикул: {productCode}</StyledP>
        <div>
          <ProductCharacteristics
            price={currentProduct.productPrice}
            manufacturerCountry={currentProduct.productCountry}
            characteristicArray={currentProduct.additionalAttributes}
          />
        </div>
      </PageWrapper>
    </>
  );
};

export default ProductCardPage;
