import { useSelector } from "react-redux";
import { StyledBtn, StyledBtnWrp, StyledDiv, StyledImg, StyledP, StyledTextWRP } from "./CatalogCardStyled";
import { RiPencilLine, RiDeleteBin6Line } from "react-icons/ri";
import { TbDownload } from "react-icons/tb";
import { BiShareAlt } from "react-icons/bi";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";

const CatalogCard = ({ catalog, onDelete }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { catalogName, catalogYear, catalogCoverURL} = catalog
  return (
    <StyledDiv>
      <StyledImg src={catalogCoverURL} alt="cover" />
      <StyledTextWRP>
        <StyledP>{catalogName}</StyledP>
        <StyledP>{catalogYear}</StyledP>
      </StyledTextWRP>
      <StyledBtnWrp>
        <StyledBtn type="button">
          {isLoggedIn ? <RiPencilLine size={"1.5em"} /> : <TbDownload />}
        </StyledBtn>
        <StyledBtn type="button" onClick={onDelete}>
          {isLoggedIn ? <RiDeleteBin6Line size={"1.5em"} /> : <BiShareAlt />}
        </StyledBtn>
      </StyledBtnWrp>
    </StyledDiv>
  );
};

export default CatalogCard;
