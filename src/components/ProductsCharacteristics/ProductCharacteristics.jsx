import {
  StyledLi,
  StyledP,
  StyledPAttribute,
  StyledPCountry,
  StyledPriceCurrency,
  StyledSpanAttribute,
  StyledSpanCountry,
  StyledUl,
  StyledTable,
  Styledh4,
} from "./ProductCharacteristicsStyled";
import { nanoid } from "nanoid";

const ProductCharacteristics = ({
  price,
  manufacturerCountry,
  characteristicArray,
  productCategory,
}) => {
  const productPriceThousandsSeparates = price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <>
      <Styledh4>Характеристики товару</Styledh4>
      <StyledP>
        Ціна:{" "}
        <StyledPriceCurrency>{`${productPriceThousandsSeparates} грн.`}</StyledPriceCurrency>
      </StyledP>
      <StyledPCountry>
        Виробник: <StyledSpanCountry>{manufacturerCountry}</StyledSpanCountry>
      </StyledPCountry>
      <StyledP>
        Категорія: <StyledSpanCountry>{productCategory}</StyledSpanCountry>
      </StyledP>
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
