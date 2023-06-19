import { useState } from "react";
import { StyledSelect, StyledWrpSelector } from "./SelectCardSelectorStyled";

const SelectCardSelector = () => {
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
    </>
  );
};

export default SelectCardSelector;
