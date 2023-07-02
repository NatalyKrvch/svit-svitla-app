import { useSelector } from "react-redux";
import { StyledBtn, StyledBtnWrp, StyledDiv, StyledImg, StyledP, StyledTextWRP } from "./CatalogCardStyled";
import { RiPencilLine, RiDeleteBin6Line } from "react-icons/ri";
import { TbDownload } from "react-icons/tb";
import { BiShareAlt } from "react-icons/bi";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { useNavigate } from "react-router";

const CatalogCard = ({catalog,  onOpenModal}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { catalogName, catalogYear, catalogCoverURL, _id} = catalog
  const navigate = useNavigate();
  
  const handleClick = (catalogName, catalogYear) => {
    onOpenModal(catalogName, catalogYear );
  };

  return (
    <StyledDiv>
      <StyledImg src={catalogCoverURL} alt="cover" />
      <StyledTextWRP>
        <StyledP>{catalogName}</StyledP>
        <StyledP>{catalogYear}</StyledP>
      </StyledTextWRP>
      <StyledBtnWrp>
        <StyledBtn type="button" onClick={()=> navigate(`/editcatauloguecard/${_id}`)}>
          {isLoggedIn ? <RiPencilLine size={"1.5em"} /> : <TbDownload />}
        </StyledBtn>
        <StyledBtn type="button" onClick={(catalogName, catalogYear)=> handleClick(catalogName, catalogYear)}>
          {isLoggedIn ? <RiDeleteBin6Line size={"1.5em"} /> : <BiShareAlt />}
        </StyledBtn>
      </StyledBtnWrp>
    </StyledDiv>
  );
};

export default CatalogCard;
