import lampGrey from "../../images/Popup/lamp-grey@2x.png";
import { StyledImg, StyledTitle, StyledWrp, StyledWrpPlug } from "./NotFoundStyled";


const NotFound = ({ message }) => {
  return (
    <StyledWrp>
      <StyledWrpPlug>
        <StyledImg src={lampGrey} alt="lamp" />
        <StyledTitle>{message}</StyledTitle>
      </StyledWrpPlug>
    </StyledWrp>
  );
};

export default NotFound;
