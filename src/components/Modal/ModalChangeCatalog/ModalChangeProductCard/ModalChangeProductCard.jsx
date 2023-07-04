import { GrClose } from "react-icons/gr";
import lampYellow from "../../../../images/Popup/lamp-yellow@1x.png" 
import { CloseButton, ModalBody, Overlay, StyledImg, StyledTitle, SubmitButtonQRCode } from "./ModalChangeProductCardStyled";


const ModalChangeProductCard = ({onCloseModal}) => {
   

    return (
        <Overlay>
        <ModalBody>
            <CloseButton onClick={()=> onCloseModal()}> <GrClose/></CloseButton>
            <StyledImg src={lampYellow} alt="lamp" />
            <StyledTitle>Картка успішно змінена</StyledTitle>  
            <SubmitButtonQRCode>QR Code</SubmitButtonQRCode>   
        </ModalBody>
     </Overlay>
    )
}

export default ModalChangeProductCard