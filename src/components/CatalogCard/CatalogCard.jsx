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
import { getAccessToken, getIsLoggedIn } from "../../redux/Auth/authSelectors";
import { useNavigate } from "react-router";
import ShareButton from "../Buttons/ShareButton/ShareButton";
import { useEffect } from "react";
import { useState } from "react";

const CatalogCard = ({ catalog, onOpenModal }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [currentURL, setCurrentURL] = useState("");
  const { catalogName, catalogYear, catalogCoverURL, _id, catalogFileURL } =
    catalog;
  const navigate = useNavigate();
  const catalogNameFirstLetterUppercase = catalogName.charAt(0).toUpperCase() + catalogName.slice(1)
  

  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  const handleClick = (name, year, id) => {
    console.log(name);
    onOpenModal(name, year, id);
  };

  const handleDownload = (fileURL) => {
    {
      // Создаем ссылку на файл
      const link = document.createElement('a');
      link.href = fileURL;
      link.setAttribute('download', 'file.pdf'); // Указываем имя файла для сохранения
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Удаляем ссылку после загрузки файла
    };
  };

  return (
    <StyledDiv>
      <StyledImg src={catalogCoverURL} alt="cover" />
      <StyledTextWRP>
        <StyledP>{catalogNameFirstLetterUppercase}</StyledP>
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
          <StyledBtn
            type="button"
            onClick={()=> handleDownload(catalogFileURL)}
          >
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
          <ShareButton
           title={catalogNameFirstLetterUppercase} 
           text="Поділитися"
           url={currentURL}/>
        )}
      </StyledBtnWrp>
    </StyledDiv>
  );
};

export default CatalogCard;
