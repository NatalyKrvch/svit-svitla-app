import lampYellow from "../../images/Popup/lamp-yellow@2x.png";
import { StyledImg, StyledTitle, StyledWrp, StyledWrpPlug } from "./NotFoundStyled";


const NotFound = ({ message }) => {
  return (
    <StyledWrp>
      <StyledWrpPlug>
        <StyledImg src={lampYellow} alt="lamp" />
        <StyledTitle>{message}</StyledTitle>
      </StyledWrpPlug>
    </StyledWrp>
  );
};

export default NotFound;
