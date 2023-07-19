import { GrClose } from "react-icons/gr";
import lampYellow from "../../../../images/Popup/lamp-yellow@1x.png";
import lampRed from "../../../../images/Popup/lamp-red@1x.png";
import { useNavigate } from "react-router-dom";
import {
  CloseButton,
  ModalBody,
  Overlay,
  StyledImg,
  StyledTitle,
  SubmitButtonQRCode,
} from "./ModalStyled";

const Modal = ({
  color = "yellow",
  numberOfButtons = 0,
  title,
  text = null,
  confirmationFn,
  backupFn = null,
}) => {
  return (
    <Overlay>
      <ModalBody>
        <StyledImg src={color === "yellow" ? lampYellow : lampRed} alt="lamp" />
        <StyledTitle>{title}</StyledTitle>
        <CloseButton onClick={() => onCloseModal()}>
          <GrClose />
        </CloseButton>
      </ModalBody>
    </Overlay>
  );
};

export default Modal;
