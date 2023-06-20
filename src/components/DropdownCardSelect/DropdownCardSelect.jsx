import { useDispatch, useSelector } from "react-redux";
import { StyledOptions, StyledSelect, StyledWrpSelector } from "./DropdownCardSelectStyled";
import { selectFilter } from "../../redux/Filter/selectors";
import { setFilter } from "../../redux/Filter/slice";




const DropdownCardSelector = () => {

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const setFilterOnChange = (evt) => {
    dispatch(setFilter(evt.target.value));
  }

  return (
    <>
      <StyledWrpSelector>
        <StyledSelect value={filter} onChange={setFilterOnChange}>
          <StyledOptions value="Вид картки" hidden>Вид картки</StyledOptions>
          <StyledOptions value="Картка товару">Картка товару</StyledOptions>
          <StyledOptions value="Картка каталогу">Картка каталогу</StyledOptions>
        </StyledSelect>
      </StyledWrpSelector>
    </>
  )
}

export default DropdownCardSelector
