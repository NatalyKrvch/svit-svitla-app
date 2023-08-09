import ProductCard from "../ProductCard/ProductCard";
import { StyledList } from "./ProductListStyled";

const ProductList = ({ productsList, onOpen }) => {
  return (
    <StyledList>
      {productsList.map((product, index) => (
        <ProductCard key={index} product={product} onOpen={onOpen} />
      ))}
    </StyledList>
  );
};

export default ProductList;
