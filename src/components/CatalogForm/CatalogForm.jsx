import { useState } from "react";
import DropdownCardSelector from "../DropdownCardSelect/DropdownCardSelect";
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
  SubmitButton,
} from "./CatalogFormStyled";
import { useDispatch } from "react-redux";
import { HiArrowUpTray } from "react-icons/hi2";
import { addCatalog } from "../../redux/Catalog/catalogOperations";
import { BiPlusCircle } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const CatalogForm = () => {
  const [catalogName, setCatalogName] = useState("");
  const [year, setYear] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [catalogImages, setCatalogImages] = useState("");

  const dispatch = useDispatch();

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    setCoverImage(file);
  };

  const handleCatalogNameChange = (event) => {
    setCatalogName(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("catalogName", catalogName);
    formData.append("catalogYear", year);
    formData.append("catalogCoverURL", coverImage || "");
    formData.append("catalogFileURL", catalogImages);

    dispatch(addCatalog(formData));

    // dispatch(
    //   addCatalog({
    //     catalogName,
    //     catalogYear: year,

    //     catalogCoverURL: coverImage || "",

    //     catalogFileURL: catalogImages,
    //   })
    // );
    setCatalogName("");
    setYear("");
    setCoverImage(null);
    setCatalogImages("");
  };

  const handleDeleteCoverImg = () => {
    setCoverImage(null);
  };

  const handleCatalogImagesDownload = (event) => {
    const files = event.target.files;
    setCatalogImages(files);
  };

  return (
    <StyledForm action="" onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <StyledLabel htmlFor="catalogName">Назва каталогу</StyledLabel>
        <StyledInput
          type="text"
          name="catalogName"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          onChange={handleCatalogNameChange}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledLabel htmlFor="year">Рік</StyledLabel>

        <StyledInput type="text" name="year" onChange={handleYearChange} />
      </StyledInputWrapper>
      {coverImage === null ? (
        <label>
          <FileInput
            type="file"
            required
            onChange={handleCoverImageChange}
            accept=".jpg, .jpeg "
            multiple
            onChange={handleCatalogImagesDownload}
            accept=".pdf"

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
          <StyledImg src={`${coverImage}`} alt="cover" />
          <StyledInput
            id="name"
            type="text"
            onChange={handleCoverImageChange}
          />
          <StyledButtonDelete type="button " onClick={handleDeleteCoverImg}>
            <RiDeleteBin6Line size={"1.8em"} color="white" />
          </StyledButtonDelete>
        </StyledInputWrapper>
      )}
      <label>
        <FileInput
          type="file"
          multiple
          onChange={handleCatalogImagesDownload}
          accept=".jpg, .jpeg"
        />
        <FakeInputWrpDownload>
          <FakeButtonDownload>
            <HiArrowUpTray size={"1.5em"} />
          </FakeButtonDownload>
          <FakeInputText>Завантажити каталог</FakeInputText>
        </FakeInputWrpDownload>
      </label>
      <SubmitButton
        type="submit"
        disabled={
          !catalogName || !year || !coverImage || catalogImages.length === 0
        }
      >
        Зберегти
      </SubmitButton>
    </StyledForm>
  );
};

export default CatalogForm;
