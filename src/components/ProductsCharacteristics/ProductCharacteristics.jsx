import {
  StyledLi,
  StyledPAttribute,
  StyledSpanAttribute,
  StyledUl,
  Styledh2,
} from "./ProductCharacteristicsStyled";
import { nanoid } from "nanoid";

const ProductCharacteristics = ({
  manufacturerCountry,
  characteristicArray,
  productCategory,
}) => {
  return (
    <>
      <Styledh2>Характеристики товару</Styledh2>
      <div>
        <StyledPAttribute>Категорія: </StyledPAttribute>
        <StyledSpanAttribute>{productCategory}</StyledSpanAttribute>
      </div>
      <div>
        <StyledPAttribute>Виробник: </StyledPAttribute>
        <StyledSpanAttribute>{manufacturerCountry}</StyledSpanAttribute>
      </div>
      {characteristicArray.length !== 0 && (
        <StyledUl>
          {characteristicArray.map((item) => (
            <StyledLi key={nanoid()}>
              <StyledPAttribute>
                {item.name ? `${item.name}: ` : ""}
              </StyledPAttribute>
              <StyledSpanAttribute>
                {item.value ? item.value : ""}
              </StyledSpanAttribute>
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </>
  );
};

export default ProductCharacteristics;
