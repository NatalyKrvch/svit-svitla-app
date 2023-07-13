import { useEffect } from "react";
import { SliderWrapper } from "./ProductCardPageStyled";
import ProductCharacteristics from "../../components/ProductsCharacteristics/ProductCharacteristics";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../redux/Product/productOperations";
import { getCurrentProduct } from "../../redux/Product/productSelectors";

const ProductCardPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  const currentProduct = useSelector(getCurrentProduct);
  console.log(currentProduct);

  return (
    <>
      <SliderWrapper></SliderWrapper>
      <ProductCharacteristics
        price={currentProduct.productPrice}
        manufacturerCountry={currentProduct.productCountry}
        characteristicArray={currentProduct.additionalAttributes}
      />
    </>
  );
};

export default ProductCardPage;
