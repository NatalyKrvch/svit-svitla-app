import { useSelector } from "react-redux";
import axios from "axios";
import {
  StyledBtn,
  StyledBtnWrp,
  StyledDiv,
  StyledImg,
  StyledP,
  StyledTextWRP,
} from "./CatalogCardStyled";
import { RiPencilLine, RiDeleteBin6Line } from "react-icons/ri";
import { TbDownload } from "react-icons/tb";
// import { BiShareAlt } from "react-icons/bi";
import { getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { useNavigate } from "react-router";
import ShareButton from "../Buttons/ShareButton/ShareButton";

const CatalogCard = ({ catalog, onOpenModal }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { catalogName, catalogYear, catalogCoverURL, _id, catalogFileURL } =
    catalog;
  const navigate = useNavigate();

  const handleClick = (name, year, id) => {
    onOpenModal(name, year, id);
  };

  const handleDownload = (fileURL) => {
    axios
      .get(fileURL, { responseType: "blob" })
      .then((response) => {
        // Создание ссылки на Blob объект и его привязка к элементу "a" на странице
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.pdf"); // Указываем имя файла для сохранения
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error("Ошибка загрузки файла:", error);
        // Обработка ошибки при загрузке файла
      });
  };

  return (
    <StyledDiv>
      <StyledImg src={catalogCoverURL} alt="cover" />
      <StyledTextWRP>
        <StyledP>{catalogName}</StyledP>
        <StyledP>{catalogYear}</StyledP>
      </StyledTextWRP>
      <StyledBtnWrp>
        {isLoggedIn ? (
          <StyledBtn
            type="button"
            onClick={() => navigate(`/editcatauloguecard/${_id}`)}
          >
            <RiPencilLine size={"1.5em"} />
          </StyledBtn>
        ) : (
          <StyledBtn onClick={() => handleDownload(catalogFileURL)}>
            <TbDownload size={"1.5em"} />
          </StyledBtn>
        )}
        {isLoggedIn ? (
          <StyledBtn
            type="button"
            onClick={() => handleClick(catalogName, catalogYear, _id)}
          >
            <RiDeleteBin6Line size={"1.5em"} />
          </StyledBtn>
        ) : (
          <ShareButton />
        )}
      </StyledBtnWrp>
    </StyledDiv>
  );
};

export default CatalogCard;
