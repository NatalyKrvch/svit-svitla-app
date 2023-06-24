import ProductForm from "../../components/ProductForm/ProductForm";
import CatalogForm from "../../components/CatalogForm/CatalogForm";
import {  useSelector } from "react-redux";
import { selectFilter } from "../../redux/Filter/selectors";
import { StyledFragment, StyledTitle, TitleWrp } from "./CreateCardPageStyled";
import DropdownCardSelector from "../../components/DropdownCardSelect/DropdownCardSelect";


const CreateCardPage = () => {

  const filter = useSelector(selectFilter);
  
  return (
    <StyledFragment>
      <TitleWrp>
        <StyledTitle>Створити картку</StyledTitle>
      </TitleWrp>
      <DropdownCardSelector />
    {filter === "Картка товару" &&  <ProductForm/> }
    {filter === "Картка каталогу" &&  <CatalogForm/> }
    </StyledFragment>
  )
}

export default CreateCardPage;