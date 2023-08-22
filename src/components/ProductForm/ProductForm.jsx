import { useEffect, useState } from "react";
import { addProduct } from "../../redux/Product/productOperations";
import { useDispatch, useSelector } from "react-redux";
import { categoryList } from "./categoryList.json";
import { BiPlusCircle } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { nanoid } from "nanoid";
import {
  ButtonWrapper,
  FakeButton,
  FakeInputText,
  FakeInputWrp,
  FileInput,
  StyledButtonDelete,
  StyledButtonSelect,
  StyledCoverLabel,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledInputWrapper,
  StyledInputWrapperPhoto,
  StyledLabel,
  StyledList,
  StyledOptions,
  StyledWrpSelector,
} from "./ProductFormStyled";

import AddCharacteristicInputs from "../AddCharacteristicInputs/AddCharacteristicInputs";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import {
  error,
  getLoadingProducts,
} from "../../redux/Product/productSelectors";


const ProductForm = ({ openModal }) => {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [price, setPrice] = useState("");
  const [manufacturerCountry, setManufacturerCountry] = useState("");
  const [characteristicArray, setCharacteristicArray] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [productImages, setProductImages] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [productImagesUrl, setProductImagesUrl] = useState([]);
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const errorOperations = useSelector(error);
  const isLoading = useSelector(getLoadingProducts);

  useEffect(() => {
    const savedProductName = localStorage.getItem("productName");
    const savedProductCode = localStorage.getItem("productCode");
    const savedProductPrice = localStorage.getItem("productPrice");
    const savedManufacturerCountry = localStorage.getItem(
      "manufacturerCountry"
    );
    // const savedCoverImg = localStorage.getItem("coverImage");
    const savedCoverImgUrl = localStorage.getItem("coverImageUrl");
    const savedCategory = localStorage.getItem("category");
    // const savedProductImages = localStorage.getItem("productImages");
    // const savedProductImagesUrl = localStorage.getItem("productImagesUrl");
    const savedAdditionalCharacteristics = localStorage.getItem(
      "additionalCharacteristics"
    );

    if (savedProductName) {
      setProductName(savedProductName);
    }
    if (savedProductCode) {
      setProductCode(savedProductCode);
    }
    if (savedProductPrice) {
      setPrice(savedProductPrice);
    }
    if (savedManufacturerCountry) {
      setManufacturerCountry(savedManufacturerCountry);
    }
    // if (savedCoverImg) {
    //   setCoverImage();
    // }
    if (savedCoverImgUrl) {
      setCoverImageUrl(savedCoverImgUrl);
    }
    if (savedCategory) {
      setCategory(savedCategory);
    }
    // if (savedProductImages) {
    //   setProductImages(savedProductImages);
    // }
    // if (savedProductImagesUrl) {
    //   setProductImagesUrl(savedProductImagesUrl);
    // }
    if (savedAdditionalCharacteristics) {
      setCharacteristicArray(JSON.parse(savedAdditionalCharacteristics) || []);
    }
    if (!errorOperations && !isLoading) {
      setProductName("");
      setProductCode("");
      setPrice("");
      setManufacturerCountry("");
      setCoverImage(null);
      setProductImages([]);
      setCharacteristicArray([]);
      setCategory("");
    } 
  }, [errorOperations]);

  const handleProductNameChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      setProductName("");
    } else {
      setProductName(inputValue);
      localStorage.setItem("productName", inputValue);
    }
  };

  const handleProductCodeChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      setProductCode("");
    }
    setProductCode(inputValue);
    localStorage.setItem("productCode", inputValue);
  };

  const handlePriceChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      setPrice("");
    }
    setPrice(inputValue);
    localStorage.setItem("productPrice", inputValue);
  };

  const handleManufacturerCountryChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      setManufacturerCountry("");
    }
    setManufacturerCountry(inputValue);
    localStorage.setItem("manufacturerCountry", inputValue);
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImageUrl(URL.createObjectURL(file));
    setCoverImage(file);
    
    localStorage.setItem("coverImageUrl", URL.createObjectURL(file));
  };

  const handleProductImagesChange = (event) => {
    const files = event.target.files;
    const productImagesAdded = Array.from(files);
    setProductImages((p) => [...p, ...productImagesAdded]);
  
    const urlArray = [...files].map((file) => URL.createObjectURL(file));
    setProductImagesUrl((p) => [...p, ...urlArray]);
   
  };

  const handleDeleteCoverImg = () => {
    setCoverImage(null);
    localStorage.removeItem("coverImage");
    setCoverImageUrl("");
    localStorage.removeItem("coverImageUrl");
    URL.revokeObjectURL(coverImageUrl);
  };

  const handleDeletePhotoImg = (url) => {
    const newProductImages = productImages.filter((card) => card !== url);
    setProductImages(newProductImages);
    // localStorage.setItem("productImages", JSON.stringify(newProductImages));
    const newProductImagesUrl = productImagesUrl.filter((card) => card !== url);
    URL.revokeObjectURL(url);
    setProductImagesUrl(newProductImagesUrl);
    // localStorage.setItem(
    //   "productImagesUrl",
    //   JSON.stringify(newProductImagesUrl)
    // );
  };

  const handleOptionClick = (selectedOption) => {
    if (selectedOption !== category) {
      setCategory(selectedOption);
      localStorage.setItem("category", selectedOption);
      setIsOpen(false);
    }
    return;
  };

  const handleChooseCategoryClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const additionalAttributes = characteristicArray.map((obj) => {
      return { name: obj.name, value: obj.value };
    });
    localStorage.setItem("productImagesUrl", JSON.stringify(productImagesUrl));

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productCode", productCode);
    formData.append("productPrice", price);
    formData.append("productCountry", manufacturerCountry);
    formData.append("productCoverURL", coverImage || "");
    if (productImages) {
      productImages.forEach((file) => {
        formData.append("productPhotoURL", file);
      });
    }
    formData.append(
      "additionalAttributes",
      JSON.stringify(additionalAttributes)
    );
    formData.append("productCategory", category);
    dispatch(addProduct(formData));
  
    
  };

  

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <StyledLabel htmlFor="name">Назва товару</StyledLabel>
        <StyledInput
          id="name"
          type="text"
          pattern="[a-zA-Zа-яА-ЯґҐєЄіІїЇёЁ0-9\s,]*"
          title="Будь-ласка вводьте літери англійського чи українського алфавіту"
          minLength={3}
          maxLength={25}
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
          pattern="^\d+(\.\d{1,2})?$" ///^\d+(\.\d{1,2})?$/
          title="Будь-ласка введіть числовий формат ціни (наприлад, 10 або 10.99)"
          maxLength={9}
          required
          value={price}
          onChange={handlePriceChange}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="country">Виробник</StyledLabel>
        <StyledInput
          id="country"
          type="text"
          pattern="[a-zA-Zа-яА-ЯґҐєЄіІїЇёЁ\s]*"
          title="Будь-ласка введіть літери англійсього чи українського алфавіту"
          required
          value={manufacturerCountry}
          onChange={handleManufacturerCountryChange}
        />
      </StyledInputWrapper>
      <StyledWrpSelector>
        <StyledLabel htmlFor="country">Оберіть категорію</StyledLabel>
        <StyledButtonSelect onClick={handleChooseCategoryClick} required>
          {category || "---------"}
          {isOpen ? <GoTriangleUp /> : <GoTriangleDown />}
        </StyledButtonSelect>
        {isOpen && (
          <StyledList>
            {categoryList.map((el) => {
              return (
                <StyledOptions key={el} onClick={() => handleOptionClick(el)}>
                  {el}
                </StyledOptions>
              );
            })}
          </StyledList>
        )}
      </StyledWrpSelector>
      {characteristicArray.map(({ _id, name, value }) => {
        return (
          <AddCharacteristicInputs
            key={_id}
            id={_id}
            name={name}
            value={value}
            characteristicArray={characteristicArray}
            setCharacteristicArray={setCharacteristicArray}
          />
        );
      })}
      <FakeInputWrp>
        <FakeInputText>Додати характеристику</FakeInputText>
        <FakeButton
          type="button"
          onClick={() => {
            const id = nanoid();
            setCharacteristicArray((prevState) => {
              return [...prevState, { _id: id, name: "", value: "" }];
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
          <StyledImg src={coverImageUrl} alt="cover" />
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
        <>
          <ul>
            {productImagesUrl.map((photo, index) => (
              <StyledInputWrapperPhoto key={photo}>
                <StyledCoverLabel htmlFor="">Назва зображення</StyledCoverLabel>
                <StyledImg src={photo} alt="photo" />
                <StyledInput type="text" value={`${index + 1}.jpeg`} readOnly />
                <StyledButtonDelete onClick={() => handleDeletePhotoImg(photo)}>
                  <RiDeleteBin6Line size={"1.8em"} color="white" />
                </StyledButtonDelete>
              </StyledInputWrapperPhoto>
            ))}
          </ul>
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
        </>
      )}
      <ButtonWrapper>
        <MainButton
          type="submit"
          disabled={
            !productName ||
            !productCode ||
            !price ||
            !manufacturerCountry ||
            !category
          }
        >
          Зберегти
        </MainButton>
      </ButtonWrapper>
    </StyledForm>
  );
};

export default ProductForm;
