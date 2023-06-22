import ProductCard from "../ProductCard/ProductCard";
import { StyledList } from "./ProductListStyled";

const ProductList = ({productsList}) => {
 

  return (
    <StyledList>
      {productsList.map((product, index) => (
        <li key={index}><ProductCard product={product}/> </li>
      ))}
    </StyledList>
  );
};

export default ProductList;
