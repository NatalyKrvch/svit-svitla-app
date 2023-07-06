// import { StyledIconCircle } from "react-icons/tb";
// import { StyledIconCircleFill } from "react-icons/vsc";
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

const ModalFilter = ({onCloseModal}) => {
  return (
    <Overlay>
      <ModalBody>
        <CloseButton onClick={()=>onCloseModal()}>
          <GrClose />
        </CloseButton>
        <StyledTitle>Фільтри</StyledTitle>
        <StyledFiltersWrp>
          <FilterBtn>
            Стельові
            <IconBtn>
              <StyledIconCircle /> <StyledIconCircleFill />
            </IconBtn>
          </FilterBtn>
          <FilterBtn>
            Підвісні
            <IconBtn>
              <StyledIconCircle /> <StyledIconCircleFill />
            </IconBtn>
          </FilterBtn>
          <FilterBtn>
            Бра
            <IconBtn>
              <StyledIconCircle /> <StyledIconCircleFill />
            </IconBtn>
          </FilterBtn>
          <FilterBtn>
            Точкові
            <IconBtn>
              <StyledIconCircle /> <StyledIconCircleFill />
            </IconBtn>
          </FilterBtn>
          <FilterBtn>
            Торшери
            <IconBtn>
              <StyledIconCircle /> <StyledIconCircleFill />
            </IconBtn>
          </FilterBtn>
          <FilterBtn>
            Настільні
            <IconBtn>
              <StyledIconCircle /> <StyledIconCircleFill />
            </IconBtn>
          </FilterBtn>
          <FilterBtn>
            Нічники
            <IconBtn>
              <StyledIconCircle /> <StyledIconCircleFill />
            </IconBtn>
          </FilterBtn>
          <StyledButtonChoose>
            Застосувати
          </StyledButtonChoose>
        </StyledFiltersWrp>
      </ModalBody>
    </Overlay>
  );
};

export default ModalFilter;
