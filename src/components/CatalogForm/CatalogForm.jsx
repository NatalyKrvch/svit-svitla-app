import { useState } from "react";
import { DownloadCatalogButton, FakeButton, FakeInputText, FakeInputWrp, FileInput, StyledButtonDelete, StyledCoverLabel, StyledForm, StyledFragment, StyledImg, StyledInput, StyledInputWrapper, StyledLabel, StyledSelect, StyledTitle, StyledWrpSelector, SubmitButton, TitleWrp } from "./CatalogFormStyled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/Filter/selectors";
import { setFilter } from "../../redux/Filter/slice";
import { HiArrowUpTray} from "react-icons/hi2"
import { addCatalog, getCatalogs } from "../../redux/Catalog/catalogOperations";
import { BiPlusCircle } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri"


const CatalogForm = () => {
    const [catalogName, setCatalogName] = useState("");
    const [year, setYear] = useState("");
    const [coverImage, setCoverImage] = useState(null);
    const optionFilter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleChangeOptionFilter = (event) => {
        dispatch(setFilter(event.target.value))
      };

      const handleCoverImageChange = (event) => {
        const file = event.target.files[0];
        setCoverImage(file);
      };

    const handleCatalogNameChange = (event) => {
       setCatalogName(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleSubmit = (ev) => {
       ev.preventDefault();
       dispatch(addCatalog({
        catalogName,
        year,
        coverImage,
       }));
       setCatalogName("");
       setYear("");
       setCoverImage(null);
    }

    const handleDeleteCoverImg = () => {
      setCoverImage(null);
    }
  
    const handleDownloadCatalog = () => {
      dispatch(getCatalogs());
    }

    return (
 <StyledFragment>
  <TitleWrp>
   <StyledTitle>Створити картку</StyledTitle>
   </TitleWrp>
    <StyledWrpSelector>
      <StyledSelect value={optionFilter} onChange={handleChangeOptionFilter}>
        <option value="productCard">Картка товару</option>
        <option value="catalogCard">Картка каталогу</option>
      </StyledSelect>
    </StyledWrpSelector>
    <StyledForm action="" onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <StyledLabel htmlFor="catalogName">Назва каталогу</StyledLabel> 
        <StyledInput type="text" name="catalogName" onChange={handleCatalogNameChange}/>
        </StyledInputWrapper>
        <StyledInputWrapper>
        <StyledLabel htmlFor="year">Рік</StyledLabel>
       
        <StyledInput type="text" name="year" onChange={handleYearChange}/>
        </StyledInputWrapper>
        { coverImage === null ? 
        <label>
        <FileInput 
        type="file"
         onChange={handleCoverImageChange} 
         accept = ".jpg, .jpeg "/>
          <FakeInputWrp>
            <FakeInputText>Додати обкладинку</FakeInputText>
            <FakeButton type="button">
              <BiPlusCircle size={"1.5em"} />
            </FakeButton>
          </FakeInputWrp>
        </label> :
        <StyledInputWrapper>
        <StyledCoverLabel htmlFor="name">Назва обкладинки</StyledCoverLabel>
        <StyledImg src={`${coverImage}`} alt="cover" />
        <StyledInput
          id="name"
          type="text"
          onChange={handleCoverImageChange}
        />
        <StyledButtonDelete type="button " onClick={handleDeleteCoverImg} ><RiDeleteBin6Line size={'1.8em'} color="white"/></StyledButtonDelete>
      </StyledInputWrapper>}
       
        <DownloadCatalogButton type="button" onClick={handleDownloadCatalog}><HiArrowUpTray size={'1.5em'}/> Завантажити каталог</DownloadCatalogButton>
        <SubmitButton type="submit">Зберегти</SubmitButton>
    </StyledForm>
 </StyledFragment>

    )
}

export default CatalogForm;