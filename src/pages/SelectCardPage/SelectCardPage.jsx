import { useNavigate } from "react-router";
import DropdownCardSelector from "../../components/DropdownCardSelect/DropdownCardSelect";
import {
  ButtonWrapper,
  StyledFragment,
  StyledTitle,
  StyledWrp,
  TitleWrp,
} from "./SelectCardPageStyled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/Filter/selectors";
import Container from "../../components/Container/Container";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import { useEffect } from "react";
import { setFilter } from "../../redux/Filter/slice";

const SelectCardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filterData = useSelector(selectFilter);
  const filter = Object.keys(filterData)
  .filter(key => !isNaN(key)) 
  .map(key => filterData[key])
  .join('');


  useEffect(
    () => {
      dispatch(setFilter("Вид картки"));
      localStorage.removeItem("productName");
      localStorage.removeItem("productCode");
      localStorage.removeItem("productPrice");
      localStorage.removeItem(
        "manufacturerCountry"
      );
      localStorage.removeItem("category");
      localStorage.removeItem("coverImage");
      localStorage.removeItem("coverImageUrl");
      localStorage.removeItem("productImages");
      localStorage.removeItem("productImagesUrl");
      localStorage.removeItem(
        "additionalCharacteristics"
      );
      console.log("134564");
      },
    []
  );
 

  return (
    <Container>
      <StyledFragment>
        <TitleWrp>
          <StyledTitle>Створити картку</StyledTitle>
        </TitleWrp>
        <StyledWrp>
          <DropdownCardSelector />
        </StyledWrp>
        <ButtonWrapper>
          <MainButton
            type="button"
            disabled={filter === "Вид картки"}
            onClick={() => navigate("/createcard")}
          >
            Далі
          </MainButton>
        </ButtonWrapper>
      </StyledFragment>
    </Container>
  );
};

export default SelectCardPage;
