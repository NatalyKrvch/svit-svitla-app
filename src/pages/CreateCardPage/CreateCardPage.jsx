import ProductForm from "../../components/ProductForm/ProductForm";
import CatalogForm from "../../components/CatalogForm/CatalogForm";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/Filter/selectors";
import { StyledFragment, StyledTitle, TitleWrp } from "./CreateCardPageStyled";
import DropdownCardSelector from "../../components/DropdownCardSelect/DropdownCardSelect";
// import ModalCreateProductCard from "../../components/Modal/ModalCreateProductCard/ModalCreateProductCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal/Modal";
import { setModalOpen } from "../../redux/Product/productReducer";

const CreateCardPage = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
    dispatch(setModalOpen(false));
    navigate(filter === "Картка товару" ? "/" : "/preordercatalogue");
  };

  const onNavigation = () => {
    dispatch(setModalOpen(false));
    navigate("/qrcodegeneration");
  }

  const filter = useSelector(selectFilter);

  return (
    <StyledFragment>
      <TitleWrp>
        <StyledTitle>Створити картку</StyledTitle>
      </TitleWrp>
      <DropdownCardSelector />
      {filter === "Картка товару" && <ProductForm openModal={onOpenModal} />}
      {filter === "Картка каталогу" && <CatalogForm openModal={onOpenModal} />}
      {showModal && (
        // <ModalCreateProductCard
        // onCloseModal={onCloseModal}
        // title={(filter === "Картка товару") ? "Картка успішно створена" : "Картка каталогу успішно створена"}
        //       filter={filter} />
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
  );
};

export default CreateCardPage;
