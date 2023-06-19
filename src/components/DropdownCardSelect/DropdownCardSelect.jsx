import { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import CatalogForm from "../CatalogForm/CatalogForm";
import { StyledOptions, StyledSelect, StyledWrpSelector } from "./DropdownCardSelectStyled";



const DropdownCardSelector = () => {
  const [filter, setFilter] = useState("Вид картки");

  const handleChangeOptionFilter = (evt) => setFilter(evt.target.value);

  return (
    <>
      <StyledWrpSelector>
        <StyledSelect value={filter} onChange={handleChangeOptionFilter}>
          <StyledOptions value="productCard">Картка товару</StyledOptions>
          <StyledOptions value="catalogCard">Картка каталогу</StyledOptions>
        </StyledSelect>
      </StyledWrpSelector>
      {filter === "productCard" &&  <ProductForm/> }
      {filter === "catalogCard" &&  <CatalogForm/> }
    </>
  )
}

export default DropdownCardSelector
