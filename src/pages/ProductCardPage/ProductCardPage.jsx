import { useEffect } from "react";
import ProductCharacteristics from "../../components/ProductsCharacteristics/ProductCharacteristics";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/Product/productOperations";
import { getCurrentProduct } from "../../redux/Product/productSelectors";
import Carousel from "../../components/Carousel/Carousel";
import {
  Image,
  ImagesContainer,
  LowerImagesWrapper,
  MainImgContainer,
  PageWrapper,
  RestImgsContainer,
} from "./ProductCardPageStyled";

const ProductCardPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  const currentProduct = useSelector(getCurrentProduct);
  console.log(currentProduct);

  const images = [
    "https://cultdesign.com.au/cdn/shop/articles/cult-design-blog-banner-heading-top-10-table-lamps-design-icons15_1140x650.jpg?v=1658301663",
    "https://m.media-amazon.com/images/I/71FOaSg3vML.jpg",
    "https://images.thdstatic.com/productImages/e55c039e-a269-4474-acea-17541bb224d5/svn/black-hampton-bay-floor-lamps-24122-000-e1_600.jpg",
    "https://cdn.thewirecutter.com/wp-content/media/2022/04/desk-lamp-2048px-4856-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024",
    "https://www.ikea.com/in/en/images/products/lauters-table-lamp-ash-white__0879402_pe714879_s5.jpg",
  ];

  return (
    <>
      <PageWrapper>
        <ImagesContainer>
          <MainImgContainer>
            <Image
              src="https://images.thdstatic.com/productImages/e55c039e-a269-4474-acea-17541bb224d5/svn/black-hampton-bay-floor-lamps-24122-000-e1_600.jpg"
              alt="Upper Image"
            />
          </MainImgContainer>
          <RestImgsContainer>
            <LowerImagesWrapper>
              <Carousel images={images} />
              {/* <LowerImageContainer>
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
              </LowerImageContainer> */}
            </LowerImagesWrapper>
          </RestImgsContainer>
        </ImagesContainer>
        <ProductCharacteristics
          price={currentProduct.productPrice}
          manufacturerCountry={currentProduct.productCountry}
          characteristicArray={currentProduct.additionalAttributes}
        />
      </PageWrapper>
    </>
  );
};

export default ProductCardPage;
