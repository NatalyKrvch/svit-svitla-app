import DropdownCardSelector from "../components/DropdownCardSelect/DropdownCardSelect"
import ProductForm from "../components/ProductForm/ProductForm";
import CatalogForm from "../components/CatalogForm/CatalogForm";
import {  useSelector } from "react-redux";
import { selectFilter } from "../redux/Filter/selectors";


const CreateCardPage = () => {

  const filter = useSelector(selectFilter);
  
  return (
    <>
    <DropdownCardSelector/>
    {filter === "Картка товару" &&  <ProductForm/> }
    {filter === "Картка каталогу" &&  <CatalogForm/> }
    </>
  )
}

export default CreateCardPage;