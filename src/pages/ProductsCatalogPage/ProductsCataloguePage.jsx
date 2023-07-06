import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import { StyledButton, StyledFragment, StyledTitle } from "./ProductsCataloguePageStyled";
import { FiFilter } from "react-icons/fi"
import { useEffect } from "react";
import { useState } from "react";
import { getAllProducts } from "../../redux/Product/productSelectors";
import { getProducts } from "../../redux/Product/productOperations";
import Pagination from "../../components/Pagination/Pagination";
import { useMediaRules } from "../../hooks/useMediaRules";


const ProductsCataloguePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(4);

  const { isMobile, isTablet} = useMediaRules();
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const lastProductIndex = pageNumber * perPage;
  const firstProductIndex = lastProductIndex - perPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);


  useEffect(() => {
    let newPerPage = 8; 

    if (isMobile) {
      newPerPage = 4;
    } else if (isTablet) {
      newPerPage = 6;
    }

    setPerPage(newPerPage);
  }, [isMobile, isTablet]);

  
  useEffect(() => {
    dispatch(getProducts({ page: pageNumber, per_page: perPage }));
  }, [pageNumber]);

  const handlePaginationClick = (i) => {
    setPageNumber(i);
  };

  const handleNextPageButton = () => {
    setPageNumber(pageNumber + 1)
  };

  const handlePreviousPageButton = () => {
    setPageNumber(pageNumber - 1)
  };

  const handleLastPageButton = () => {
    const lastPage = Math.ceil(products.length / perPage);
    setPageNumber(lastPage);
  };

  const handleFirstPageButton = () => {
    setPageNumber(1);
  }



  return (
    <StyledFragment>
      <StyledTitle>Каталог товарів</StyledTitle>
      <StyledButton><FiFilter size={'1.5em'}/>Фільтрувати</StyledButton>
      <ProductList productsList={currentProducts} />
      <Pagination 
      pageNumber={pageNumber}
      cardsPerPage={perPage}
      totalCards={products.length} 
      onClick={handlePaginationClick}
      handleNextPageButton={handleNextPageButton}
      handlePreviousPageButton={handlePreviousPageButton}
      handleLastPageButton={handleLastPageButton}
      handleFirstPageButton={handleFirstPageButton}/>
    </StyledFragment>
  );
};

export default ProductsCataloguePage;
