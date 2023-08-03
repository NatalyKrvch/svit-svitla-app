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

  const handleChooseFilterButton = (value) => {
    setFilter(value);
  };

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
