import { useNavigate } from "react-router";
import DropdownCardSelector from "../../components/DropdownCardSelect/DropdownCardSelect";
import { NextButton } from "./SelectCardPageStyled";





const SelectCardPage = () => {

  const navigate = useNavigate();

  return (
    <>
    <DropdownCardSelector />
    <NextButton type="button" onClick={()=> navigate('/createcard')}>Далі</NextButton>
    </>
  )
}

export default SelectCardPage
