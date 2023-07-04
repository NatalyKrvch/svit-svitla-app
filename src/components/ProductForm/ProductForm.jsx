import { useState } from "react";
import { addProduct, changeProduct } from "../../redux/Product/productOperations";
import { useDispatch} from "react-redux";
import { BiPlusCircle } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { nanoid } from "nanoid";
import {
  FakeButton,
  FakeInputText,
  FakeInputWrp,
  FileInput,
  StyledButtonDelete,
  StyledCoverLabel,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledInputWrapper,
  StyledInputWrapperPhoto,
  StyledLabel,
  SubmitButton,
} from "./ProductFormStyled";

import AddCharacteristicInputs from "../AddCharacteristicInputs/AddCharacteristicInputs";



const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [price, setPrice] = useState("");
  const [manufacturerCountry, setManufacturerCountry] = useState("");
  const [characteristicArray, setCharacteristicArray] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [productImages, setProductImages] = useState("");

  const dispatch = useDispatch();


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

  const handleProductImagesChange = (event) => {
    const files = event.target.files;
    setProductImages(Array.from(files));
  };

  const handleDeleteCharacteristicButton = (id, ev) => {
    ev.preventDefault();
    const index = characteristicArray.indexOf(
      (item) => item.characteristicId === id
    );
    characteristicArray.splice(index, 1);
  };

  const handleDeleteCoverImg = () => {
    setCoverImage(null);
  };

  const handleDeletePhotoImg = () => {
    setProductImages([]);
  };

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
    dispatch(addProduct(formData))
    

    setProductName("");
    setProductCode("");
    setPrice("");
    setManufacturerCountry("");
    setCoverImage(null);
    setProductImages([]);
    setCharacteristicArray([]);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
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
          pattern="^[а-яА-Я\s]+$"
          title="Будь-ласка введіть літери украънського алфавіту"
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
            value={`Cover_${productName}.jpeg`}
            onChange={handleCoverImageChange}
          />
          <StyledButtonDelete type="button " onClick={handleDeleteCoverImg}>
            <RiDeleteBin6Line size={"1.8em"} color="white" />
          </StyledButtonDelete>
        </StyledInputWrapper>
      )}
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
        // <StyledInputWrapper>
        //   <StyledCoverLabel htmlFor="name">Фото товару</StyledCoverLabel>
        //   <StyledImg src={`${coverImage}`} alt="cover" />
        //   <StyledInput id="name" type="text" />
        //   <StyledButtonDelete type="button" onClick={handleDeletePhotoImg}>
        //     <RiDeleteBin6Line size={"1.8em"} color="white" />
        //   </StyledButtonDelete>
        // </StyledInputWrapper>
        <ul>
      { productImages.map((photo, index) => 
        (<StyledInputWrapperPhoto key={index}>
          <StyledCoverLabel htmlFor="">Назва зображення</StyledCoverLabel>
          <StyledImg src={photo} alt="photo" />
          <StyledInput type="text" value={`${index+1}.jpeg`} readOnly />
          <StyledButtonDelete 
          onClick={handleDeletePhotoImg}>
            <RiDeleteBin6Line size={"1.8em"} color="white" />
          </StyledButtonDelete>
        </StyledInputWrapperPhoto>
        ))}
      </ul>
      )}

      <SubmitButton type="submit"
      disabled={(!productName || !productCode || !price || !manufacturerCountry)}
      >Зберегти</SubmitButton>
    </StyledForm>
  );
};

export default ProductForm;
