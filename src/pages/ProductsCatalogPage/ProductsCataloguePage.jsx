import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import Paginator from "../../components/Pagination/Pagination";
import {
  BtnWrp,
  StyledBtnDeleteSearch,
  StyledBtnSearch,
  StyledFragment,
  StyledInput,
  StyledInputWrp,
  StyledTitle,
} from "./ProductsCataloguePageStyled";
import { FiFilter } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import {
  getAllProducts,
  getTotalItemsProduct,
  isModalOpen,
} from "../../redux/Product/productSelectors";
import {
  getProducts,
  removeProduct,
} from "../../redux/Product/productOperations";
import { useMediaRules } from "../../hooks/useMediaRules";
import ModalFilter from "../../components/Modal/ModalFilter/ModalFilter";
import { useSearchParams } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import Modal from "../../components/Modal/Modal/Modal";
import { setModalOpen } from "../../redux/Product/productReducer";
import Container from "../../components/Container/Container";
import NotFound from "../../components/NotFound/NotFound";
import MainButton from "../../components/Buttons/MainButton/MainButton";

const ProductsCataloguePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [pageQty, setPageQty] = useState(0);
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [productCode, setProductCode] = useState("");
  const [productId, setProductId] = useState("");
  const [updatedProductList, setUpdatedProductList] = useState([]);
  const [filterByCode, setFilterByCode] = useState("");
  const { isMobile, isTablet } = useMediaRules();
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const totalProducts = useSelector(getTotalItemsProduct);
  const modalOpen = useSelector(isModalOpen);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const article = searchParams.get("article");
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    let newPerPage = 8;
    if (isTablet) {
      newPerPage = 6;
    } else if (isMobile) {
      newPerPage = 4;
    }

    setPerPage(newPerPage);
  }, [isMobile, isTablet]);

  useEffect(() => {
    dispatch(
      getProducts({
        page: pageNumber,
        per_page: perPage,
        article,
        filter: query,
      })
    );
  }, [pageNumber, perPage, article, query]);

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      setSearchParams({ article: filterByCode });
    }
  };

  useEffect(() => {
    const calculatedPageQty = Math.ceil(totalProducts / perPage);
    setPageQty(calculatedPageQty);
    setUpdatedProductList(products);
  }, [products, totalProducts, perPage]);

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

  const openModalDelete = (code, id) => {
    setIsModalDeleteOpen(true);
    setProductCode(code);
    setProductId(id);
  };

  const handleDeleteSuccessModal = () => {
    dispatch(setModalOpen(false));
  };

  const closeModalDelete = () => {
    setIsModalDeleteOpen(false);
  };
  const handleChangeFilterByCode = (ev) => setFilterByCode(ev.target.value);
  const handleDelete = () => {
    const updatedList = updatedProductList.filter((el) => el._id !== productId);
    dispatch(removeProduct(productId));
    setUpdatedProductList(updatedList);
    closeModalDelete();
  };

  return (
    <Container>
      <StyledFragment>
        {showModalFilter && (
          <ModalFilter onCloseModal={closeModal} onSubmit={handleSubmit} />
        )}
        {isModalDeleteOpen && (
          <Modal
            color="red"
            numberOfButtons={2}
            title="Ви певні, що хочете видалити картку?"
            empTitle={productCode}
            onCloseModal={closeModalDelete}
            onConfirmation={handleDelete}
          />
        )}
        {modalOpen && (
          <Modal
            color="red"
            onCloseModal={handleDeleteSuccessModal}
            title={"Картка успішно видалена!"}
          />
        )}
        {isLoggedIn && (
          <StyledInputWrp>
            <StyledBtnSearch
              onClick={() => {
                setSearchParams({ article: filterByCode });
              }}
            />

            <StyledInput
              type="text"
              placeholder="Пошук"
              value={filterByCode}
              onChange={handleChangeFilterByCode}
              onKeyDown={handleEnterPress}
            />
            {filterByCode && (
              <StyledBtnDeleteSearch
                onClick={() => {
                  setSearchParams({});
                  setFilterByCode("");
                }}
              />
            )}
          </StyledInputWrp>
        )}
        <StyledTitle>
          {updatedProductList.length !== 0 && !query && !article
            ? "Каталог товарів"
            : "Результати пошуку"}
        </StyledTitle>
        {!isLoggedIn && (
          <BtnWrp>
            <MainButton
              buttonType="filter"
              onClick={!query ? () => openModal() : () => setSearchParams({})}
            >
              {!query && <FiFilter size={"1.5em"} />}
              {query ? `${query}` : "Фільтрувати"}
              {query && <RxCrossCircled />}
            </MainButton>
          </BtnWrp>
        )}
        {updatedProductList.length !== 0 ? (
          <ProductList
            productsList={updatedProductList}
            onOpen={openModalDelete}
          />
        ) : (
          <NotFound
            message={
              query || article
                ? "Упс... На жаль, за вашим запитом нічого не знайдено"
                : "Товари відсутні"
            }
          />
        )}
        {pageQty > 1 && updatedProductList.length !== 0 && (
          <Paginator
            pageQty={pageQty}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            array={updatedProductList}
          />
        )}
      </StyledFragment>
    </Container>
  );
};

export default ProductsCataloguePage;
