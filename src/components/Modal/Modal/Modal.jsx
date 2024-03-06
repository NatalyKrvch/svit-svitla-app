import { useEffect } from "react";
import { createPortal } from "react-dom";
import { GrClose } from "react-icons/gr";
import lampYellow from "../../../images/Popup/lamp-yellow.svg";
import lampRed from "../../../images/Popup/lamp-red.svg";
import {
  BtnWrapper,
  CloseButton,
  ModalBody,
  Overlay,
  StyledEmpTitle,
  StyledImg,
  StyledText,
  StyledTitle,
} from "./ModalStyled";
import MainButton from "../../Buttons/MainButton/MainButton";

const Modal = ({
  color = "yellow",
  numberOfButtons = 0,
  title,
  empTitle = null,
  text = null,
  onConfirmation = null,
  onCloseModal,
}) => {
  const modalRoot = document.getElementById("modal-root");

    useEffect(() => {
      const body = document.body;
      body.style.overflow = "hidden";

      return () => {
        body.style.overflow = "visible";
      };
    }, []);

    useEffect(() => {
      window.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
          onCloseModal();
        }
      });

      return window.removeEventListener("keydown", (event) => {});
    }, [onCloseModal]);

    const handleOverlay = (event) => {
      if (event.currentTarget === event.target) {
        onCloseModal();
      }
  };
  
  return createPortal(
    <Overlay onClick={handleOverlay}>
      <ModalBody>
        <StyledImg src={color === "yellow" ? lampYellow : lampRed} alt="lamp" />
        <StyledTitle>
          {title.slice(0, -1)}
          {empTitle && <StyledEmpTitle> {empTitle}</StyledEmpTitle>}
          {title[title.length - 1]}
        </StyledTitle>
        {text && <StyledText>{text}</StyledText>}
        {numberOfButtons > 0 && (
          <BtnWrapper>
            {numberOfButtons === 1 && (
              <MainButton onClick={onConfirmation}>QR code</MainButton>
            )}
            {numberOfButtons === 2 && (
              <>
                <MainButton buttonType="secondary" onClick={onCloseModal}>
                  Повернутися
                </MainButton>
                <MainButton buttonType="warning" onClick={onConfirmation}>
                  Так
                </MainButton>
              </>
            )}
          </BtnWrapper>
        )}
        <CloseButton onClick={() => onCloseModal()}>
          <GrClose style={{ width: "20px", height: "20px" }} />
        </CloseButton>
      </ModalBody>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
