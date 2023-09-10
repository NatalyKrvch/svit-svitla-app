import { useSelector } from "react-redux";
import CatalogPlug from "../../images/CatalogPlug/catalog-plug.jpg";
import {
  ImgWrp,
  StyledBtn,
  StyledBtnDownload,
  StyledBtnWrp,
  StyledDiv,
  StyledImg,
  StyledName,
  StyledP,
  StyledTextWRP,
} from "./CatalogCardStyled";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { useNavigate } from "react-router";
import ShareButton from "../Buttons/ShareButton/ShareButton";
import { RiPencilLine, RiDeleteBin6Line } from "react-icons/ri";
import { TbDownload } from "react-icons/tb";

const CatalogCard = ({ catalog, onOpenModal }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { catalogName, catalogYear, catalogCoverURL, _id, catalogFileURL } =
    catalog;

  const navigate = useNavigate();
  const catalogNameFirstLetterUppercase =
    catalogName.charAt(0).toUpperCase() + catalogName.slice(1);

  const handleClick = (name, year, id) => {
    onOpenModal(name, year, id);
  };

  const textForShare = `Каталог ${catalogNameFirstLetterUppercase} для передзамовлення в магазині "Світ світла"`;

  const handleDownload = (fileURL) => {
    {
      const link = document.createElement("a");
      link.href = fileURL;
      link.setAttribute("download", "file.pdf");
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    }
  };

  return (
    <StyledDiv>
      <ImgWrp>
        <StyledImg src={catalogCoverURL || CatalogPlug} alt="cover" />
      </ImgWrp>
      <StyledTextWRP>
        <StyledName>{catalogNameFirstLetterUppercase}</StyledName>
        <StyledP>{catalogYear}</StyledP>
      </StyledTextWRP>
      <StyledBtnWrp>
        {isLoggedIn ? (
          <StyledBtn onClick={() => navigate(`/editcatauloguecard/${_id}`)}>
          <RiPencilLine size={"1.5em"}/>
          </StyledBtn>
        ) : (
          <StyledBtnDownload  onClick={() => handleDownload(catalogFileURL)} >
          <TbDownload size={"1.5em"}/>
          </StyledBtnDownload>)}
        {isLoggedIn ? (
         <StyledBtn  onClick={() => handleClick(catalogName, catalogYear, _id)}>
          <RiDeleteBin6Line size={"1.5em"}/>
          </StyledBtn>
        ) : (
          <ShareButton
            title={catalogNameFirstLetterUppercase}
            text={textForShare}
            url={catalogFileURL}
          />
        )}
      </StyledBtnWrp>
    </StyledDiv>
  );
};

export default CatalogCard;
