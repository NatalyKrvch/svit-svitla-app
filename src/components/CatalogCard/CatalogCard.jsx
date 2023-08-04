import { useSelector } from "react-redux";
import CatalogPlug from "../../images/CatalogPlug/catalog-plug.jpg";
import {
  ImgWrp,
  StyledBtnDelete,
  StyledBtnDownload,
  StyledBtnEdit,
  StyledBtnWrp,
  StyledDiv,
  StyledImg,
  StyledP,
  StyledTextWRP,
} from "./CatalogCardStyled";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { useNavigate } from "react-router";
import ShareButton from "../Buttons/ShareButton/ShareButton";

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
        <StyledP>{catalogNameFirstLetterUppercase}</StyledP>
        <StyledP>{catalogYear}</StyledP>
      </StyledTextWRP>
      <StyledBtnWrp>
        {isLoggedIn ? (
          <StyledBtnEdit
            onClick={() => navigate(`/editcatauloguecard/${_id}`)}
          />
        ) : (
          <StyledBtnDownload onClick={() => handleDownload(catalogFileURL)} />
        )}
        {isLoggedIn ? (
          <StyledBtnDelete
            onClick={() => handleClick(catalogName, catalogYear, _id)}
          />
        ) : (
          <ShareButton
            title={catalogNameFirstLetterUppercase}
            text="Поділитися"
            url={catalogFileURL}
          />
        )}
      </StyledBtnWrp>
    </StyledDiv>
  );
};

export default CatalogCard;
