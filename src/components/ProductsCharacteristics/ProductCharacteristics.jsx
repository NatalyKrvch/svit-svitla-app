import { StyledLi, StyledP, StyledPAttribute, StyledPCountry, StyledPriceCurrency, StyledSpanAttribute, StyledSpanCountry, StyledUl, Styledh4 } from "./ProductCharacteristicsStyled"
import { nanoid } from "nanoid";


const ProductCharacteristics = ({price, manufacturerCountry, characteristicArray}) => {
    return(
    <>
         <Styledh4>Характеристики товару</Styledh4>
        <StyledP>
          Ціна: <StyledPriceCurrency>{`${price} грн`}</StyledPriceCurrency>
        </StyledP>
        <StyledPCountry>
          Країна <br /> походження:{" "}
          <StyledSpanCountry>{`${manufacturerCountry}`}</StyledSpanCountry>
        </StyledPCountry>
        {characteristicArray.length !== 0 && (
          <StyledUl>
            {characteristicArray.map((item) => (
              <StyledLi key={nanoid()}>
                <StyledPAttribute>
                  {item.characteristicName
                    ? `${item.characteristicName}: `
                    : ""}
                </StyledPAttribute>
                <StyledSpanAttribute>
                  {item.characteristicValue ? item.characteristicValue : ""}
                </StyledSpanAttribute>
              </StyledLi>
            ))}
          </StyledUl>
        )}
    </>
    )
}

export default ProductCharacteristics