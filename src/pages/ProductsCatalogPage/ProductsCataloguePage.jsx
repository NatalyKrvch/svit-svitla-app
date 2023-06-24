import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import { StyledButton, StyledTitle } from "./ProductsCataloguePageStyled";
import { FiFilter } from "react-icons/fi"
import { useEffect } from "react";
import { getProducts } from "../../redux/Product/productOperations";
import { useState } from "react";
import { getAllProducts } from "../../redux/Product/productSelectors";


const ProductsCataloguePage = () => {
  const [pageNumber, setPageNumber] = useState('1');
  const [perPage, setPerPage] = useState('4');

  const productsList = useSelector(getAllProducts)
   
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ page: pageNumber, per_page: perPage }));
  }, [pageNumber]);

  return (
    <>
      <StyledTitle>Каталог товарів</StyledTitle>
      <StyledButton><FiFilter size={'1.5em'}/>Фільтрувати</StyledButton>
      <ProductList productsList={productsList} />
      {/* <Pagination/> */}
    </>
  );
};

export default ProductsCataloguePage;
