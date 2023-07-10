import ProductCard from "../ProductCard/ProductCard";
import { StyledList } from "./ProductListStyled";

const ProductList = ({productsList: {data}}) => {
  console.log(data);

  return (
    <StyledList>
      {data.map((product, index) => (
        <li key={index}><ProductCard product={product}/> </li>
      ))}
    </StyledList>
  );
};

export default ProductList;
