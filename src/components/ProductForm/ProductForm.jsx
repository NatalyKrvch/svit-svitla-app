import React, { useState } from "react";
import { addProduct } from "../../redux/Product/productOperations";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/Filter/slice";
import { BiPlusCircle } from "react-icons/bi";
import { StyledForm, StyledSelect, StyledTitle, StyledWrpSelector } from "./ProductFormStyled";
import addFields from "../../helpers/addFields";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [price, setPrice] = useState("");
  const [manufacturerCountry, setManufacturerCountry] = useState("");
  const [characteristicName, setCharacteristicName] = useState([]);
  const [characteristicValue, setCharacteristicValue] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [productImages, setProductImages] = useState([]);

  const dispatch = useDispatch()

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

  const handleChangeOptionFilter = (event) => {
    dispatch(setFilter(event.target.value))
  };

  const handleCharacteristicNameChange = (event) => {
    setCharacteristicName(event.target.value);
  };

  const handleCharacteristicValueChange = (event) => {
    setCharacteristicValue(event.trget.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct({
      productName,
      productCode,
      price,
      manufacturerCountry,
      coverImage,
      productImages,
    }))

    setProductName("");
    setProductCode("");
    setPrice("");
    setManufacturerCountry("");
    setCoverImage(null);
    setProductImages([]);
  };

  return (
    <>
    <StyledTitle>Створити картку</StyledTitle>
    <StyledWrpSelector>
      <StyledSelect value={option} onChange={handleChangeOptionFilter}>
        <option value="productCard">Картка товару</option>
        <option value="catalogCard">Картка каталогу</option>
      </StyledSelect>
    </StyledWrpSelector>
        <StyledForm onSubmit={handleSubmit}>
      <label>
        Назва товару
        <input
          type="text"
          value={productName}
          onChange={handleProductNameChange}
        />
      </label>
      <label>
        Артикул
        <input
          type="text"
          value={productCode}
          onChange={handleProductCodeChange}
        />
      </label>
      <label>
        Ціна
        <input type="text" value={price} onChange={handlePriceChange} />
      </label>
      <label>
        Країна походження
        <input
          type="text"
          value={manufacturerCountry}
          onChange={handleManufacturerCountryChange}
        />
      </label>
      <div id="inputsContainer">
      <input type="text" value={"Додати характеристику"} readOnly/>
      <button type="button" onClick={addFields(handleCharacteristicNameChange, handleCharacteristicValueChange )}><BiPlusCircle/></button>
      </div>
     
      <label>
        Додати обкладинку
        <input type="file" onChange={handleCoverImageChange} />
      </label>
      <label>
        Додати зображення
        <input type="file" multiple onChange={handleProductImagesChange} />
      </label>
      <button type="submit">Зберегти</button>
    </StyledForm>
    </>

  );
};



export default ProductForm;

