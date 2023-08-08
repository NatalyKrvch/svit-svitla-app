import { GrClose } from "react-icons/gr";
import {
  CloseButton,
  FilterBtn,
  IconBtn,
  ModalBody,
  Overlay,
  StyledButtonChoose,
  StyledFiltersWrp,
  StyledIconCircle,
  StyledIconCircleFill,
  StyledTitle,
} from "./ModalFilterStyled";
import { useEffect, useState } from "react";
import { categoryList } from "../../ProductForm/categoryList.json";
import MainButton from "../../Buttons/MainButton/MainButton";

const ModalFilter = ({ onCloseModal, onSubmit }) => {
  const [filter, setFilter] = useState("");


  useEffect(() => {
    const body = document.body;
    // Блокируем скроллинг фона при открытии модалки
    body.style.overflow = "hidden";

    // Убираем блокировку скроллинга при закрытии модалки
    return () => {
      body.style.overflow = "visible";
    };
  }, []);

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.keyCode === 27) {
        onCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [onCloseModal]);

  const handleInnerClick = (event) => {
    event.stopPropagation();
  };

  const handleChooseFilterButton = (value) => {
    setFilter(value);
  };

  return (
    <Overlay onClick={() => onCloseModal()}>
      <ModalBody>
        <CloseButton onClick={() => onCloseModal()}>
          <GrClose />
        </CloseButton>
        <StyledTitle>Фільтри</StyledTitle>
        <StyledFiltersWrp onClick={handleInnerClick}>
          {categoryList.map((el) => {
            return (
              <FilterBtn key={el} onClick={() => handleChooseFilterButton(el)}>
                {el}
                <IconBtn>
                  <StyledIconCircle />
                  {filter === `${el}` && <StyledIconCircleFill />}
                </IconBtn>
              </FilterBtn>
            );
          })}
          <MainButton onClick={() => onSubmit(filter)}>Застосувати</MainButton>
        </StyledFiltersWrp>
      </ModalBody>
    </Overlay>
  );
};

export default ModalFilter;
