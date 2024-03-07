import { useEffect, useState } from "react";
import ProductCharacteristics from "../../components/ProductsCharacteristics/ProductCharacteristics";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../redux/Product/productOperations";
import ProductImgPlug from "../../images/ProductPlug/plug.svg";
import { getCurrentProduct, getLoadingProducts, } from "../../redux/Product/productSelectors";
import Carousel from "../../components/Carousel/Carousel";
import ShareButton from "../../components/Buttons/ShareButton/ShareButton";
import Container from "../../components/Container/Container";
import { useMediaRules } from "../../hooks/useMediaRules";
import Spinner from "../../components/Spinner/Spinner";
import Price from "../../components/Price/Price";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import Modal from 'react-bootstrap/Modal';
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import {
  PageWrapper,
  StyledP,
  Title,
  TitleWrapper,
  ContentWrapper,
  CharacteristicsWrapper,
  StyledH1,
  CarouselAndPriceCtn,
} from "./ProductCardPageStyled";
import OrderingForm from "../../components/OrderingForm/OrderingForm";

const serviceID = import.meta.env.VITE_SERVICEID;
const templateID = import.meta.env.VITE_ORDERINGTEMPLATEID;
const keyID = import.meta.env.VITE_KEYID;
const userID = import.meta.env.VITE_USERID;

const ProductCardPage = () => {
  const [currentURL, setCurrentURL] = useState('');
  const [show, setShow] = useState(false);
  const [orderingData, setOrderingData] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentProduct = useSelector(getCurrentProduct);
  const { isDesktop } = useMediaRules();
  const isLoading = useSelector(getLoadingProducts);
  
  const productName = currentProduct.productName;
  const productCode = currentProduct.productCode;
  const textForShare = `${productName} у магазині Світ світла`;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dataToSend = {
    Customer: orderingData,
    Product: productName,
    Article: productCode,
  }

  // implement Email.js function

  const sendData = () => {
    if (dataToSend) {
      emailjs
        .send(
          serviceID,
          templateID,
          {
            from_name: "Svit Svitla Web-service",
            from_email: "nataly.krvch@gmail.com",
            message: JSON.stringify(dataToSend),
          },
          keyID,
          userID,
        )
        .then((response) => {
          toast.success("Ваше замовлення успішно надіслано");
          console.log(
            response.status,
            response.text,
          );
        })
        .catch((error) => {
          toast.error("Виникла помилка, спробуйте ще");
          console.error(error);
        });
    }
  }

  const handleOrderSubmit = () => {
    handleClose();
    console.log('orderingData',orderingData)
    sendData();
  }

  useEffect(() => {
    dispatch(getProductById({ id, navigate }));
    setCurrentURL(window.location.href);
    window.scrollTo(0, 0);
  }, []);

  if (currentProduct === null) return;

  const allImgsURL = [
    currentProduct.productCoverURL || ProductImgPlug,
    ...currentProduct.productPhotoURL,
  ];

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <PageWrapper>
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
            <CarouselAndPriceCtn>
              <Carousel images={allImgsURL} />
              <Price price={currentProduct.productPrice}/>
              <MainButton onClick={handleShow}>Купити</MainButton>
            </CarouselAndPriceCtn>
            <CharacteristicsWrapper>
              <ProductCharacteristics
                manufacturerCountry={currentProduct.productCountry}
                characteristicArray={currentProduct.additionalAttributes}
                productCategory={currentProduct.productCategory}
              />
            </CharacteristicsWrapper>
          </ContentWrapper>
        </PageWrapper>
      )}
      <Modal 
        show={show} 
        onHide={handleClose}
        centered
        backdrop={true}
        size="lg"
      >
        <Modal.Body>
          <OrderingForm 
            product={currentProduct}
            onChange={setOrderingData}
            onClose={handleClose}
            onConfirm={handleOrderSubmit}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProductCardPage;
