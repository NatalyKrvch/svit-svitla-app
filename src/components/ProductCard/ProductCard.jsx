import { StyledButton, StyledImg, StyledP, StyledProductName, StyledTextWrapper } from "./ProductCardStyled"

const ProductCard = ({productCoverURL, productName, productCode, productPrice}) => {
    return (
        <div>
            <StyledImg src={productCoverURL} alt="" />
            <StyledTextWrapper>
                <StyledProductName>Назва{productName}</StyledProductName>
                <StyledP>Артикул: { productCode}</StyledP>
                <StyledP>Ціна: {productPrice} грн</StyledP>
                <StyledButton>Деталі</StyledButton>
            </StyledTextWrapper>
        </div>
    )
}

export default ProductCard