import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProduct } from "../../redux/Product/productOperations";
import { RiDeleteBin6Line } from "react-icons/ri";
import { categoryList } from "../../components/ProductForm/categoryList.json";
import { BiPlusCircle } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { getAllProducts } from "../../redux/Product/productSelectors";
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
  StyledInputWrapperPhoto,
  StyledForm,
  StyledLabel,
  LabelFileInput,
  StyledWrpSelector,
  StyledButtonSelect,
  StyledList,
  StyledOptions,
  ButtonWrapper,
} from "./EditProductCardPageStyled";

import { nanoid } from "nanoid";
import AddCharacteristicInputs from "../../components/AddCharacteristicInputs/AddCharacteristicInputs";
import ProductCharacteristics from "../../components/ProductsCharacteristics/ProductCharacteristics";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import Modal from "../../components/Modal/Modal/Modal";
import { setModalOpen } from "../../redux/Product/productReducer";
import Container from "../../components/Container/Container";
import MainButton from "../../components/Buttons/MainButton/MainButton";

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
  const [productImagesNew, setProductImagesNew] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [coverImageUrl, setCoverImageUrl] = useState(
    currentProduct?.productCoverURL
  );
  const [productImagesUrl, setProductImagesUrl] = useState([]);
  const [category, setCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setProductName(currentProduct?.productName || "");
    localStorage.setItem("productName", currentProduct?.productName );
    setProductCode(currentProduct?.productCode || "");
    localStorage.setItem("productCode", currentProduct?.productCode );
    setPrice(currentProduct?.productPrice || "");
    localStorage.setItem("productPrice", currentProduct?.productPrice);
    setManufacturerCountry(currentProduct?.productCountry || "");
    localStorage.setItem("manufacturerCountry", currentProduct?.productCountry);
    setCharacteristicArray(currentProduct?.additionalAttributes || []);
    localStorage.setItem("additionalCharacteristics", currentProduct?.additionalAttributes);
    setCoverImage(currentProduct?.productCoverURL || null);
    // localStorage.setItem()
    setProductImages(currentProduct?.productPhotoURL || "");
    // localStorage.setItem()
    setCategory(currentProduct?.productCategory || "");
    localStorage.setItem("category", currentProduct?.productCategory);
  }, [currentProduct]);

  const dispatch = useDispatch();

  if (!currentProduct) {
    return;
  }

  // const productPriceThousandsSeparates = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

  const handleProductImagesChangeUrl = (event) => {
    const files = event.target.files;
    const newFiles = Array.from(files);
    const urlArray = [...files].map((file) => URL.createObjectURL(file));
    setProductImagesUrl((prev) => {
      return [...prev, ...urlArray];
    });
    setProductImagesNew((prev) => [...prev, ...newFiles]);
  };

  const handleDeleteProductImg = (index) => {
    const newProductImages = [...productImages];
    newProductImages.splice(index, 1);
    setProductImages(newProductImages);
  };

  const handleDeleteProductImgUrl = (url) => {
    const newProductImagesUrl = productImagesUrl.filter((card) => card !== url);
    URL.revokeObjectURL(url);
    setProductImagesUrl(newProductImagesUrl);
  };

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
    if(inputValue.trim() === ""){
      setProductCode("");
    }
    setProductCode(inputValue);
    localStorage.setItem("productCode", inputValue);
  };

  const handlePriceChange = (event) => {
    const inputValue = event.target.value;
    if(inputValue.trim() === ""){
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

  const handleDeleteCoverImg = () => {
    setCoverImage(null);
    setCoverImageUrl("");
    URL.revokeObjectURL(coverImageUrl);
  };

  const onOpenModal = () => {
    setShowModal(true);
  };
  
  const onCloseModal = () => {
    setShowModal(false);
    dispatch(setModalOpen(false));
    navigate("/");
  };

  const handleOptionClick = (selectedOption) => {
    if (selectedOption !== category) {
      setCategory(selectedOption);
      localStorage.setItem("category", selectedOption);
      setIsOpen(false);
    }
  };

  const onNavigation = () => {
    dispatch(setModalOpen(false));
    navigate("/qrcodegeneration");
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
    formData.append("productPhotoUrlOld", JSON.stringify(productImages));

    productImagesNew.forEach((file) => {
      formData.append(`productPhotoURL`, file);
    });

    formData.append(
      "additionalAttributes",
      JSON.stringify(additionalAttributes)
    );
    formData.append("productCategory", category);
    dispatch(changeProduct({ id: currentProduct._id, body: formData }));
    onOpenModal();
    setProductName("");
    setProductCode("");
    setPrice("");
    setManufacturerCountry("");
    setCoverImage(null);
    setProductImages([]);
    setCharacteristicArray([]);
    setCategory("");
  };

  return (
    <Container>
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
              <StyledCoverLabel htmlFor="name">
                Назва обкладинки
              </StyledCoverLabel>
              <StyledImg src={coverImageUrl} alt="cover" />
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
          {productImages.length !== 0 && (
            <ul>
              {productImages.map((photo, index) => (
                <StyledInputWrapperPhoto key={photo}>
                  <StyledCoverLabel htmlFor="">
                    Назва зображення
                  </StyledCoverLabel>
                  <StyledImg src={`${photo}`} alt="photo" />
                  <StyledInput
                    type="text"
                    value={`${index + 1}.jpeg`}
                    readOnly
                  />
                  <StyledButtonDelete
                    onClick={() => handleDeleteProductImg(index)}
                  >
                    <RiDeleteBin6Line size={"1.8em"} color="white" />
                  </StyledButtonDelete>
                </StyledInputWrapperPhoto>
              ))}
            </ul>
          )}
          {productImagesUrl.length !== 0 && (
            <ul>
              {productImagesUrl.map((photo, index) => (
                <StyledInputWrapperPhoto key={photo}>
                  <StyledCoverLabel htmlFor="">
                    Назва зображення
                  </StyledCoverLabel>
                  <StyledImg src={`${photo}`} alt="photo" />
                  <StyledInput
                    type="text"
                    value={`New Photo ${index + 1}.jpeg`}
                    readOnly
                  />
                  <StyledButtonDelete
                    onClick={() => handleDeleteProductImgUrl(photo)}
                  >
                    <RiDeleteBin6Line size={"1.8em"} color="white" />
                  </StyledButtonDelete>
                </StyledInputWrapperPhoto>
              ))}
            </ul>
          )}
          <LabelFileInput>
            <FileInput
              type="file"
              multiple
              onChange={handleProductImagesChangeUrl}
              accept=".jpg, .jpeg"
            />
            <FakeInputWrp>
              <FakeInputText>Додати зображення</FakeInputText>
              <FakeButton>
                <BiPlusCircle size={"1.5em"} />
              </FakeButton>
            </FakeInputWrp>
          </LabelFileInput>

          <ProductCharacteristics
            price={price}
            manufacturerCountry={manufacturerCountry}
            characteristicArray={characteristicArray}
            productCategory={category}
          />

          <StyledInputWrapper>
            <StyledLabel htmlFor="name">Назва товару</StyledLabel>
            <StyledInput
              id="name"
              type="text"
              pattern="[a-zA-Zа-яА-ЯґҐєЄіІїЇёЁ0-9\s,\-\/\\()\[\]{}<>\|;:!*+=_&^%$#`~.?]*"
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
              pattern="[a-zA-Zа-яА-ЯґҐєЄіІїЇёЁ0-9\s,\-\/\\()\[\]{}<>\|;:!*+=_&^%$#`~.?]*"
              title="Будь-ласка введіть літери англійського або українського алфавіту та деякі спеціальні символи"
              required
              value={manufacturerCountry}
              onChange={handleManufacturerCountryChange}
            />
          </StyledInputWrapper>
          <StyledWrpSelector>
            <StyledLabel htmlFor="country">Оберіть категорію</StyledLabel>
            <StyledButtonSelect onClick={() => setIsOpen(!isOpen)}>
              {category || "---------"}
              {isOpen ? <GoTriangleUp /> : <GoTriangleDown />}
            </StyledButtonSelect>
            {isOpen && (
              <StyledList>
                {categoryList.map((el) => {
                  return (
                    <StyledOptions
                      key={el}
                      onClick={() => handleOptionClick(`${el}`)}
                    >
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
          <ButtonWrapper>
            <MainButton
              type="submit"
              disabled={
                !productName || !productCode || !price || !manufacturerCountry
              }
            >
              Зберегти зміни
            </MainButton>
          </ButtonWrapper>
        </StyledForm>
        {showModal && (
          <Modal
            onCloseModal={onCloseModal}
            title="Картка успішно змінена!"
            numberOfButtons={1}
            onConfirmation={onNavigation}
          />
        )}
      </StyledFragment>
    </Container>
  );
};

export default EditProductCard;
