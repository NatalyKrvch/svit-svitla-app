import { useState } from "react";
import { StyledSelect, StyledWrpSelector } from "./SelectCardSelectorStyled";
import ProductForm from "../ProductForm/ProductForm";
import CatalogForm from "../CatalogForm/CatalogForm";



const DropdownCardSelector = () => {
  const [filter, setFilter] = useState("Вид картки");

  const handleChangeOptionFilter = (evt) => setFilter(evt.target.value);

  return (
    <>
      <StyledWrpSelector>
        <StyledSelect value={filter} onChange={handleChangeOptionFilter}>
          <option value="productCard">Картка товару</option>
          <option value="catalogCard">Картка каталогу</option>
        </StyledSelect>
      </StyledWrpSelector>
      {filter === "productCard" &&  <ProductForm/> }
      {filter === "catalogCard" &&  <CatalogForm/> }
    </>
  );
};

export default DropdownCardSelector;
