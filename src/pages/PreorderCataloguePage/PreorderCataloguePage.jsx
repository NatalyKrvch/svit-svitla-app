import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import CatalogsList from "../../components/CatalogsList/CatalogsList";
import { useEffect,  useState } from "react";
import { getCatalogs, removeCatalog } from "../../redux/Catalog/catalogOperations";
import { getAllCatalogs } from "../../redux/Catalog/catalogSelectors";
import { STyledContainer, StyledBtnSearch, StyledDiv, StyledH2, StyledInput, StyledInputWrp } from "./PreoderCataloguePageStyled";
import { AiOutlineSearch } from "react-icons/ai";
import ModalDeleteCatalog from "../../components/Modal/ModalChangeCatalog/ModalDeleteCatalog/ModalDeleteCatalog";

const PreorderCataloguePage = () => {
  const [fetchedCatalogsList, setFetchedCatalogsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [catalogName, setCatalogName] = useState('');
  const [catalogYear, setCatalogYear] = useState('');
  const [catalogId, detCatalogId] = useState('');
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const catalogsList = useSelector(getAllCatalogs);

  useEffect(() => {
    dispatch(getCatalogs({ page: pageNumber, per_page: perPage }));
  }, [pageNumber]);

  useEffect(() => {
    setFetchedCatalogsList(catalogsList);
  }, [catalogsList]);

  const updateCatalogsList = (updatedList) => {
    setFetchedCatalogsList(updatedList);
  };
  
  
  const openModal = (name, year, id) => {
    setShowModal(true);
    setCatalogName(name);
    setCatalogYear(year);
    detCatalogId(id)
  }

  const closeModal = () => {
    setShowModal(false);
  }


  const handleDeleteCatalog = (id) => {
    dispatch(removeCatalog(id));  
    catalogsList.filter(catalog => catalog._id !== id);
  }

  return (
    <STyledContainer>
     <StyledDiv>
     {isLoggedIn && (
        <StyledInputWrp>
          <StyledBtnSearch><AiOutlineSearch size={'1.8em'}/></StyledBtnSearch>
          <StyledInput type="text" placeholder="Пошук" />
        </StyledInputWrp>
      )}
      <StyledH2>Каталоги для передзамовлення</StyledH2>
      <CatalogsList 
      catalogsList={fetchedCatalogsList}
      onDelete={handleDeleteCatalog} 
      onOpenModal={openModal}
      closeModal={closeModal}
      />
     </StyledDiv>
     {showModal && <ModalDeleteCatalog
      catalogName={catalogName}
      catalogYear={catalogYear} 
      catalogId={catalogId} 
      onCloseModal={closeModal} 
      catalogsList={fetchedCatalogsList}
      updateCatalogsList={updateCatalogsList} />}
    </STyledContainer>
  );
};

export default PreorderCataloguePage;
