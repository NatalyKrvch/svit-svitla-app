import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import { StyledButton, StyledFragment, StyledTitle } from "./ProductsCataloguePageStyled";
import { FiFilter } from "react-icons/fi"
import { useEffect } from "react";
import { getProducts } from "../../redux/Product/productOperations";
import { useState } from "react";
import { getAllProducts } from "../../redux/Product/productSelectors";
// import Pagination from "../../components/Pagination/Pagination";
// import { useMediaRules } from "../../hooks/useMediaRules";


const ProductsCataloguePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(4);

  // const { isMobile, isTablet} = useMediaRules();
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const lastProductIndex = pageNumber * perPage;
  const firstProductIndex = lastProductIndex - perPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);


  // if (isMobile) {
  //   setPerPage(4); 
  // } else if (isTablet) {
  //   setPerPage(6);
  // } else {
  //   setPerPage(8); 
  // }
   
  
  useEffect(() => {
    dispatch(getProducts({ page: pageNumber, per_page: perPage }));
  }, [pageNumber]);

  // const handlePaginationClick = (i) => {
  //   setPageNumber(i);
  // };

  return (
    <StyledFragment>
      <StyledTitle>Каталог товарів</StyledTitle>
      <StyledButton><FiFilter size={'1.5em'}/>Фільтрувати</StyledButton>
      <ProductList productsList={currentProducts} />
      {/* <Pagination 
      cardsPerPage={perPage}
      totalCards={products.length} 
      onClick={handlePaginationClick}/> */}
    </StyledFragment>
  );
};

export default ProductsCataloguePage;
