
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";
import { Pagination } from "@mui/material";
import {
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
import { getProducts, removeProduct } from "../../redux/Product/productOperations";
import { useMediaRules } from "../../hooks/useMediaRules";
import ModalFilter from "../../components/Modal/ModalFilter/ModalFilter";
import { useSearchParams } from "react-router-dom";
// import ModalDeleteProduct from "../../components/Modal/ModalDeleteProduct/ModalDeleteProduct";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { AiOutlineSearch } from "react-icons/ai";
import Notiflix from "notiflix";
// import ModalDeleteSuccess from "../../components/Modal/ModalDeleteSuccess/ModalDeleteSuccess";
import Modal from "../../components/Modal/Modal/Modal";
import { setModalOpen } from "../../redux/Product/productReducer";

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

  const { isMobile, isTablet, isDesktop } = useMediaRules();
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const totalProducts = useSelector(getTotalItemsProduct);
  const modalOpen = useSelector(isModalOpen);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const article = searchParams.get("article");

  const isLoggedIn = useSelector(getIsLoggedIn);
  const pageQty = Math.ceil(totalProducts / perPage);

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
    <StyledFragment>
      {showModalFilter && (
        <ModalFilter onCloseModal={closeModal} onSubmit={handleSubmit} />
      )}
      {isModalDeleteOpen && (
        //   <ModalDeleteProduct
        //     onClose={closeModalDelete}+
        //     code={productCode}+
        //     id={productId}+
        //     products={updatedProductList}+
        //     setUpdatedProductList={setUpdatedProductList}+
        //     onOpenDeleteSuccessModal={handleDeleteSuccessModal}
        // />
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
        <StyledButton
          onClick={!query ? () => openModal() : () => setSearchParams({})}
        >
          {!query && <FiFilter size={"1.5em"} />}
          {query ? `${query}` : "Фільтрувати"}
          {query && <RxCrossCircled />}
        </StyledButton>
      )}
      {products.length !== 0 && (
        <ProductList
          productsList={updatedProductList}
          onOpen={openModalDelete}
        />
      )}
      {pageQty > 1 && 
      <Pagination

      count={pageQty}
      page={pageNumber}
      showFirstButton
      showLastButton
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
      onChange={(_, number) => setPageNumber(number)}
      sx={{
        maxWidth: isMobile ? "328px" : isTablet ? "512px" : "568px",
        marginLeft: "auto",
        marginTop: isMobile ? "16px" : isTablet? "32px" : "64px",
        "& .MuiPagination-ul": {
          justifyContent: isMobile? "center" : "flex-end",
        "& .MuiPaginationItem-root": {
          fontSize: isDesktop? "20px" : "14px",
        }
        }
      }}
    />}

    </StyledFragment>
  );
};

export default ProductsCataloguePage;
