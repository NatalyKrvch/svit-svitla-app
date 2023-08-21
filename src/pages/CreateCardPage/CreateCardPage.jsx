import ProductForm from "../../components/ProductForm/ProductForm";
import CatalogForm from "../../components/CatalogForm/CatalogForm";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/Filter/selectors";
import { StyledFragment } from "./CreateCardPageStyled";
import DropdownCardSelector from "../../components/DropdownCardSelect/DropdownCardSelect";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal/Modal";
import { setModalOpen } from "../../redux/Product/productReducer";
import { setModalOpen as setModalCatalogOpen } from "../../redux/Catalog/catalogReducer";
import Container from "../../components/Container/Container";
import TitleMain from "../../components/TitleMain/TitleMain";
import { isModalOpen } from "../../redux/Product/productSelectors";
import { isModalOpen as isModalCatalogOpen } from "../../redux/Catalog/catalogSelectors";

const CreateCardPage = () => {
  const showModal = useSelector(isModalOpen);
  const showCatalogModal = useSelector(isModalCatalogOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(setModalOpen(false));
    dispatch(setModalCatalogOpen(false));
    navigate(filter === "Картка товару" ? "/" : "/preordercatalogue");
  };

  const onNavigation = () => {
    dispatch(setModalOpen(false));
    navigate("/qrcodegeneration");
  };

  const filterData = useSelector(selectFilter);
  const filter = Object.keys(filterData)
    .filter((key) => !isNaN(key))
    .map((key) => filterData[key])
    .join("");
  
  return (
    <Container>
      <StyledFragment>
        <TitleMain text="Створити картку" />
        <DropdownCardSelector />
        {filter === "Картка товару" && <ProductForm />}
        {filter === "Картка каталогу" && <CatalogForm />}
        {(showModal || showCatalogModal) && (
          <Modal
            onCloseModal={onCloseModal}
            title={
              filter === "Картка товару"
                ? "Картка успішно створена!"
                : "Картка каталогу успішно створена!"
            }
            numberOfButtons={filter === "Картка товару" ? 1 : 0}
            onConfirmation={filter === "Картка товару" ? onNavigation : null}
            filter={filter}
          />
        )}
      </StyledFragment>
    </Container>
  );
};

export default CreateCardPage;
