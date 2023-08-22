import { useParams } from "react-router";
import { getAllCatalogs } from "../../redux/Catalog/catalogSelectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CatalogPlug from "../../images/CatalogPlug/catalog-plug.jpg"
import {
  ButtonWrapper,
  FakeButton,
  FakeButtonDownload,
  FakeInputText,
  FakeInputWrp,
  FakeInputWrpDownload,
  FileInput,
  StyledButtonDelete,
  StyledCoverLabel,
  StyledDiv,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledP,
  StyledTitle,
} from "./EditCatalogueCardPageStyled";
import { BiPlusCircle } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDownloadDone } from "react-icons/md";
import { HiArrowUpTray } from "react-icons/hi2";
import { changeCatalog } from "../../redux/Catalog/catalogOperations";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal/Modal";
import Container from "../../components/Container/Container";
import MainButton from "../../components/Buttons/MainButton/MainButton";

const EditCatalogueCard = () => {
  const { id } = useParams();
  const catalogsList = useSelector(getAllCatalogs);
  const currentCatalog = catalogsList.find((catalog) => catalog._id === id);
 
  const [name, setCatalogName] = useState(currentCatalog?.catalogName || "");
  const [year, setYear] = useState(currentCatalog?.catalogYear || "");
  const [coverImageUrl, setCoverImageUrl] = useState(
    currentCatalog?.catalogCoverURL || ""
  );
  const [catalogFile, setCatalogFile] = useState(
    currentCatalog?.catalogFileURL || ""
  );
  const [showModal, setShowModal] = useState(false);
  console.log(catalogFile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const catalogNameFirstLetterUppercase =
  name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    setCatalogName(currentCatalog?.catalogName || "");
    setYear(currentCatalog?.catalogYear || "");
    setCoverImageUrl(currentCatalog?.catalogCoverURL || null);
    setCatalogFile(currentCatalog?.catalogFileURL || "");
  }, [currentCatalog]);

  const handleCatalogNameChange = (event) => {
    setCatalogName(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImageUrl(URL.createObjectURL(file));
  };

  const handleDeleteCoverImg = () => {
    setCoverImageUrl("");
    URL.revokeObjectURL(coverImageUrl);
  };

  const handleDeleteCatalogFile = () => {
    setCatalogFile("");
  }

  const handleCatalogImagesDownload = (event) => {
    const files = event.target.files;
    setCatalogFile(files);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/preordercatalogue");
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("catalogName", name.toLowerCase());
    formData.append("catalogYear", year);
    formData.append("catalogCoverURL", coverImageUrl || "");
    formData.append("catalogFileURL", catalogFile);
    console.log(formData);

    dispatch(changeCatalog({ id: currentCatalog._id, catalog: formData }));

    setCatalogName("");
    setYear("");
    setCoverImageUrl(null);
    setCatalogFile("");
    setShowModal(true);
  };

  return (
    <Container>
      <StyledDiv>
        <StyledTitle>Редагувати картку товару</StyledTitle>
        <StyledP>{catalogNameFirstLetterUppercase}</StyledP>
        <StyledP>{year}</StyledP>
        <StyledForm action="" onSubmit={handleSubmit}>
          {!coverImageUrl ? (
            <label>
              <FileInput
                type="file"
                required
                onChange={handleCoverImageChange}
                accept=".jpeg, .jpg"
                value={coverImageUrl}
              />
              <FakeInputWrp>
                <FakeInputText>Додати обкладинку</FakeInputText>
                <FakeButton type="button">
                  <BiPlusCircle size={"1.5em"} />
                </FakeButton>
              </FakeInputWrp>
            </label>
          ) : (
            <StyledInputWrapper>
              <StyledCoverLabel htmlFor="name">
              Обкладинка
              </StyledCoverLabel>
              <StyledImg src={coverImageUrl} alt="cover" />
              <StyledInput
                id="name"
                type="text"
                onChange={handleCoverImageChange}
                value={`Cover_${name}.jpeg`}
                readOnly
              />
              <StyledButtonDelete onClick={handleDeleteCoverImg}>
                <RiDeleteBin6Line
                  size={"1.8em"}
                  color="white"
                 
                />
              </StyledButtonDelete>
            </StyledInputWrapper>
          )}
          {catalogFile && (<StyledInputWrapper>
              <StyledCoverLabel htmlFor="name">
              Каталог
              </StyledCoverLabel>
              {/* <StyledImg src={CatalogPlug} alt="cover" /> */}
              <StyledInput
                id="name"
                type="text"
                value={`Catalog main.pdf`}
                readOnly
              />
              <StyledButtonDelete type="button ">
                <RiDeleteBin6Line
                  size={"1.8em"}
                  color="white"
                  onClick={handleDeleteCatalogFile}
                />
              </StyledButtonDelete>
            </StyledInputWrapper>)}
          <StyledInputWrapper>
            <StyledLabel htmlFor="catalogName">Назва каталогу</StyledLabel>
            <StyledInput
              type="text"
              name="catalogName"
              required
              pattern="/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/"
              title="Name may contain only letters, apostrophe, dash and spaces."
              onChange={handleCatalogNameChange}
              value={catalogNameFirstLetterUppercase}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor="year">Рік</StyledLabel>
            <StyledInput
              type="text"
              name="year"
              onChange={handleYearChange}
              value={year}
            />
          </StyledInputWrapper>
          <label>
            <FileInput
              type="file"
              onChange={handleCatalogImagesDownload}
              accept=".pdf"
              disabled={catalogFile}
            />
            <FakeInputWrpDownload>
              <FakeButtonDownload>
              {catalogFile ? (
              <MdDownloadDone size={"1.5em"} />
            ) : (
              <HiArrowUpTray size={"1.5em"} />
            )}
              </FakeButtonDownload>
              <FakeInputText>{catalogFile? "Завантажено" : "Завантажити каталог"}</FakeInputText>
            </FakeInputWrpDownload>
          </label>
          <ButtonWrapper>
            <MainButton
              type="submit"
              disabled={!name || !year || !coverImageUrl}
            >
              Зберегти
            </MainButton>
          </ButtonWrapper>
        </StyledForm>
        {showModal && (
          <Modal
            onCloseModal={closeModal}
            title="Картка каталогу успішно змінена!"
          />
        )}
      </StyledDiv>
    </Container>
  );
};

export default EditCatalogueCard;
