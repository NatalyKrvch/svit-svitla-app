import { useState } from "react";
import {
  FakeButton,
  FakeButtonDownload,
  FakeInputText,
  FakeInputWrp,
  FakeInputWrpDownload,
  FileInput,
  StyledButtonDelete,
  StyledCoverLabel,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  ButtonWrapper,
} from "./CatalogFormStyled";
import { useDispatch } from "react-redux";
import { HiArrowUpTray } from "react-icons/hi2";
import { addCatalog } from "../../redux/Catalog/catalogOperations";
import { BiPlusCircle } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDownloadDone } from "react-icons/md";
import MainButton from "../Buttons/MainButton/MainButton";

const CatalogForm = () => {
  const [catalogName, setCatalogName] = useState("");
  const [year, setYear] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [catalogFile, setCatalogFile] = useState("");
  console.log(catalogName);

  const dispatch = useDispatch();

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImageUrl(URL.createObjectURL(file));
    setCoverImage(file);
  };

  const handleCatalogNameChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      setCatalogName("");
    } else {
    setCatalogName(inputValue);
    }};

  const handleYearChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      setYear("");
    } else {
    setYear(inputValue);
  }};

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("catalogName", catalogName.toLowerCase());
    formData.append("catalogYear", year);
    formData.append("catalogCoverURL", coverImage || "");
    formData.append("catalogFileURL", catalogFile);

    dispatch(addCatalog(formData));

    setCatalogName("");
    setYear("");
    setCoverImage(null);
    setCoverImageUrl("");
    URL.revokeObjectURL(coverImageUrl);
    setCatalogFile("");
  };

  const handleDeleteCoverImg = () => {
    setCoverImage(null);
    setCoverImageUrl("");
    URL.revokeObjectURL(coverImageUrl);
  };

  const handleCatalogImagesDownload = (event) => {
    const files = event.target.files[0];
    if (!files) {
      alert("Будь-ласка завантажте файл каталогу.");
      return;
    }
    setCatalogFile(files);
  };

  return (
    <StyledForm action="" onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <StyledLabel htmlFor="catalogName">Назва каталогу</StyledLabel>
        <StyledInput
          type="text"
          name="catalogName"
          required
          pattern="[a-zA-Zа-яА-ЯґҐєЄіІїЇёЁ0-9\s]*"
          title="Будь-ласка вводьте літери англійського чи українського алфавіту"
          value={catalogName}
          onChange={handleCatalogNameChange}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="year">Рік</StyledLabel>
        <StyledInput
          type="text"
          name="year"
          pattern="^\d{4}(?:-\d{4})?"
          value={year}
          onChange={handleYearChange}
        />
      </StyledInputWrapper>
      {coverImage === null ? (
        <label>
          <FileInput
            type="file"
            required
            onChange={handleCoverImageChange}
            accept=".jpeg, .jpg"
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
          <StyledCoverLabel htmlFor="name">Назва обкладинки</StyledCoverLabel>
          <StyledImg src={coverImageUrl} alt="cover" />
          <StyledInput
            id="name"
            type="text"
            onChange={handleCoverImageChange}
            value={`${catalogName}.jpeg`}
          />
          <StyledButtonDelete type="button " onClick={handleDeleteCoverImg}>
            <RiDeleteBin6Line size={"1.8em"} color="white" />
          </StyledButtonDelete>
        </StyledInputWrapper>
      )}
      <label>
        <FileInput
          type="file"
          onChange={handleCatalogImagesDownload}
          accept=".pdf"
          required
        />
        <FakeInputWrpDownload>
          <FakeButtonDownload>
            {catalogFile ? (
              <MdDownloadDone size={"1.5em"} />
            ) : (
              <HiArrowUpTray size={"1.5em"} />
            )}
          </FakeButtonDownload>
          <FakeInputText>
            {catalogFile ? "Завантажено" : "Завантажити каталог"}
          </FakeInputText>
        </FakeInputWrpDownload>
      </label>
      <ButtonWrapper>
        <MainButton
          type="submit"
          disabled={!catalogName || !year || !coverImage || !catalogFile}
        >
          Зберегти
        </MainButton>
      </ButtonWrapper>
    </StyledForm>
  );
};

export default CatalogForm;
