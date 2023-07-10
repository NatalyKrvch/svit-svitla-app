import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import {
  StyledButton,
  StyledFragment,
  StyledTitle,
} from "./ProductsCataloguePageStyled";
import { FiFilter } from "react-icons/fi";
import { useEffect } from "react";
import { useState } from "react";
import { getAllProducts } from "../../redux/Product/productSelectors";
import { getProducts } from "../../redux/Product/productOperations";
import Pagination from "../../components/Pagination/Pagination";
import { useMediaRules } from "../../hooks/useMediaRules";
import ModalFilter from "../../components/Modal/ModalChangeCatalog/ModalFilter/ModalFilter";
import { useSearchParams } from "react-router-dom";

const ProductsCataloguePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [showModalFilter, setShowModalFilter] = useState(false);

  const { isMobile, isTablet } = useMediaRules();
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  // const lastProductIndex = pageNumber * perPage;
  // const firstProductIndex = lastProductIndex - perPage;
  // const currentProducts = products.slice(firstProductIndex, lastProductIndex);

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

  // useEffect(() => {
  //   if (!query) {
  //     return;
  //   }
  //   getProductsByQuery(query);
  // }, [query]);

  const handlePaginationClick = (i) => {
    setPageNumber(i);
  };

  const handleNextPageButton = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePreviousPageButton = () => {
    setPageNumber(pageNumber - 1);
  };


//Необходимо исправить функцию после исправления бекенда. 
  const handleLastPageButton = () => {
    const lastPage = Math.ceil(products.length / perPage);
    setPageNumber(lastPage);
  };

  const handleFirstPageButton = () => {
    setPageNumber(1);
  };
  const openModal = () => {
    setShowModalFilter(true);
  };

  const closeModal = () => {
    setShowModalFilter(false);
  };

  const handleSubmit = (filter) => {
    setSearchParams({ query: filter });
    closeModal();
  };

  console.log(query);

  return (
    <StyledFragment>
      {showModalFilter && <ModalFilter onCloseModal = {closeModal} onSubmit={handleSubmit}/>}
      <StyledTitle>Каталог товарів</StyledTitle>
      <StyledButton onClick={() => openModal()}>
        <FiFilter size={"1.5em"} />
        Фільтрувати
      </StyledButton>
      <ProductList productsList={products} />
     {products.length !== 0 &&  
      <Pagination
        pageNumber={pageNumber}
        cardsPerPage={perPage}
        totalCards={products.length}          //исправить после исправления бекенда.
        onClick={handlePaginationClick}
        handleNextPageButton={handleNextPageButton}
        handlePreviousPageButton={handlePreviousPageButton}
        handleLastPageButton={handleLastPageButton}
        handleFirstPageButton={handleFirstPageButton}
      />}
    </StyledFragment>
  );
};

export default ProductsCataloguePage;
