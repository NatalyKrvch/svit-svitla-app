import { useState } from "react";
import { StyledSelect, StyledTitle, StyledWrpSelector } from "./CatalogFormStyled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/Filter/selectors";
import { setFilter } from "../../redux/Filter/slice";
import { HiArrowUpTray} from "react-icons/hi"

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

    return (
 <>
   <StyledTitle>Створити картку</StyledTitle>
    <StyledWrpSelector>
      <StyledSelect value={optionFilter} onChange={handleChangeOptionFilter}>
        <option value="productCard">Картка товару</option>
        <option value="catalogCard">Картка каталогу</option>
      </StyledSelect>
    </StyledWrpSelector>
    <form action="">
        <label htmlFor="catalogName">Назва каталогу</label>
        <br />
        <input type="text" name="catalogName"/>
        <br />
        <label htmlFor="year">Рік</label>
        <br />
        <input type="text" name="year" />
        <br />
        <label htmlFor="cover">Додати обкладинку</label>
        <input id="cover" type="file" onChange={handleCoverImageChange} />
        <br />
        <button type="button"><HiArrowUpTray/> Завантажити каталог</button>
        <button type="submit">Зберегти</button>
    </form>
 </>

    )
}

export default CatalogForm;