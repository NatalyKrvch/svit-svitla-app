import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import Paginator from "../../components/Pagination/Pagination";
import {
  BtnWrp,
  StyledBtnDeleteSearch,
  StyledBtnSearch,
  StyledButton,
  StyledFragment,
  StyledInput,
  StyledInputWrp,
  StyledTitle,
} from "./ProductsCataloguePageStyled";
import { FiFilter } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { useEffect } from "react";
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
import { AiOutlineSearch } from "react-icons/ai";
import Modal from "../../components/Modal/Modal/Modal";
import { setModalOpen } from "../../redux/Product/productReducer";
import Wrapper from "../../components/Container/Container";
import NotFound from "../../components/NotFound/NotFound";
import MainButton from "../../components/Buttons/MainButton/MainButton";

const ProductsCataloguePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  // const [modalDeleteSuccessOpen, setModalDeleteSuccessOpen] = useState(false);
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
  const pageQty = Math.floor(totalProducts / perPage);

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
    setUpdatedProductList(products);
  }, [products]);

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
    console.log(isModalDeleteOpen);
    setProductCode(code);
    setProductId(id);
  };

  const handleDeleteSuccessModal = () => {
    dispatch(setModalOpen(false));
    // setModalDeleteSuccessOpen(!modalDeleteSuccessOpen);
  };

  const closeModalDelete = () => {
    setIsModalDeleteOpen(false);
  };
  const handleChangeFilterByCode = (ev) => setFilterByCode(ev.target.value);
  // added__________________________________________________
  const handleDelete = () => {
    const updatedList = updatedProductList.filter((el) => el._id !== productId);
    dispatch(removeProduct(productId));
    setUpdatedProductList(updatedList);
    closeModalDelete();
    // handleDeleteSuccessModal();
  };
  //______________________________________________________

  return (
    <Wrapper>
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
            >
              <AiOutlineSearch size={"1.8em"} />
            </StyledBtnSearch>
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
              >
                <RxCrossCircled size={"1.5em"} />
              </StyledBtnDeleteSearch>
            )}
          </StyledInputWrp>
        )}
        <StyledTitle>Каталог товарів</StyledTitle>
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
        {products.length !== 0 ? (
          <ProductList
            productsList={updatedProductList}
            onOpen={openModalDelete}
          />
        ) : (
          <NotFound
            message={
              query
                ? "Відстутні товари у вибраній категорії"
                : "Відсутній товар із вказаним артиклем"
            }
          />
        )}
        {pageQty > 1 && (
          <Paginator
            pageQty={pageQty}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        )}
      </StyledFragment>
    </Wrapper>
  );
};

export default ProductsCataloguePage;
