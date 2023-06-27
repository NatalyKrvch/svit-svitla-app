import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/Product/productOperations";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPlusCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { getCurrentProduct } from "../../redux/Product/productSelectors";
import {
  StyledButtonDelete,
  StyledCoverLabel,
  StyledFragment,
  StyledH,
  StyledImg,
  StyledInput,
  StyledInputWrapper,
  StyledP,
  StyledTitleProduct,
  FileInput,
  FakeInputWrp,
  FakeInputText,
  FakeButton,
  Styledh4,
  StyledPriceCurrency,
  StyledPCountry,
  StyledSpanCountry,
  StyledUl,
  StyledPAttribute,
  StyledSpanAttribute,
  StyledLi,
  StyledInputWrapperPhoto,
} from "./EditProductCardPageStyled";
import ProductForm from "../../components/ProductForm/ProductForm";

const EditProductCard = () => {
  const currentProduct = useSelector(getCurrentProduct);
  // const [product, setProduct] = useState({...currentProduct})
  const [productImages, setProductImages] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  console.log(currentProduct);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id]);

  if (!currentProduct) {
    return;
  }

  const handleProductImagesChange = (event) => {
    const files = event.target.files;
    setProductImages(Array.from(files));
  };

  const handleDeletePhotoImg = () => {
    setProductImages([]);
  };

  // const handleDeleteImgProduct = (id) => {
  //   productPhotoURL.splice(id, 1);
  // }

  const {
    productName,
    productCode,
    productPhotoURL,
    productCoverURL,
    productPrice,
    productCountry,
    additionalAttributes,
  } = currentProduct;
  return (
    <StyledFragment>
      <StyledH>Редагувати картку товару</StyledH>
      <StyledTitleProduct>{productName}</StyledTitleProduct>
      <StyledP>{`Артикул: ${productCode}`}</StyledP>
      <StyledInputWrapper>
        <StyledCoverLabel htmlFor="">Назва обкладинки</StyledCoverLabel>
        <StyledImg src={productCoverURL} alt="photo" />
        <StyledInput type="text" value={`Cover_${productName}.jpeg`} readOnly />
        <StyledButtonDelete>
          <RiDeleteBin6Line size={"1.8em"} color="white" />
        </StyledButtonDelete>
      </StyledInputWrapper>
      {(productPhotoURL.length !== 0)  &&  
      <ul>
      { productPhotoURL.map((photo, index) => 
        (<StyledInputWrapperPhoto key={index}>
          <StyledCoverLabel htmlFor="">Назва зображення</StyledCoverLabel>
          <StyledImg src={`${photo}`} alt="photo" />
          <StyledInput type="text" value={`${productName}.jpeg`} readOnly />
          <StyledButtonDelete 
          >
            <RiDeleteBin6Line size={"1.8em"} color="white" />
          </StyledButtonDelete>
        </StyledInputWrapperPhoto>
        ))}
      </ul>
    }
      {productImages.length === 0 ? (
        <label>
          <FileInput
            type="file"
            multiple
            onChange={handleProductImagesChange}
            accept=".jpg, .jpeg"
          />
          <FakeInputWrp>
            <FakeInputText>Додати зображення</FakeInputText>
            <FakeButton>
              <BiPlusCircle size={"1.5em"} />
            </FakeButton>
          </FakeInputWrp>
        </label>
      ) : (
        <StyledInputWrapper>
          <StyledCoverLabel htmlFor="name">Назва зображення</StyledCoverLabel>
          <img src={productImages} alt="cover" />
          <StyledInput id="name" type="text" />
          <StyledButtonDelete type="button" onClick={handleDeletePhotoImg}>
            <RiDeleteBin6Line size={"1.8em"} color="white" />
          </StyledButtonDelete>
        </StyledInputWrapper>
      )}
      <Styledh4>Характеристи товару</Styledh4>
      <StyledP>
        Ціна: <StyledPriceCurrency>{`${productPrice} грн`}</StyledPriceCurrency>
      </StyledP>
      <StyledPCountry>
        Країна <br /> походження:{" "}
        <StyledSpanCountry>{`${productCountry}`}</StyledSpanCountry>
      </StyledPCountry>
      {additionalAttributes.length !== 0 && (
        <StyledUl>
          {additionalAttributes.map((item) => (
            <StyledLi key={item._id}>
              <StyledPAttribute>{`${item.name}: `}</StyledPAttribute>
              <StyledSpanAttribute>{item.value}</StyledSpanAttribute>
            </StyledLi>
          ))}
        </StyledUl>
      )}
      <ProductForm 
       title={productName} 
       code={productCode}
       productPrice={productPrice}
       country={productCountry}
       characteristics={additionalAttributes}
       coverPicture={productCoverURL}
       productPhotos={productPhotoURL}
       />
    </StyledFragment>
  );
};

export default EditProductCard;
