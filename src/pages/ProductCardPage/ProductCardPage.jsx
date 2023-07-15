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
  const lessThenFiveImgs = allImgsURL.length <= 4;
  const productName = currentProduct.productName;
  const productCode = currentProduct.productCode;

  return (
    <>
      <PageWrapper>
        {isMobile && <StyledH2>{productName}</StyledH2>}
        <StyledP>Артикул: {productCode}</StyledP>
        <ImagesContainer>
          <CoverImgContainer>
            <Image src={coverImgURL} alt="Cover image" />
          </CoverImgContainer>
          <RestImgsContainer>
            <LowerImagesWrapper>
              {!lessThenFiveImgs && <Carousel images={allImgsURL} />}
              {lessThenFiveImgs && (
                <>
                  <LowerImageContainer>
                    <ImageWrapper>
                      <Image
                        src="https://cdn.thewirecutter.com/wp-content/media/2022/04/desk-lamp-2048px-4856-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
                        alt="Lower Image 1"
                      />
                    </ImageWrapper>
                  </LowerImageContainer>
                  <LowerImageContainer>
                    <ImageWrapper>
                      <Image
                        src="https://static.zara.net/photos///2021/I/4/1/p/1331/047/800/2/w/1920/1331047800_2_1_1.jpg?ts=1633072401074"
                        alt="Lower Image 2"
                      />
                    </ImageWrapper>
                  </LowerImageContainer>
                  <LowerImageContainer>
                    <ImageWrapper>
                      <Image
                        src="https://www.ikea.com/in/en/images/products/lauters-table-lamp-ash-white__0879402_pe714879_s5.jpg"
                        alt="Lower Image 3"
                      />
                    </ImageWrapper>
                  </LowerImageContainer>
                  <LowerImageContainer>
                    <ImageWrapper>
                      <Image
                        src="https://www.ikea.com/in/en/images/products/lauters-table-lamp-ash-white__0879402_pe714879_s5.jpg"
                        alt="Lower Image 3"
                      />
                    </ImageWrapper>
                  </LowerImageContainer>
                </>
              )}
            </LowerImagesWrapper>
          </RestImgsContainer>
        </ImagesContainer>
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
