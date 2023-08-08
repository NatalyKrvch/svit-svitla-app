import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import CatalogsList from "../../components/CatalogsList/CatalogsList";
import { useEffect, useState } from "react";
import {
  getCatalogs,
  removeCatalog,
} from "../../redux/Catalog/catalogOperations";
import {
  getAllCatalogs,
  getTotalItemsCatalogs,
} from "../../redux/Catalog/catalogSelectors";
import {
  STyledContainer,
  StyledBtnDeleteSearch,
  StyledBtnSearch,
  StyledDiv,
  StyledH2,
  StyledInput,
  StyledInputWrp,
} from "./PreoderCataloguePageStyled";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { useMediaRules } from "../../hooks/useMediaRules";
import Modal from "../../components/Modal/Modal/Modal";
import { useSearchParams } from "react-router-dom";
import Paginator from "../../components/Pagination/Pagination";
import NotFound from "../../components/NotFound/NotFound";
import Container from "../../components/Container/Container";

const PreorderCataloguePage = () => {
  const [fetchedCatalogsList, setFetchedCatalogsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [pageQty, setPageQty] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalDeleteSuccessOpen, setModalDeleteSuccessOpen] = useState(false);
  const [catalogName, setCatalogName] = useState("");
  const [catalogYear, setCatalogYear] = useState("");
  const [catalogId, setCatalogId] = useState("");
  const [filter, setFilter] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const catalogNameSearch = searchParams.get("catalogName");

  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const catalogsList = useSelector(getAllCatalogs);
  const { isMobile, isTablet } = useMediaRules();

  useEffect(() => {
    let newPerPage = 8;

    if (isMobile) {
      newPerPage = 4;
    } else if (isTablet) {
      newPerPage = 6;
    }

    setPerPage(newPerPage);
  }, [isMobile, isTablet]);

  console.log(perPage);
  useEffect(() => {
    dispatch(
      getCatalogs({
        page: pageNumber,
        per_page: perPage,
        catalogName: catalogNameSearch,
      })
    );
  }, [pageNumber, catalogNameSearch, catalogsList.length]);

  const totalItems = useSelector(getTotalItemsCatalogs);

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      setSearchParams({ catalogName: filter });
    }
  };

  useEffect(() => {
    const calculatedPageQty = Math.ceil(totalItems / perPage);
    setPageQty(calculatedPageQty);
    setFetchedCatalogsList(catalogsList);
  }, [catalogsList, totalItems, perPage]);

  const updateCatalogsList = (updatedList) => {
    setFetchedCatalogsList(updatedList);
  };

  const openModal = (name, year, id) => {
    const catalogNameFirstLetterUppercase =
      name.charAt(0).toUpperCase() + name.slice(1);
    setShowModal(true);
    setCatalogName(catalogNameFirstLetterUppercase);
    setCatalogYear(year);
    setCatalogId(id);
  };

  const closeModal = () => {
    setShowModal(false);
    dispatch(setShowModal(false));
  };

  const handleDeleteSuccessModal = () => {
    setModalDeleteSuccessOpen(!modalDeleteSuccessOpen);
  };

  const handleDeleteCatalog = (id) => {
    dispatch(removeCatalog(id));
    catalogsList.filter((catalog) => catalog._id !== id);
  };

  const handleFilterCatalog = (ev) => {
    setFilter(ev.target.value.toLowerCase());
  };

  // added________________________________________________________
  const handleDelete = () => {
    const updatedList = catalogsList.filter(
      (catalog) => catalog._id !== catalogId
    );
    dispatch(removeCatalog(catalogId));
    updateCatalogsList(updatedList);
    closeModal();
    handleDeleteSuccessModal();
  };
  //____________________________________________________________

  return (
    <Container>
      <STyledContainer>
        <StyledDiv>
          {isLoggedIn && (
            <StyledInputWrp>
              <StyledBtnSearch
                onClick={() => setSearchParams({ catalogName: filter })}
              >
                <AiOutlineSearch size={"1.8em"} />
              </StyledBtnSearch>
              <StyledInput
                type="text"
                placeholder="Пошук"
                value={filter}
                onChange={handleFilterCatalog}
                onKeyDown={handleEnterPress}
              />
              {filter && (
                <StyledBtnDeleteSearch
                  onClick={() => {
                    setSearchParams({});
                    setFilter("");
                  }}
                >
                  <RxCrossCircled size={"1.5em"} />
                </StyledBtnDeleteSearch>
              )}
            </StyledInputWrp>
          )}
        </StyledDiv>
        <StyledH2>
          {fetchedCatalogsList.length !== 0 && !filter
            ? "Каталоги для передзамовлення"
            : "Результати пошуку"}
        </StyledH2>
        {fetchedCatalogsList.length !== 0 ? (
          <CatalogsList
            catalogsList={fetchedCatalogsList}
            onDelete={handleDeleteCatalog}
            onOpenModal={openModal}
            closeModal={closeModal}
          />
        ) : (
          <NotFound
            message={
              filter
                ? "Упс... На жаль, за вашим запитом нічого не знайдено"
                : "Відсутні каталоги для передзамовлення"
            }
          />
        )}
        {showModal && (
          <Modal
            color="red"
            numberOfButtons={2}
            title="Ви певні, що хочете видалити каталог?"
            empTitle={`${catalogName}   ${catalogYear}`}
            onCloseModal={closeModal}
            onConfirmation={handleDelete}
          />
        )}
        {modalDeleteSuccessOpen && (
          <Modal
            color="red"
            title="Картка каталогу успішно видалена!"
            onCloseModal={closeModal}
          />
        )}
        {pageQty > 1 && fetchedCatalogsList.length !== 0 && (
          <Paginator
            pageQty={pageQty}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            array={fetchedCatalogsList}
          />
        )}
      </STyledContainer>
    </Container>
  );
};

export default PreorderCataloguePage;
