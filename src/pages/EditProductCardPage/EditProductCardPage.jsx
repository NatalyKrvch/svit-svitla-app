import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProduct } from "../../redux/Product/productOperations";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPlusCircle } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllProducts,
} from "../../redux/Product/productSelectors";
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
  SubmitButton,
  StyledForm,
  StyledLabel,
} from "./EditProductCardPageStyled";

import { nanoid } from "nanoid";
import AddCharacteristicInputs from "../../components/AddCharacteristicInputs/AddCharacteristicInputs";
import ModalChangeProductCard from "../../components/Modal/ModalChangeCatalog/ModalChangeProductCard/ModalChangeProductCard";



const EditProductCard = () => {
  const { id } = useParams();
  const productsList = useSelector(getAllProducts);
  const currentProduct = productsList.find((product) => product._id === id);

  const [productName, setProductName] = useState(
    currentProduct?.productName || ""
  );
  const [productCode, setProductCode] = useState(
    currentProduct?.productCode || ""
  );
  const [price, setPrice] = useState(currentProduct?.productPrice || "");
  const [manufacturerCountry, setManufacturerCountry] = useState(
    currentProduct?.productCountry || ""
  );
  const [characteristicArray, setCharacteristicArray] = useState(
    currentProduct?.additionalAttributes || []
  );
  const [coverImage, setCoverImage] = useState(
    currentProduct?.productCoverURL || null
  );
  const [productImages, setProductImages] = useState(
    currentProduct?.productPhotoURL || ""
  );
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setProductName(currentProduct?.productName || "");
    setProductCode(currentProduct?.productCode || "");
    setPrice(currentProduct?.productPrice || "");
    setManufacturerCountry(currentProduct?.productCountry || "");
    setCharacteristicArray(currentProduct?.additionalAttributes || []);
    setCoverImage(currentProduct?.productCoverURL || null);
    setProductImages(currentProduct?.productPhotoURL || "");
  }, [currentProduct]);
  console.log(productName);
  console.log(productCode);
  console.log(price);
  console.log(manufacturerCountry);
  console.log(characteristicArray);
  console.log(coverImage);
  console.log(productImages);
  const dispatch = useDispatch();


  if (!currentProduct) {
    return;
  }

  const handleProductImagesChange = (event) => {
    const files = event.target.files;
    console.log(Array.from(files));
    setProductImages([...productImages, ...Array.from(files)]);
  };

  const handleDeleteProductImg = (index) => {
    const newProductImages = [...productImages];
    newProductImages.splice(index, 1);
    setProductImages(newProductImages);
  };

  // const handleDeleteImgProduct = (photo) => {
  //   console.log(photo);
  // };


  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductCodeChange = (event) => {
    setProductCode(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleManufacturerCountryChange = (event) => {
    setManufacturerCountry(event.target.value);
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImage(file);
  };

  const handleDeleteCoverImg = () => {
    setCoverImage(null);
  };

  const handleDeleteCharacteristicButton = (id, ev) => {
    ev.preventDefault();
    const index = characteristicArray.indexOf(
      (item) => item.characteristicId === id
    );
    characteristicArray.splice(index, 1);
  };

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
    navigate('/');
  }

  const handleSubmit = (event) => {
    event.preventDefault();    
    const additionalAttributes = characteristicArray.map((obj) => {
      return { name: obj.characteristicName, value: obj.characteristicValue };
    });
    
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productCode", productCode);
    formData.append("productPrice", price);
    formData.append("productCountry", manufacturerCountry);
    formData.append("productCoverURL", coverImage || "");
    productImages.forEach((file) => {
      formData.append("productPhotoURL", file);
    });
    formData.append("additionalAttributes", JSON.stringify(additionalAttributes));
    console.log(formData);
    console.log(currentProduct._id);
  
    dispatch(changeProduct(currentProduct._id, formData))
    
    onOpenModal();
    setProductName("");
    setProductCode("");
    setPrice("");
    setManufacturerCountry("");
    setCoverImage(null);
    setProductImages([]);
    setCharacteristicArray([]);
  };

  return (
    <StyledFragment>
     <StyledForm onSubmit={handleSubmit}>
      <StyledH>Редагувати картку товару</StyledH>
      <StyledTitleProduct>{productName}</StyledTitleProduct>
      <StyledP>{`Артикул: ${productCode}`}</StyledP>
      {coverImage === null ? (
        <label>
          <FileInput
            type="file"
            onChange={handleCoverImageChange}
            accept=".jpg, .jpeg"
          />
          <FakeInputWrp>
            <FakeInputText>Додати обкладинку</FakeInputText>
            <FakeButton type="button">
              <BiPlusCircle size={"1.5em"} />
            </FakeButton>
          </FakeInputWrp>
        </label>
      ) : (
        <StyledInputWrapper>
          <StyledCoverLabel htmlFor="name">Назва обкладинки</StyledCoverLabel>
          <StyledImg src={coverImage} alt="cover" />
          <StyledInput
            id="name"
            type="text"
            onChange={handleCoverImageChange}
            value={`Cover_${productName}.jpeg`}
            readOnly
          />
          <StyledButtonDelete type="button " onClick={handleDeleteCoverImg}>
            <RiDeleteBin6Line size={"1.8em"} color="white" />
          </StyledButtonDelete>
        </StyledInputWrapper>
      )}
      {productImages.length !== 0 &&  (
        <ul>
          {productImages.map((photo, index) => (
            <StyledInputWrapperPhoto key={index}>
              <StyledCoverLabel htmlFor="">Назва зображення</StyledCoverLabel>
              <StyledImg src={`${photo}`} alt="photo" />
              <StyledInput type="text" value={`${index+1}.jpeg`} readOnly />
              <StyledButtonDelete onClick={()=> handleDeleteProductImg(index)}>
                <RiDeleteBin6Line size={"1.8em"} color="white" />
              </StyledButtonDelete>
            </StyledInputWrapperPhoto>
          ))}
           </ul> )}
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
  
      <Styledh4>Характеристики товару</Styledh4>
      <StyledP>
        Ціна: <StyledPriceCurrency>{`${price} грн`}</StyledPriceCurrency>
      </StyledP>
      <StyledPCountry>
        Країна <br /> походження:{" "}
        <StyledSpanCountry>{`${manufacturerCountry}`}</StyledSpanCountry>
      </StyledPCountry>
      {characteristicArray.length !== 0 && (
        <StyledUl>
          {characteristicArray.map((item) => (
            <StyledLi key={item._id}>
              <StyledPAttribute>{`${item.name }: `}</StyledPAttribute>
              <StyledSpanAttribute>{item.value }</StyledSpanAttribute>
            </StyledLi>
          ))}
        </StyledUl>
      )}
    
      <StyledInputWrapper>
        <StyledLabel htmlFor="name">Назва товару</StyledLabel>
        <StyledInput
          id="name"
          type="text"
          pattern="^[A-Za-z\s]*$"
          title="Будь-ласка вводьте літери англійського алфавіту"
          minLength={3}
          maxLength={16}
          required
          value={productName}
          onChange={handleProductNameChange}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="article">Артикул</StyledLabel>
        <StyledInput
          id="article"
          type="text"
          pattern="^\d+(\.\d{1,2})?$"
          title="Будь-ласка введіть числовий формат (наприклад, 100 або 1099)"
          required
          value={productCode}
          onChange={handleProductCodeChange}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="price">Ціна</StyledLabel>
        <StyledInput
          id="price"
          type="text"
          pattern="^\d+(\.\d{1,2})?$"
          title="Будь-ласка введіть числовий формат ціни (наприлад, 10 або 10.99)"
          required
          value={price}
          onChange={handlePriceChange}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="country">Країна походження</StyledLabel>
        <StyledInput
          id="country"
          type="text"
          pattern="[A-Za-z]+"
          title="Будь-ласка введіть тільки літери"
          required
          value={manufacturerCountry}
          onChange={handleManufacturerCountryChange}
        />
      </StyledInputWrapper>
      {characteristicArray.map((item) => (
        <AddCharacteristicInputs
          key={item.characteristicId}
          id={item.characteristicId}
          onDelete={handleDeleteCharacteristicButton}
          setCharacteristicArray={setCharacteristicArray}
          characteristicArray={characteristicArray}
        />
      ))}
      <FakeInputWrp>
        <FakeInputText>Додати характеристику</FakeInputText>
        <FakeButton
          type="button"
          onClick={() => {
            const id = nanoid();
            setCharacteristicArray((prevState) => {
              return [...prevState, { characteristicId: id }];
            });
            return;
          }}
        >
          <BiPlusCircle size={"1.5em"} />
        </FakeButton>
      </FakeInputWrp>
      <SubmitButton type="submit"
      disabled={(!productName || !productCode || !price || !manufacturerCountry)}
      >Зберегти зміни</SubmitButton>
    </StyledForm>
    {showModal && <ModalChangeProductCard onCloseModal={onCloseModal}/> }
    </StyledFragment>
  );
};

export default EditProductCard;
