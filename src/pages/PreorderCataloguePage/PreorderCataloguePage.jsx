import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import CatalogsList from "../../components/CatalogsList/CatalogsList";
import { useEffect, useState } from "react";
import { Pagination} from "@mui/material";
import {
  getCatalogs,
  removeCatalog,
} from "../../redux/Catalog/catalogOperations";
import { getAllCatalogs, getTotalItemsCatalogs } from "../../redux/Catalog/catalogSelectors";
import {
  STyledContainer,
  StyledBtnSearch,
  StyledDiv,
  StyledH2,
  StyledInput,
  StyledInputWrp,
} from "./PreoderCataloguePageStyled";
import { AiOutlineSearch } from "react-icons/ai";
import ModalDeleteCatalog from "../../components/Modal/ModalDeleteCatalog/ModalDeleteCatalog";
import Notiflix from 'notiflix';
import { useMediaRules } from "../../hooks/useMediaRules";
import ModalDeleteSuccess from "../../components/Modal/ModalDeleteSuccess/ModalDeleteSuccess";
import { useSearchParams } from "react-router-dom";

const PreorderCataloguePage = () => {
  // const [fetchedCatalogsList, setFetchedCatalogsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(4);
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
  console.log(catalogsList);
  const { isMobile, isTablet, isDesktop} = useMediaRules();
  const totalItems = useSelector(getTotalItemsCatalogs);
  const pageQty = Math.ceil(totalItems/perPage);
  console.log(totalItems);
  console.log(catalogsList)
 

  useEffect(() => {
    dispatch(getCatalogs({ page: pageNumber, per_page: perPage , catalogName: catalogNameSearch}));
  }, [pageNumber, perPage, filter]);

  // useEffect(() => {
  //   setFetchedCatalogsList(catalogsList);
  // }, [catalogsList]);

  // const updateCatalogsList = (updatedList) => {
  //   setFetchedCatalogsList(updatedList);
  // };

  console.log(catalogsList);
  // console.log(fetchedCatalogsList);

  useEffect(() => {
    let newPerPage = 8; 

    if (isMobile) {
      newPerPage = 4;
    } else if (isTablet) {
      newPerPage = 6;
    }

    setPerPage(newPerPage);
  }, [isMobile, isTablet]);


  const openModal = (name, year, id) => {
    setShowModal(true);
    setCatalogName(name);
    setCatalogYear(year);
    setCatalogId(id);
  };

  const closeModal = () => {
    setShowModal(false);
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

  // const handleOnSearchButton = (name) => {
  //   const filteredCatalog = fetchedCatalogsList.find(
  //     (catalog) => catalog.catalogName.toLowerCase() === name
  //   );
  //   if (filteredCatalog) {
  //     setFetchedCatalogsList([filteredCatalog]);
  //     setFilter('');
  //   }
  //   else {
  //     Notiflix.Notify.failure("Каталог з таким ім'ям не знайдено")
  //     setFilter(''); 
  //   }
  //   return;
  // };


  return (
    <STyledContainer>
      <StyledDiv>
        {isLoggedIn && (
          <StyledInputWrp>
            <StyledBtnSearch onClick={() => setSearchParams({catalogName: filter})}>
              <AiOutlineSearch size={"1.8em"} />
            </StyledBtnSearch>
            <StyledInput
              type="text"
              placeholder="Пошук"
              value={filter}
              onChange={handleFilterCatalog}
            />
          </StyledInputWrp>
        )}
        <StyledH2>Каталоги для передзамовлення</StyledH2>
        <CatalogsList
          catalogsList={catalogsList}
          onDelete={handleDeleteCatalog}
          onOpenModal={openModal}
          closeModal={closeModal}
        />
      </StyledDiv>
      {showModal && (
        <ModalDeleteCatalog
          catalogName={catalogName}
          catalogYear={catalogYear}
          catalogId={catalogId}
          onCloseModal={closeModal}
          // catalogsList={catalogsList}
          // updateCatalogsList={updateCatalogsList}
          onOpenDeleteSuccessModal={handleDeleteSuccessModal}
        />
      )}
       {modalDeleteSuccessOpen && (
        <ModalDeleteSuccess 
        onClose={handleDeleteSuccessModal}
        title={"Картка каталогу успішно видалена"}/>
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
        "& .MuiPagination-ul": {
          justifyContent: isMobile? "center" : "flex-end",
        "& .MuiPaginationItem-root": {
          fontSize: isDesktop? "20px" : "14px",
        }
        }
      }}
    />}
    </STyledContainer>
  );
};

export default PreorderCataloguePage;
