import React, { useState } from "react";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [price, setPrice] = useState("");
  const [manufacturerCountry, setManufacturerCountry] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [productImages, setProductImages] = useState([]);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Добавьте здесь логику для обработки отправки формы
    // Например, можно отправить данные на сервер или выполнить другие действия

    // Сбросить значения полей формы после отправки
    setProductName("");
    setProductCode("");
    setPrice("");
    setManufacturerCountry("");
    setCoverImage(null);
    setProductImages([]);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <label>
        Додати обкладинку
        <input type="file" onChange={handleCoverImageChange} />
      </label>
      <label>
        Додати зображення
        <input type="file" multiple onChange={handleProductImagesChange} />
      </label>
      <button type="submit">Зберегти</button>
    </form>
  );
};

export default ProductForm;
